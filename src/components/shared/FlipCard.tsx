"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn("group [perspective:1000px]", className)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d]",
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-lg overflow-hidden">
          {front}
        </div>
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg overflow-hidden">
          {back}
        </div>
      </div>
    </div>
  );
}
