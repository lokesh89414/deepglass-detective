
import React, { useState } from 'react';
import ImageUploader from '@/components/ImageUploader';
import ProcessButton from '@/components/ProcessButton';
import ResultsDisplay from '@/components/ResultsDisplay';
import UseCasesList from '@/components/UseCasesList';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<'real' | 'fake' | null>(null);
  const [confidence, setConfidence] = useState(0);
  const { toast } = useToast();

  const handleImageSelect = (image: File) => {
    setSelectedImage(image);
    setResult(null);
    toast({
      title: "Image selected",
      description: `${image.name} is ready for analysis`,
    });
  };

  const handleProcess = () => {
    if (!selectedImage) {
      toast({
        variant: "destructive",
        title: "No image selected",
        description: "Please upload an image to analyze",
      });
      return;
    }

    setIsProcessing(true);
    setResult(null);
    
    // Simulate processing delay
    setTimeout(() => {
      // Random result for demonstration purposes
      const fakeResult = Math.random() > 0.5 ? 'real' : 'fake';
      const fakeConfidence = 0.7 + Math.random() * 0.25; // Random confidence between 70% and 95%
      
      setResult(fakeResult);
      setConfidence(fakeConfidence);
      setIsProcessing(false);
      
      toast({
        title: "Analysis complete",
        description: `The image appears to be ${fakeResult} with ${Math.round(fakeConfidence * 100)}% confidence`,
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent animate-glow">
          Deepfake Image Detection
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Upload an image to analyze whether it's authentic or artificially generated using advanced AI technology.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <ImageUploader onImageSelect={handleImageSelect} />
          
          <ProcessButton 
            onClick={handleProcess} 
            isLoading={isProcessing} 
            disabled={!selectedImage}
          />
          
          <ResultsDisplay 
            result={result} 
            confidence={confidence} 
            isLoading={isProcessing}
          />
        </div>
        
        <div className="mt-6 lg:mt-0">
          <UseCasesList />
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>
          Deepfake Image Detection Tool — AI-powered analysis to help identify manipulated imagery.
        </p>
      </footer>
    </div>
  );
};

export default Index;
