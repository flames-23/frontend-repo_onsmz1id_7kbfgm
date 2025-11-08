import React, { useEffect, useRef } from 'react';

// Lightweight GPU-friendly particle field using canvas
export default function Particles({ className = '', density = 80, color = 'rgba(56,189,248,0.5)' }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      sizeRef.current.dpr = dpr;
      const parent = canvas.parentElement;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      sizeRef.current.w = w;
      sizeRef.current.h = h;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      const { w, h } = sizeRef.current;
      const count = Math.max(20, Math.floor((w * h) / (10000 / Math.max(1, density / 50))));
      particlesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(), // depth for parallax
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.8 + 0.4,
        glow: Math.random() * 0.6 + 0.2,
      }));
    };

    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const draw = () => {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      // soft energy waves background
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, 'rgba(14,165,233,0.05)');
      grad.addColorStop(0.5, 'rgba(168,85,247,0.05)');
      grad.addColorStop(1, 'rgba(59,130,246,0.05)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      particlesRef.current.forEach((p) => {
        // parallax drift influenced by mouse
        const dx = (mouse.x - w / 2) * (p.z - 0.5) * 0.002;
        const dy = (mouse.y - h / 2) * (p.z - 0.5) * 0.002;
        p.x += p.vx + dx;
        p.y += p.vy + dy;

        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.beginPath();
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, color);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        // core point
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,' + (0.3 + p.glow) + ')';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      initParticles();
    };

    resize();
    initParticles();
    draw();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [density, color]);

  return (
    <canvas ref={canvasRef} className={className} />
  );
}
