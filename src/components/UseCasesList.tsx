
import React from 'react';
import { cn } from '@/lib/utils';
import { Info, Shield, FileWarning, CheckCircle, LockKeyhole } from 'lucide-react';

interface UseCaseProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UseCase: React.FC<UseCaseProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
      <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1 group-hover:text-neon-purple transition-colors">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const UseCasesList: React.FC = () => {
  const useCases = [
    {
      icon: <Shield className="h-5 w-5 text-neon-blue" />,
      title: "Combat Misinformation",
      description: "Identify and prevent the spread of false information through manipulated imagery."
    },
    {
      icon: <LockKeyhole className="h-5 w-5 text-neon-blue" />,
      title: "Identity Protection",
      description: "Prevent unauthorized use of personal images for impersonation or fraud."
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-neon-blue" />,
      title: "Verify Media Authenticity",
      description: "Ensure news organizations and publications use authentic visual content."
    },
    {
      icon: <FileWarning className="h-5 w-5 text-neon-blue" />,
      title: "Legal Evidence Verification",
      description: "Validate digital evidence for legal proceedings and investigations."
    }
  ];

  return (
    <div className="glass-morphism rounded-xl p-6">
      <div className="flex items-center mb-6">
        <div className="p-2 rounded-full bg-white/10 mr-3">
          <Info className="h-5 w-5 text-neon-purple" />
        </div>
        <h2 className="text-xl font-medium">Uses of Deepfake Detection</h2>
      </div>
      
      <div className="space-y-2">
        {useCases.map((useCase, index) => (
          <UseCase 
            key={index}
            icon={useCase.icon}
            title={useCase.title}
            description={useCase.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UseCasesList;
