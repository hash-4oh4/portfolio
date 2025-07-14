import { useEffect, useRef } from "react";

export function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    // Clear existing characters
    container.innerHTML = '';
    
    for (let i = 0; i < columns; i++) {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = i * 20 + 'px';
      char.style.animationDelay = Math.random() * 20 + 's';
      char.style.animationDuration = (Math.random() * 10 + 10) + 's';
      char.style.animation = `matrix ${char.style.animationDuration} linear infinite`;
      container.appendChild(char);
    }

    const handleResize = () => {
      const newColumns = Math.floor(window.innerWidth / 20);
      if (newColumns !== columns) {
        // Recreate matrix on resize
        container.innerHTML = '';
        for (let i = 0; i < newColumns; i++) {
          const char = document.createElement('div');
          char.className = 'matrix-char';
          char.textContent = chars[Math.floor(Math.random() * chars.length)];
          char.style.left = i * 20 + 'px';
          char.style.animationDelay = Math.random() * 20 + 's';
          char.style.animationDuration = (Math.random() * 10 + 10) + 's';
          char.style.animation = `matrix ${char.style.animationDuration} linear infinite`;
          container.appendChild(char);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
}
