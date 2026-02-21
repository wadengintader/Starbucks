import React from 'react';
import { Star, Sparkles, Heart, Gift } from 'lucide-react';
import Image from 'next/image';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Heart className="absolute top-20 left-10 w-8 h-8 text-green-500 animate-rotate-slow" />
        <Star className="absolute top-20 left-10 w-8 h-8 text-accent animate-float-spin" />
        <Sparkles className="absolute top-25 right-10 w-8 h-8 text-accent animate-twinkle" />
        <Gift className="absolute bottom-20 left-10 w-8 h-8 text-green-500 animate-rotate-reverse" />
        <Star className="absolute bottom-20 right-10 w-8 h-8 text-accent animate-float-gentle" />
        <Heart className="absolute top-1/2 left-8 w-8 h-8 text-green-500 animate-rotate-slow" />
        <Sparkles className="absolute top-1/3 right-12 w-8 h-8 text-accent animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
          <Image
            src="https://i.imgur.com/cbeiTcG.png"
            alt=""
            width={80}
            height={80}
            className="absolute top-24 left-12 w-20 h-20 object-contain animate-float-gentle delay-1000"
          />
          <Image
            src="https://i.imgur.com/t8QjExB.png"
            alt=""
            width={160}
            height={160}
            className="absolute top-32 right-16 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/XVHfGRv.png"
            alt=""
            width={160}
            height={160}
            className="absolute top-1/3 left-20 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/gIUTKbv.png"
            alt=""
            width={160}
            height={160}
            className="absolute top-1/2 right-24 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/etESumi.png"
            alt=""
            width={160}
            height={160}
            className="absolute bottom-40 left-16 w-20 h-20 object-contain animate-float-gentle"
          />
          <Image
            src="https://i.imgur.com/Fow9vBV.png"
            alt=""
            width={80}
            height={80}
            className="absolute bottom-32 right-20 w-20 h-20 object-contain animate-float-gentle"
          />
      </div>
    </>
  );
};

export default AnimatedBackground;