import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const Divider = () => {
    if (!isClient) {
      return <hr className="spectrum-divider" />;
    }
    return <sp-divider size="m"></sp-divider>;
  };

  const Link = ({ href, children, target = "_blank" }) => {
    if (!isClient) {
      return <a href={href} target={target} rel="noopener noreferrer" className="spectrum-link">{children}</a>;
    }
    return <sp-link href={href} target={target}>{children}</sp-link>;
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <Divider />
        <p className="footer-text">
          © {new Date().getFullYear()} - Jamie Delbick <br/>
          Custom Gatsby site built with{' '}
          <Link href="https://react-spectrum.adobe.com/react-spectrum/index.html">
            Adobe React Spectrum
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
