import React, { useState, useEffect, useRef } from 'react';
import { PUBLICATIONS, WEB_TOOLS } from '../constants';
import { Publication } from '../types';

const SelectedWorks: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Select specific papers matching the user's request
  const selectedPapers = [...PUBLICATIONS.filter(p => ['p1', 'p2', 'p3'].includes(p.id)), ...WEB_TOOLS].map(p => {
    // Override thumbnails with local public images
    if (p.id === 'p1') return { ...p, thumbnail: 'EDU_AI_paper.png' };
    if (p.id === 'p2') return { ...p, thumbnail: 'Conservation.jpg' };
    if (p.id === 'p3') return { ...p, thumbnail: 'DesignFor.png' };
    if (p.id === 'p11') return { ...p, thumbnail: 'archidynamics.jpeg' };
    if (p.id === 'p12') return { ...p, thumbnail: 'metamap.png' };
    if (p.id === 'p13') return { ...p, thumbnail: 'LogoEddy.png' };
    return p;
  });

  // Wiggle animation when coming into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger wiggle
          setIsAnimating(true);

          // Sequence: Right -> Left -> Center
          setTimeout(() => setRotation(15), 100);
          setTimeout(() => setRotation(-15), 900);
          setTimeout(() => {
            setRotation(0);
            setTimeout(() => setIsAnimating(false), 800); // End animation state after settling
          }, 1700);

          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAnimating(false); // Stop any ongoing animation interaction
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setStartX(clientX);
    setStartRotation(rotation);
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = clientX - startX;
    // Sensitivity factor: how many pixels per degree
    setRotation(startRotation + diff * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const radius = 350; // Radius of the carousel
  const angleStep = 360 / selectedPapers.length;

  return (
    <div className="overflow-visible py-32" ref={containerRef}>
      <div className="mb-16 relative z-10">
        <h2 className="text-lg uppercase tracking-widest font-bold text-slate-900 dark:text-white mb-6">
          03 / Selected Works
        </h2>
      </div>

      <div
        className="relative h-[500px] flex items-center justify-center perspective-1000 cursor-all-scroll"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{ touchAction: 'none' }} // Prevent scrolling while dragging
      >
        <div
          className={`relative w-full h-full transform-style-3d ease-out ${isAnimating ? 'transition-transform duration-[800ms]' : 'transition-transform duration-75'}`}
          style={{ transform: `rotateX(-25deg) rotateY(${rotation}deg)` }}
        >
          {/* Connection Ring */}
          <div
            className="absolute top-1/2 left-1/2 rounded-full border-2 border-slate-300 dark:border-slate-600 border-dashed"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              marginLeft: `-${radius}px`,
              marginTop: `-${radius}px`,
              transform: 'rotateX(90deg) translateZ(-20px)', // Lower it slightly so cards float above
              opacity: 0.6
            }}
          />

          {selectedPapers.map((paper, index) => {
            const angle = index * angleStep;

            return (
              <div
                key={paper.id}
                className="absolute top-1/2 left-1/2 w-[220px] h-[220px] -ml-[110px] -mt-[110px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
              >
                <PublicationCard paper={paper} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-12 text-slate-400 dark:text-slate-600 text-sm font-mono">
        CLICK TO EXPLORE
      </div>
    </div>
  );
};

const PublicationCard: React.FC<{ paper: Publication }> = ({ paper }) => {
  return (
    <div
      className="w-full h-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl hover:shadow-2xl hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 group select-none flex flex-col items-center justify-center p-6"
      style={{ transformStyle: 'preserve-3d' }}
      onDragStart={(e) => e.preventDefault()} // Critical: Prevent native drag (ghost image)
    >
      <div className="w-32 h-32 mb-2 relative pointer-events-none flex-shrink-0" style={{ transform: 'translateZ(20px)' }}>
        <img
          src={paper.thumbnail}
          alt={paper.title}
          className="w-full h-full object-contain drop-shadow-md rounded-md" // Added rounded-md to image since container lost overflow-hidden
          draggable={false}
          style={{ userSelect: 'none', WebkitUserDrag: 'none' } as React.CSSProperties}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 w-full" style={{ transform: 'translateZ(30px)' }}>
        <div className="pointer-events-none mb-3">
          <h4 className="text-sm font-bold font-serif text-slate-900 dark:text-slate-100 leading-tight line-clamp-3">
            {paper.title}
          </h4>
        </div>

        <a
          href={{
            'p1': 'https://karadagi.github.io/EDU_AI_EXPLAINER/',
            'p2': 'https://karadagi.github.io/Conservation_Architectural_Heritage/',
            'p3': 'https://karadagi.github.io/wind_comfort_research/',
            'p11': 'https://www.archidynamics.com',
            'p12': 'https://karadagi.github.io/MetaMAP_/',
            'p13': 'https://eddy3d-dev.github.io/Eddy3D-Visualizer/'
          }[paper.id] || paper.links?.pdf || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] py-3 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5),0_-20px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-2xl hover:-translate-y-1 cursor-pointer pointer-events-auto border-b-4 border-gray-900 active:border-b-0 active:translate-y-1 block"
          style={{ transform: 'translateZ(50px) translateX(-50%)' }} // Keep translateZ, but handle X centering in className
          onMouseDown={(e) => e.stopPropagation()} // Allow click to start here without triggering drag if it's a quick click
          onClick={(e) => e.stopPropagation()}
        >
          View Interactive
        </a>
      </div>
    </div>
  );
};

export default SelectedWorks;
