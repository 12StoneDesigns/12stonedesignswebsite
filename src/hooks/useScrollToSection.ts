import { useNavigate } from 'react-router-dom';

export const useScrollToSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, first navigate there
    if (window.location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    // Find the section element
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll to the section with smooth behavior
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return scrollToSection;
};
