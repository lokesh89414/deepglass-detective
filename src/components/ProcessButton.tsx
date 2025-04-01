
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

interface ProcessButtonProps {
  onClick: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

const ProcessButton: React.FC<ProcessButtonProps> = ({ 
  onClick, 
  isLoading, 
  disabled = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "relative w-full mt-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 overflow-hidden",
        "bg-gradient-to-r from-neon-purple to-neon-blue",
        "hover:animate-pulse-glow",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={cn(
        "absolute inset-0 backdrop-blur-sm bg-white/5",
        isHovered ? "opacity-30" : "opacity-0",
        "transition-opacity duration-300"
      )} />
      
      <div className="relative flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <span>Analyze Image</span>
        )}
      </div>
    </button>
  );
};

export default ProcessButton;
