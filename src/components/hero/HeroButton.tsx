import React, { useState } from 'react';
import { ArrowDown, Flame } from 'lucide-react';

interface HeroButtonProps {
  onExploreClick: () => void;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ onExploreClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onExploreClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-[#8FAF72]/20 border border-white/25 hover:border-[#8FAF72] shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden active:scale-95"
      aria-label="Explore the crop residue burning problem"
    >
      {/* Background glow on hover */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-[#8FAF72]/20 via-[#D98B45]/15 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <span className="relative z-10 tracking-wide font-medium">Explore the problem</span>

      <span className="relative z-10 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#8FAF72] group-hover:text-[#08090A] transition-colors duration-300">
        <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
      </span>

      {/* Small flame icon pulse on hover */}
      <Flame className="w-3.5 h-3.5 text-[#D98B45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </button>
  );
};
