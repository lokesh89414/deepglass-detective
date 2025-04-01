
import React, { useEffect, useState } from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
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
  const [animateProgress, setAnimateProgress] = useState(false);
  
  useEffect(() => {
    if (result !== null && !isLoading) {
      setShowResults(true);
      // Start progress animation after a slight delay
      setTimeout(() => setAnimateProgress(true), 300);
    } else {
      setShowResults(false);
      setAnimateProgress(false);
    }
  }, [result, isLoading]);

  if (!showResults) return null;
  
  const confidencePercent = Math.round(confidence * 100);
  
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
          </>
        ) : (
          <>
            <div className="p-3 rounded-full bg-neon-red/10 mb-4">
              <X className="h-8 w-8 text-neon-red" />
            </div>
            <h3 className="text-2xl font-medium mb-2 text-glow-red">Deepfake Detected ✗</h3>
          </>
        )}
        
        <p className="text-gray-400 text-center mb-6">
          This image appears to be {result} with {confidencePercent}% confidence.
        </p>
        
        {/* Confidence meter */}
        <div className="w-full">
          <div className="flex justify-between mb-1 text-sm">
            <span>Confidence</span>
            <span>{confidencePercent}%</span>
          </div>
          <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full transition-all duration-1000 ease-out rounded-full",
                result === 'real' ? "bg-gradient-to-r from-green-400 to-neon-green" : "bg-gradient-to-r from-red-400 to-neon-red",
                animateProgress ? "opacity-100" : "opacity-0 w-0"
              )}
              style={{ width: animateProgress ? `${confidencePercent}%` : '0%' }}
            />
          </div>
        </div>
        
        {/* Analysis details */}
        <div className="mt-6 pt-6 border-t border-white/10 w-full">
          <h4 className="font-medium mb-3">Analysis Details</h4>
          
          <div className="space-y-3 text-sm">
            {result === 'real' ? (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lighting consistency</span>
                  <span className="text-neon-green">Natural</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Facial features</span>
                  <span className="text-neon-green">Consistent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Background analysis</span>
                  <span className="text-neon-green">Authentic</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lighting inconsistencies</span>
                  <span className="text-neon-red">Detected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Facial artifacts</span>
                  <span className="text-neon-red">Present</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Background manipulation</span>
                  <span className="text-yellow-500">Possible</span>
                </div>
              </>
            )}
          </div>
        </div>
        
        {result === 'fake' && (
          <div className="mt-6 p-3 bg-neon-red/5 rounded-lg border border-neon-red/20 w-full">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-neon-red mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-neon-red mb-1">Warning</h4>
                <p className="text-sm text-gray-300">
                  This image appears to be artificially manipulated. Be cautious about its authenticity and origin before sharing.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;
