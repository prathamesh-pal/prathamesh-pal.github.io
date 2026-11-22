import { useEffect, useRef } from "react";
import koi from "../assets/koi-yin-yang.png";

/**
 * Two koi circling each other. They drift round slowly on their own, scrolling
 * whips them along, and hovering makes them swim faster before easing back.
 */
export default function Datum({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const boost = useRef(1);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, last = performance.now(), angle = 0, speed = 1, sy = scrollY;
    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(64, now - last); last = now;
      const dy = scrollY - sy; sy = scrollY;
      speed += (boost.current - speed) * Math.min(1, dt / 220);   // ease toward hover/rest speed
      angle += dt * 0.008 * speed + dy * 0.2;                      // ~8°/s idle, plus scroll push
      el.style.transform = `rotate(${angle}deg)`;
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <img
      ref={ref}
      className={`datum ${className}`}
      src={koi}
      alt=""
      draggable={false}
      onPointerEnter={() => { boost.current = 5; }}
      onPointerLeave={() => { boost.current = 1; }}
    />
  );
}