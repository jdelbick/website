import React, { useContext, useState, useEffect } from 'react';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
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
          Built with <Link href="https://react-spectrum.adobe.com/react-spectrum/index.html">Adobe React Spectrum</Link>
          <br/>
          Based off of a template developed by{' '}
          <Link href="https://github.com/cobidev">
            Jacobo Martínez
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
