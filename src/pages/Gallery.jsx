// Gallery.jsx
import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const items = [
    {
      before: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", // broken phone look
      after:  "https://images.unsplash.com/photo-1510557880182-3d4d3cba35bb", // repaired phone look
      title: "Phone Screen Repair",
      desc: "Cracked -> Replaced glass"
    },
    {
      before: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8", // dusty laptop
      after:  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f", // cleaned laptop
      title: "Laptop Cleaning",
      desc: "Deep clean & thermal paste"
    },
    {
      before: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796", // old speaker
      after:  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", // new speaker
      title: "Speaker Repair",
      desc: "Driver replaced • sound restored"
    }
  ];

  // position 0..100 for each item (start at 50%)
  const [positions, setPositions] = useState(items.map(() => 50));
  const [draggingIndex, setDraggingIndex] = useState(null);

  const startDrag = (e, idx) => {
    // Pointer events support mouse/touch/pen
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    setDraggingIndex(idx);
    updatePos(e, idx);
  };

  const endDrag = (e) => {
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
    setDraggingIndex(null);
  };

  const updatePos = (e, idx) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const pos = Math.max(0, Math.min(100, raw));
    setPositions(prev => {
      const next = [...prev];
      next[idx] = pos;
      return next;
    });
  };

  return (
    <div className="gallery-root">
      <h2 className="gallery-title">Electronics — Before / After</h2>
      <div className="grid">
        {items.map((it, i) => (
          <div className="card" key={i}>
            <div
              className="ba-slider"
              onPointerDown={(e) => startDrag(e, i)}
              onPointerMove={(e) => draggingIndex === i && updatePos(e, i)}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
              // also support touchmove fallback for some browsers
              onTouchStart={(e) => startDrag(e, i)}
              onTouchMove={(e) => draggingIndex === i && updatePos(e, i)}
              onTouchEnd={endDrag}
            >
              <img src={it.before} alt={`${it.title} before`} className="ba-img before" />
              <div className="after-wrapper" style={{ width: `${positions[i]}%` }}>
                <img src={it.after} alt={`${it.title} after`} className="ba-img after" />
              </div>

              <div className="handle" style={{ left: `${positions[i]}%` }}>
                <div className="handle-line" />
                <div className="handle-dot" />
              </div>
            </div>

            <div className="card-body">
              <div className="title">{it.title}</div>
              <div className="desc">{it.desc}</div>
              <div className="meta">Tap & drag to compare</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
