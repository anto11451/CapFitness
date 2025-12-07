import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll the browser window (just in case)
    window.scrollTo(0, 0);

    // Scroll your actual scroll container: <motion.main>
    const mainEl = document.querySelector("main");
    if (mainEl) {
      mainEl.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Also reset body + html scroll
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location]);

  return null;
}
