import { useEffect, useRef, useState } from "react";

const useActiveProject = (count) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);
  const clickGuardUntil = useRef(0);

  useEffect(() => {
    const elements = refs.current.slice(0, count).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < clickGuardUntil.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [count]);

  const setRef = (i) => (el) => {
    refs.current[i] = el;
  };

  const scrollTo = (i) => {
    setActiveIndex(i);
    clickGuardUntil.current = Date.now() + 700;
    refs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return { activeIndex, setRef, scrollTo };
};

export default useActiveProject;
