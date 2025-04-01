
import React from 'react';
import { Code, Shield, Lightbulb, ChevronsRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Navigation />
      
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent animate-glow">
          About This Project
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Learn more about our deepfake detection technology and mission
        </p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-morphism rounded-xl p-6">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-white/10 mr-4">
              <Shield className="h-6 w-6 text-neon-blue" />
            </div>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
          </div>
          
          <p className="text-gray-300 mb-4">
            As deepfake technology becomes more sophisticated and accessible, the potential for misuse increases. Our mission is to provide accessible tools that help people identify manipulated media and protect themselves from misinformation.
          </p>
          
          <p className="text-gray-300 mb-4">
            We believe in the responsible use of AI technology and are committed to developing solutions that counter its potential harmful applications.
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/10">
            <h3 className="font-medium mb-3 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-neon-purple" />
              Key Objectives
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronsRight className="h-4 w-4 text-neon-blue mr-2" />
                <span>Democratize access to deepfake detection technology</span>
              </li>
              <li className="flex items-center">
                <ChevronsRight className="h-4 w-4 text-neon-blue mr-2" />
                <span>Educate the public about the risks of manipulated media</span>
              </li>
              <li className="flex items-center">
                <ChevronsRight className="h-4 w-4 text-neon-blue mr-2" />
                <span>Develop increasingly accurate detection methods</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="glass-morphism rounded-xl p-6">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-full bg-white/10 mr-4">
              <Code className="h-6 w-6 text-neon-green" />
            </div>
            <h2 className="text-2xl font-semibold">Our Technology</h2>
          </div>
          
          <p className="text-gray-300 mb-4">
            Our deepfake detection system employs advanced machine learning algorithms trained on diverse datasets of both authentic and manipulated media. The system analyzes subtle inconsistencies that are typically imperceptible to the human eye.
          </p>
          
          <p className="text-gray-300 mb-4">
            The technology examines various aspects including facial inconsistencies, unnatural blinking patterns, lighting inconsistencies, and artifacts introduced during the deepfake generation process.
          </p>
          
          <div className="mt-6">
            <h3 className="font-medium mb-3">Detection Accuracy</h3>
            <div className="h-4 w-full bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                style={{ width: '87%' }}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span>Current Model (87% accuracy)</span>
              <span>Next Release Goal (95%)</span>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button 
              className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90 transition-opacity"
              onClick={() => window.location.href = '/'}
            >
              Try It Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
