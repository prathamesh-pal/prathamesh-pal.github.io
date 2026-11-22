import { useEffect, useRef } from "react";

const CELL = 6;       // px per simulation cell; the grid is drawn smoothed-up to full size
const DAMP = 0.984;   // how slowly ripples die

/** A shallow pool behind the page. Move, click, or scroll and it ripples; it fades out beneath the column. */
export default function Water() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const off = document.createElement("canvas");
    const octx = off.getContext("2d")!;
    let w = 0, h = 0, cur = new Float32Array(0), prev = new Float32Array(0), img: ImageData;
    let light: number[] = [255, 255, 255], tint: number[] = [150, 170, 255];
    let raf = 0, last = 0, ambientAt = 0, px = -1, py = -1, sy = scrollY;

    const parse = (v: string) => {
      const c = document.createElement("canvas"); c.width = c.height = 1;
      const x = c.getContext("2d")!; x.fillStyle = v; x.fillRect(0, 0, 1, 1);
      const d = x.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2]];
    };
    const colors = () => {
      const s = getComputedStyle(document.documentElement);
      light = parse(s.getPropertyValue("--fg").trim() || "#fff");
      tint = parse(s.getPropertyValue("--accent").trim() || "#9db2ff");
    };
    const size = () => {
      canvas.width = innerWidth; canvas.height = innerHeight;
      w = Math.ceil(innerWidth / CELL); h = Math.ceil(innerHeight / CELL);
      cur = new Float32Array(w * h); prev = new Float32Array(w * h);
      off.width = w; off.height = h; img = octx.createImageData(w, h);
    };

    const drop = (gx: number, gy: number, amp: number, r: number) => {
      const R = Math.ceil(r * 2);
      for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
        const x = Math.round(gx) + dx, y = Math.round(gy) + dy;
        if (x < 1 || y < 1 || x >= w - 1 || y >= h - 1) continue;
        const i = y * w + x;
        cur[i] = Math.max(-160, Math.min(160, cur[i] - amp * Math.exp(-(dx * dx + dy * dy) / (r * r * 0.6))));
      }
    };
    const sideX = () => {
      const r = document.querySelector(".page")?.getBoundingClientRect();
      if (!r || r.left < 40) return -1;
      return Math.random() < 0.5 ? Math.random() * r.left : r.right + Math.random() * (innerWidth - r.right);
    };

    const onMove = (e: PointerEvent) => {
      if (px >= 0) {
        const dist = Math.hypot(e.clientX - px, e.clientY - py);
        const steps = Math.max(1, Math.min(8, Math.floor(dist / CELL)));
        const amp = Math.min(20, 2 + dist * 0.5);
        for (let k = 1; k <= steps; k++) drop((px + ((e.clientX - px) * k) / steps) / CELL, (py + ((e.clientY - py) * k) / steps) / CELL, amp, 2.4);
      }
      px = e.clientX; py = e.clientY;
    };
    const onDown = (e: PointerEvent) => drop(e.clientX / CELL, e.clientY / CELL, 70, 4);
    const onLeave = () => { px = -1; };
    const onScroll = () => {
      const d = Math.abs(scrollY - sy); sy = scrollY;
      const x = sideX(); if (x < 0 || d < 2) return;
      drop(x / CELL, Math.random() * h, Math.min(32, d * 0.5), 2.6);
    };

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      if (t - last < 14) return;   // ~60fps cap on high-refresh screens
      last = t;
      if (t > ambientAt) {
        ambientAt = t + 700 + Math.random() * 900;
        const x = sideX(); if (x >= 0) drop(x / CELL, Math.random() * h, 9, 2.8);
      }
      const next = prev;
      for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
        const i = y * w + x;
        next[i] = ((cur[i - 1] + cur[i + 1] + cur[i - w] + cur[i + w]) * 0.5 - next[i]) * DAMP;
      }
      prev = cur; cur = next;
      const d = img.data;
      for (let y = 1; y < h - 1; y++) for (let x = 1; x < w - 1; x++) {
        const i = y * w + x, o = i * 4;
        const s = cur[i + 1] - cur[i - 1] + cur[i + w] - cur[i - w];
        const c = s > 0 ? light : tint;
        d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2];
        d[o + 3] = Math.min(170, Math.abs(s) * 2.8);
      }
      octx.putImageData(img, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(off, 0, 0, w, h, 0, 0, canvas.width, canvas.height);
    };

    colors(); size();
    raf = requestAnimationFrame(frame);
    const mo = new MutationObserver(colors);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    addEventListener("resize", size);
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf); mo.disconnect();
      removeEventListener("resize", size); removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onDown); document.removeEventListener("pointerleave", onLeave);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={ref} className="water" aria-hidden="true" />;
}
