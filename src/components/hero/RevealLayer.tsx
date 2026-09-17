import React, { useEffect, useRef, useState } from 'react';

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
  spotlightR?: number;
}

export const RevealLayer: React.FC<RevealLayerProps> = ({
  image,
  cursorX,
  cursorY,
  spotlightR = 260,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [maskDataUrl, setMaskDataUrl] = useState<string>('');
  const [isMobileOrTouch, setIsMobileOrTouch] = useState<boolean>(false);

  useEffect(() => {
    // Detect mobile / touch-only device
    const checkTouch = () => {
      setIsMobileOrTouch(
        window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
        window.innerWidth < 768
      );
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    // Clear previous canvas frame
    ctx.clearRect(0, 0, w, h);

    // If cursor is offscreen and on mobile, render an ambient pulsing circular preview in center
    let effectiveX = cursorX;
    let effectiveY = cursorY;
    let effectiveR = spotlightR;

    if (effectiveX === -999 || effectiveY === -999) {
      if (isMobileOrTouch) {
        // Soft animated ambient reveal in center for mobile
        effectiveX = w * 0.5;
        effectiveY = h * 0.58;
        effectiveR = Math.min(w * 0.38, 190);
      } else {
        // Offscreen desktop, transparent mask
        setMaskDataUrl('');
        return;
      }
    }

    // Exact radial gradient stops from specification:
    // 0: rgba(255,255,255,1)
    // 0.4: rgba(255,255,255,1)
    // 0.6: rgba(255,255,255,0.75)
    // 0.75: rgba(255,255,255,0.4)
    // 0.88: rgba(255,255,255,0.12)
    // 1: rgba(255,255,255,0)
    const gradient = ctx.createRadialGradient(
      effectiveX,
      effectiveY,
      0,
      effectiveX,
      effectiveY,
      effectiveR
    );

    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
    gradient.addColorStop(0.75, 'rgba(255, 255, 255, 0.4)');
    gradient.addColorStop(0.88, 'rgba(255, 255, 255, 0.12)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    try {
      const dataUrl = canvas.toDataURL();
      setMaskDataUrl(dataUrl);
    } catch {
      // Fallback
    }
  }, [cursorX, cursorY, spotlightR, isMobileOrTouch]);

  return (
    <>
      {/* Hidden canvas generating mask */}
      <canvas
        ref={canvasRef}
        className="hidden pointer-events-none"
        aria-hidden="true"
      />

      {/* Reveal image layer masked by radial gradient canvas */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: maskDataUrl ? 1 : 0,
          WebkitMaskImage: maskDataUrl ? `url(${maskDataUrl})` : 'none',
          maskImage: maskDataUrl ? `url(${maskDataUrl})` : 'none',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        {/* Subtle orange ember glow overlay to intensify burning effect */}
        <div className="absolute inset-0 bg-[#D98B45]/10 mix-blend-color-dodge pointer-events-none" />
      </div>

      {/* Interactive cursor spotlight ring hint */}
      {!isMobileOrTouch && cursorX !== -999 && cursorY !== -999 && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 transition-transform duration-75"
          style={{
            left: `${cursorX}px`,
            top: `${cursorY}px`,
            width: `${spotlightR * 2}px`,
            height: `${spotlightR * 2}px`,
            boxShadow: '0 0 35px rgba(217, 139, 69, 0.25)',
          }}
        >
          <div className="absolute top-2 right-4 text-[10px] font-mono uppercase tracking-widest text-[#D98B45]/80 bg-black/60 px-2 py-0.5 rounded-full border border-[#D98B45]/30">
            Revealing: Burning Field
          </div>
        </div>
      )}
    </>
  );
};
