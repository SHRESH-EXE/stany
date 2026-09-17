import React, { useRef, useState, useEffect, useCallback } from 'react';
import { RevealLayer } from './RevealLayer';
import { HeroButton } from './HeroButton';
import { Sparkles, Eye } from 'lucide-react';

interface HeroProps {
  onTransitionComplete?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTransitionComplete }) => {
  const SPOTLIGHT_R = 260;
  const heroRef = useRef<HTMLElement | null>(null);

  // Mouse coordinates tracking with RAF smoothing as specified
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<'idle' | 'smoke' | 'dark' | 'done'>('idle');

  // Smooth RAF update loop
  const updateCursor = useCallback(() => {
    if (mouse.current.x !== -999 && mouse.current.y !== -999) {
      if (smooth.current.x === -999) {
        smooth.current.x = mouse.current.x;
        smooth.current.y = mouse.current.y;
      } else {
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      }

      setCursorPos({
        x: Math.round(smooth.current.x),
        y: Math.round(smooth.current.y),
      });
    }

    rafRef.current = requestAnimationFrame(updateCursor);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
      }
    };

    const handleMouseLeave = () => {
      mouse.current.x = -999;
      mouse.current.y = -999;
      smooth.current.x = -999;
      smooth.current.y = -999;
      setCursorPos({ x: -999, y: -999 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    rafRef.current = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateCursor]);

  // First interactive story moment: smooth multi-phase transition
  // beautiful field -> field with smoke -> dark background -> scroll into "Why do farmers burn it?"
  const handleExplore = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionPhase('smoke');

    setTimeout(() => {
      setTransitionPhase('dark');
      setTimeout(() => {
        const nextEl = document.getElementById('problem');
        if (nextEl) {
          nextEl.scrollIntoView({ behavior: 'smooth' });
        }
        setTransitionPhase('done');
        setIsTransitioning(false);
        if (onTransitionComplete) onTransitionComplete();
      }, 700);
    }, 600);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full overflow-hidden h-screen bg-black select-none"
      style={{ height: '100dvh' }}
      aria-label="Hero Introduction"
    >
      {/* 1. Base Image: Aerial agricultural fields after harvest */}
      <div
        className="absolute inset-0 bg-cover bg-center hero-zoom"
        style={{
          backgroundImage: `url('/images/harvest_field.jpg')`,
        }}
        role="img"
        aria-label="Aerial view of post-harvest agricultural field with crop residue"
      >
        {/* Subtle cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-black/35 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* 2. Reveal Layer: Stubble burning fire & smoke beneath cursor */}
      <RevealLayer
        image="/images/stubble_burn.jpg"
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        spotlightR={SPOTLIGHT_R}
      />

      {/* Interactive Exploration Hint Pill */}
      <div className="absolute top-24 sm:top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white/70 text-[11px] font-mono tracking-wider hero-anim hero-fade" style={{ animationDelay: '0.15s' }}>
          <Eye className="w-3 h-3 text-[#8FAF72]" />
          <span>Move cursor across the fields to reveal the hidden smoke</span>
        </div>
      </div>

      {/* 3. Hero Headline: Centered around top: 14% */}
      <div
        className="absolute left-0 right-0 z-20 flex flex-col items-center justify-center text-center px-4"
        style={{ top: '15%' }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="flex flex-col items-center">
            {/* Line 1: Playfair Display Italic */}
            <span
              className="font-playfair italic font-normal text-white/95 text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] hero-anim hero-reveal drop-shadow-2xl"
              style={{ animationDelay: '0.25s' }}
            >
              Fields hold
            </span>

            {/* Line 2: Inter Sans bold */}
            <span
              className="font-sans font-extrabold text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.05] hero-anim hero-reveal drop-shadow-2xl mt-1 sm:mt-2"
              style={{ animationDelay: '0.42s' }}
            >
              more than crops
            </span>
          </h1>

          <div
            className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide text-white/60 hero-anim hero-fade"
            style={{ animationDelay: '0.55s' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8FAF72]" />
            <span>An Environmental Studies Inquiry into Agricultural Residue Burning</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D98B45]" />
          </div>
        </div>
      </div>

      {/* 4. Bottom Information Bar & Subtexts */}
      <div className="absolute bottom-6 sm:bottom-12 left-0 right-0 z-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Bottom-left: Philosophical Context */}
          <div
            className="md:col-span-5 text-left hero-anim hero-fade"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-md">
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                A harvest does not end when the crop is collected. What remains in the field can shape
                the air we breathe, the soil we depend on, and the future of agriculture.
              </p>
              <div className="mt-2 text-[10px] uppercase font-mono tracking-widest text-[#8FAF72] flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Ecological Lifecycle</span>
              </div>
            </div>
          </div>

          {/* Bottom Center: Interactive Prompt Indicator */}
          <div className="hidden md:flex md:col-span-2 justify-center pb-2">
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
          </div>

          {/* Bottom-right: Problem Statement + Interactive CTA */}
          <div
            className="md:col-span-5 text-left md:text-right flex flex-col items-start md:items-end gap-4 hero-anim hero-fade"
            style={{ animationDelay: '0.85s' }}
          >
            <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-md">
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                Every year, agricultural residue is burned to clear fields quickly. The smoke travels
                far beyond the farm — while heat and ash affect the soil beneath it.
              </p>
            </div>

            <HeroButton onExploreClick={handleExplore} />
          </div>
        </div>
      </div>

      {/* Multi-Phase Story Moment Transition Overlays */}
      {/* Smoke Phase */}
      <div
        className={`absolute inset-0 z-30 pointer-events-none transition-opacity duration-700 bg-black/60 backdrop-blur-sm flex items-center justify-center ${
          transitionPhase === 'smoke' ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center px-4">
          <span className="text-[#D98B45] text-xs font-mono uppercase tracking-widest block mb-2 animate-pulse">
            Smoke ascending across the plains...
          </span>
          <p className="text-xl sm:text-2xl font-playfair italic text-white/90">
            "A fire in the field becomes an invisible current in our atmosphere."
          </p>
        </div>
      </div>

      {/* Dark Phase */}
      <div
        className={`absolute inset-0 z-40 pointer-events-none transition-opacity duration-500 bg-[#08090A] ${
          transitionPhase === 'dark' || transitionPhase === 'done' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </section>
  );
};
