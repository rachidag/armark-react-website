import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children, setMenuToggle }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuToggle(false);
  }, [location, setMenuToggle]);

  return <>{children}</>;
};

export default ScrollToTop;
