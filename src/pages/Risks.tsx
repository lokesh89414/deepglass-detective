
import React from 'react';
import { Shield, AlertTriangle, Fingerprint, User, Lock } from 'lucide-react';
import Navigation from '@/components/Navigation';

interface RiskCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  impact: 'high' | 'medium' | 'low';
}

const RiskCard: React.FC<RiskCardProps> = ({ title, description, icon, impact }) => {
  const impactColors = {
    high: 'bg-neon-red/10 text-neon-red',
    medium: 'bg-yellow-500/10 text-yellow-500',
    low: 'bg-green-500/10 text-green-500'
  };
  
  return (
    <div className="glass-morphism rounded-xl p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-full bg-white/5">
          {icon}
        </div>
        <span className={`text-xs px-3 py-1 rounded-full ${impactColors[impact]}`}>
          {impact.toUpperCase()} IMPACT
        </span>
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const Risks = () => {
  const risks: RiskCardProps[] = [
    {
      title: "Identity Theft",
      description: "Deepfakes can be used to create convincing images or videos of individuals, leading to identity theft and fraud in both personal and professional contexts.",
      icon: <User className="w-6 h-6 text-neon-red" />,
      impact: "high"
    },
    {
      title: "Misinformation Spread",
      description: "Deepfake technology can be used to create fake news or propaganda, influencing public opinion and potentially affecting democratic processes.",
      icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
      impact: "high"
    },
    {
      title: "Privacy Violations",
      description: "Individuals can have their likeness used without consent, creating content they never participated in, which violates their privacy and dignity.",
      icon: <Lock className="w-6 h-6 text-neon-purple" />,
      impact: "medium"
    },
    {
      title: "Security Threats",
      description: "Voice cloning and facial mimicry can potentially bypass biometric security systems, creating new vulnerabilities in security infrastructure.",
      icon: <Shield className="w-6 h-6 text-neon-blue" />,
      impact: "medium"
    },
    {
      title: "Trust Erosion",
      description: "As deepfakes become more prevalent, the general public's trust in digital media decreases, making it difficult to distinguish between real and fake content.",
      icon: <Fingerprint className="w-6 h-6 text-green-500" />,
      impact: "low"
    }
  ];
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <Navigation />
      
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-neon-red to-neon-purple bg-clip-text text-transparent animate-glow">
          Deepfake Risks & Threats
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Understanding the potential dangers and impacts of deepfake technology in our digital society
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {risks.map((risk, index) => (
          <RiskCard
            key={index}
            title={risk.title}
            description={risk.description}
            icon={risk.icon}
            impact={risk.impact}
          />
        ))}
      </div>
      
      <div className="glass-morphism rounded-xl p-6 mt-12">
        <h2 className="text-2xl font-semibold mb-4">How to Protect Yourself</h2>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <div className="mr-2 mt-1 bg-neon-green/20 p-1 rounded-full">
              <Shield className="w-4 h-4 text-neon-green" />
            </div>
            <span>Verify information through multiple reliable sources before believing or sharing content</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 bg-neon-green/20 p-1 rounded-full">
              <Shield className="w-4 h-4 text-neon-green" />
            </div>
            <span>Check metadata of images and videos when possible</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 bg-neon-green/20 p-1 rounded-full">
              <Shield className="w-4 h-4 text-neon-green" />
            </div>
            <span>Be cautious with biometric security systems that can be fooled by deepfakes</span>
          </li>
          <li className="flex items-start">
            <div className="mr-2 mt-1 bg-neon-green/20 p-1 rounded-full">
              <Shield className="w-4 h-4 text-neon-green" />
            </div>
            <span>Use deepfake detection tools like this one to verify suspicious content</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Risks;
