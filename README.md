# Jamie Delbick - Personal Website

Personal website for Jamie Delbick, a Staff Software Engineer at Adobe with 8+ years of experience leading teams and building AI-first enterprise products.

## Tech Stack

- **Gatsby 5** for static site generation
- **React 18** and **Adobe React Spectrum** for UI
- **SCSS** for custom styling
- **gatsby-plugin-image** for responsive image processing
- **GitHub Actions** and **GitHub Pages** for deployment

## Site Content

- Hero positioning around AI-first enterprise products, engineering leadership, and creative technology
- About section focused on Adobe GenStudio for Performance Marketing and team leadership
- Projects section covering product launches, open source work, and speaking engagements
- Published Writing section for Medium articles
- Contact section with LinkedIn, GitHub, and email links

Recent highlighted work includes:

- GenStudio ChatGPT Ads integration
- Adobe Summit 2025 GenStudio extensibility talk
- Claude Skills open source repo
- Articles on Claude workflows, Okta-protected APIs, and testing patterns

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run develop
# → http://localhost:8000

# Build for production
npm run build

# Serve production build
npm run serve
# → http://localhost:9000/website/
```

## Available Scripts

- `npm run develop` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run serve` - Serve production build locally
- `npm run clean` - Clear Gatsby cache
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript checks
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

Pushes to `main` run `.github/workflows/ci.yml`, which:

1. Installs dependencies
2. Runs `npm run build`
3. Publishes `public/` to GitHub Pages

The site uses `/website` as the production path prefix for GitHub Pages, while local development runs at `/` so Gatsby image URLs work correctly.

## Notes

- `.npmrc` pins public dependency scopes to `https://registry.npmjs.org/` so this public site does not resolve packages through Adobe Artifactory.
- Images are rendered with eager loading and no blurred placeholders for clearer local previews.
- Gatsby still reports that `gatsby-plugin-react-helmet` can be replaced with Gatsby's built-in Head API.

## Project Structure

```
src/
├── components/     # React components
├── images/        # Source images
├── mock/          # Site data
├── pages/         # Gatsby pages
└── style/         # SCSS stylesheets
```

## Contributing

This is a personal website project. Feel free to:

- Report bugs or issues
- Suggest improvements
- Use as inspiration for your own site

## License

MIT License - see [LICENSE.md](LICENSE.md)

## Connect

- **LinkedIn**: [jamiedelbick](https://www.linkedin.com/in/jamiedelbick/)
- **GitHub**: [jdelbick](https://github.com/jdelbick)
- **Email**: jamie.delbick@gmail.com

---

Custom Gatsby site built by Jamie Delbick.