from pathlib import Path
import re

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "src" / "content"
STATIC_DIR = ROOT / "static"


def clean(text):
    return re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", text.strip())


def build_styles():
    styles = getSampleStyleSheet()
    primary = colors.HexColor("#172033")
    muted = colors.HexColor("#4f5d6f")
    accent = colors.HexColor("#5258e4")

    styles.add(
        ParagraphStyle(
            name="DocTitle",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=22,
            leading=26,
            textColor=primary,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Tagline",
            parent=styles["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=13,
            textColor=accent,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Contact",
            parent=styles["Normal"],
            fontSize=8.5,
            leading=11,
            textColor=muted,
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=12,
            leading=14,
            textColor=primary,
            spaceBefore=8,
            spaceAfter=5,
            borderWidth=0,
            borderPadding=0,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Subsection",
            parent=styles["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=primary,
            spaceBefore=5,
            spaceAfter=3,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Body",
            parent=styles["Normal"],
            fontSize=9,
            leading=12,
            textColor=colors.HexColor("#263143"),
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeBullet",
            parent=styles["Normal"],
            fontSize=8.8,
            leading=11.5,
            textColor=colors.HexColor("#263143"),
        )
    )
    return styles


def parse_markdown(markdown, styles):
    story = []
    bullets = []
    title_seen = False
    contact_lines = []
    collecting_contact = False

    def flush_bullets():
        nonlocal bullets
        if bullets:
            for item in bullets:
                story.append(Paragraph(f"- {clean(item)}", styles["ResumeBullet"]))
            story.append(Spacer(1, 2))
            bullets = []

    def flush_contact():
        nonlocal contact_lines, collecting_contact
        if contact_lines:
            story.append(Paragraph("<br/>".join(map(clean, contact_lines)), styles["Contact"]))
            contact_lines = []
        collecting_contact = False

    for raw_line in markdown.splitlines():
        line = raw_line.rstrip()
        if not line.strip():
            flush_bullets()
            if collecting_contact:
                flush_contact()
            continue

        if line.startswith("# "):
            flush_bullets()
            flush_contact()
            story.append(Paragraph(clean(line[2:]), styles["DocTitle"]))
            title_seen = True
            collecting_contact = True
            continue

        if title_seen and collecting_contact and not line.startswith("#") and not line.startswith("-"):
            contact_lines.append(line)
            continue

        flush_contact()

        if line.startswith("## "):
            flush_bullets()
            story.append(Spacer(1, 2))
            story.append(Paragraph(clean(line[3:]), styles["Section"]))
        elif line.startswith("### "):
            flush_bullets()
            story.append(Paragraph(clean(line[4:]), styles["Subsection"]))
        elif line.startswith("- "):
            bullets.append(line[2:])
        else:
            flush_bullets()
            if title_seen and not story[-1].style.name == "Tagline" and len(story) == 2:
                story.append(Paragraph(clean(line), styles["Tagline"]))
            else:
                story.append(Paragraph(clean(line), styles["Body"]))

    flush_bullets()
    flush_contact()
    return story


def render_pdf(source_name, output_name):
    styles = build_styles()
    source = CONTENT_DIR / source_name
    output = STATIC_DIR / output_name
    output.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(output),
        pagesize=letter,
        rightMargin=0.55 * inch,
        leftMargin=0.55 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.5 * inch,
        title=output_name.replace("-", " ").replace(".pdf", "").title(),
        author="Jamie Delbick",
    )
    story = parse_markdown(source.read_text(), styles)
    doc.build(story)


if __name__ == "__main__":
    render_pdf("jamie-delbick-resume.md", "jamie-delbick-resume.pdf")
    render_pdf("jamie-delbick-cover-letter.md", "jamie-delbick-cover-letter.pdf")
    print("Generated resume and cover letter PDFs in static/")
