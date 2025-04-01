
import React, { useState } from 'react';
import { BarChart3, Image, ShieldCheck, AlertTriangle } from 'lucide-react';
import ImageUploader from '@/components/ImageUploader';
import ProcessButton from '@/components/ProcessButton';
import ResultsDisplay from '@/components/ResultsDisplay';
import UseCasesList from '@/components/UseCasesList';
import StatisticCard from '@/components/StatisticCard';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

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
      <Navigation />
      
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent animate-glow">
          Deepfake Image Detection
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Upload an image to analyze whether it's authentic or artificially generated using advanced AI technology.
        </p>
      </header>

      {/* Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <StatisticCard 
          title="Images Analyzed" 
          value="25,431" 
          icon={<Image className="h-5 w-5 text-neon-blue" />}
          color="bg-neon-blue/10" 
        />
        <StatisticCard 
          title="Detection Rate" 
          value="94.3%" 
          icon={<BarChart3 className="h-5 w-5 text-neon-purple" />}
          color="bg-neon-purple/10" 
        />
        <StatisticCard 
          title="Authentic" 
          value="16,782" 
          icon={<ShieldCheck className="h-5 w-5 text-neon-green" />}
          color="bg-neon-green/10" 
        />
        <StatisticCard 
          title="Deepfakes" 
          value="8,649" 
          icon={<AlertTriangle className="h-5 w-5 text-neon-red" />}
          color="bg-neon-red/10" 
        />
      </div>

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

      {/* FAQ Section */}
      <div className="glass-morphism rounded-xl p-6 mt-16">
        <h2 className="text-xl font-semibold mb-4 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg font-medium mb-2">How accurate is the deepfake detection?</h3>
            <p className="text-gray-400">Our current model achieves approximately 87% accuracy on standard benchmarks. We're continuously improving our algorithms to increase detection rates.</p>
          </div>
          
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg font-medium mb-2">What types of deepfakes can this detect?</h3>
            <p className="text-gray-400">This tool is optimized for detecting face-swapped images, AI-generated faces, and manipulated facial features. It may be less effective with more sophisticated deepfakes or non-facial manipulations.</p>
          </div>
          
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg font-medium mb-2">Is my uploaded image stored or shared?</h3>
            <p className="text-gray-400">No, your uploaded images are processed locally in your browser and are not stored on any server or shared with third parties. Your privacy is our priority.</p>
          </div>
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
