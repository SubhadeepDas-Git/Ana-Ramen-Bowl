import React, { useEffect, useRef } from 'react';

export const NightSkyCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    window.addEventListener('resize', handleResize);

    // Generate gentle stars
    const starCount = Math.min(60, Math.floor(width / 25));
    const stars: Array<{ x: number; y: number; radius: number; alpha: number; speed: number }> = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.85,
        radius: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.7 + 0.2,
        speed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render twinkling stars
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 0.85 || star.alpha < 0.15) {
          star.speed = -star.speed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(178, 164, 255, ${Math.max(0.1, Math.min(0.9, star.alpha))})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(233, 196, 106, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-70 z-0"
      aria-hidden="true"
    />
  );
};