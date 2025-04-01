
import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type ResultType = 'real' | 'fake' | null;

interface ResultsDisplayProps {
  result: ResultType;
  confidence?: number;
  isLoading?: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ 
  result, 
  confidence = 0, 
  isLoading = false 
}) => {
  const [showResults, setShowResults] = useState(false);
  
  useEffect(() => {
    if (result !== null && !isLoading) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }, [result, isLoading]);

  if (!showResults) return null;
  
  return (
    <div className={cn(
      "glass-morphism rounded-xl p-6 mt-6 animate-fade-in",
      result === 'real' ? "neon-shadow-green" : "neon-shadow-red"
    )}>
      <div className="flex flex-col items-center">
        {result === 'real' ? (
          <>
            <div className="p-3 rounded-full bg-neon-green/10 mb-4">
              <Check className="h-8 w-8 text-neon-green" />
            </div>
            <h3 className="text-2xl font-medium mb-2 text-glow-green">Authentic Image ✓</h3>
            <p className="text-gray-400 text-center">
              This image appears to be authentic with {Math.round(confidence * 100)}% confidence.
            </p>
          </>
        ) : (
          <>
            <div className="p-3 rounded-full bg-neon-red/10 mb-4">
              <X className="h-8 w-8 text-neon-red" />
            </div>
            <h3 className="text-2xl font-medium mb-2 text-glow-red">Deepfake Detected ✗</h3>
            <p className="text-gray-400 text-center">
              This image appears to be artificially generated with {Math.round(confidence * 100)}% confidence.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;
