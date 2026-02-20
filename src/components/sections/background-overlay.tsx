import React from 'react';
import { 
  ShoppingBag, 
  Tag, 
  Star, 
  Percent, 
  ShoppingCart, 
  Gift 
} from 'lucide-react';

/**
 * BackgroundOverlay component
 * Features a subtle cube pattern, floating Lucide icons, and animated glow/blur effects.
 * Palette: #182C54 (Deep Navy) and #9C1C26 (Deep Crimson)
 */
const BackgroundOverlay: React.FC = () => {
  return (
    <>
      {/* Base layer - fixed inset-0 */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-white" />

      {/* Cube Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" 
        style={{ opacity: 0.05 }}
      />

      {/* Floating Icons Layer 1 (Primary visibility) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.1] z-0">
        {/* Shopping Bag - Top Left */}
        <ShoppingBag 
          className="absolute top-[15%] left-[10%] w-10 h-10 md:w-16 md:h-16 text-[#182C54] animate-float" 
          strokeWidth={1.5}
        />
        
        {/* Tag - Middle Right */}
        <Tag 
          className="absolute top-[40%] right-[15%] w-8 h-8 md:w-12 md:h-12 text-[#9C1C26] rotate-12 animate-float" 
          strokeWidth={1.5}
        />

        {/* Star - Bottom Left Area */}
        <Star 
          className="absolute bottom-[20%] left-[20%] w-6 h-6 md:w-10 md:h-10 text-[#182C54] fill-[#182C54] animate-pulse" 
          strokeWidth={1.5}
        />

        {/* Percent - Low Right Area */}
        <Percent 
          className="absolute top-[60%] right-[25%] w-9 h-9 md:w-14 md:h-14 text-[#182C54] animate-float" 
          strokeWidth={1.5}
        />

        {/* Shopping Cart - Bottom Left */}
        <ShoppingCart 
          className="absolute top-[80%] left-[15%] w-8 h-8 md:w-12 md:h-12 text-[#9C1C26] animate-float" 
          strokeWidth={1.5}
        />
      </div>

      {/* Glowing Effects and Large Background Icons Layer 2 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.05] z-0">
        {/* Navy Glow Pulse */}
        <div className="absolute top-[25%] right-[10%] w-20 h-20 md:w-32 md:h-32 bg-[#182C54]/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Crimson Glow Pulse */}
        <div className="absolute bottom-[30%] left-[5%] w-24 h-24 md:w-40 md:h-40 bg-[#9C1C26]/5 rounded-full blur-3xl animate-pulse" />

        {/* Large Decorative Gift - Center Topish */}
        <Gift 
          className="absolute top-[10%] right-[40%] w-16 h-16 md:w-24 md:h-24 text-[#182C54] blur-[2px] opacity-20 rotate-[-15deg] animate-float" 
          strokeWidth={1}
        />

        {/* Large Decorative Shopping Bag - Bottom Right */}
        <ShoppingBag 
          className="absolute bottom-[10%] right-[10%] w-20 h-20 md:w-32 md:h-32 text-[#182C54] blur-[3px] opacity-10 animate-float" 
          strokeWidth={1}
        />
      </div>

      {/* Inner Shadow Overlay for Depth */}
      <div className="fixed inset-0 pointer-events-none z-0 shadow-[inset_0_0_150px_rgba(255,255,255,0.5)]" />
    </>
  );
};

export default BackgroundOverlay;
