import React, { useState, useEffect } from 'react';
import { Button } from '@adobe/react-spectrum';
import ChevronUp from '@spectrum-icons/workflow/ChevronUp';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <div className="back-to-top">
          <Button
            variant="primary"
            isQuiet
            onPress={scrollToTop}
            aria-label="Back to top"
            UNSAFE_className="back-to-top-button"
          >
            <ChevronUp />
          </Button>
        </div>
      )}
    </>
  );
};

export default BackToTop; 