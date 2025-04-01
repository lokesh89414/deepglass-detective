
import React from 'react';
import { cn } from '@/lib/utils';

interface StatisticCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ 
  title, 
  value, 
  icon,
  color
}) => {
  return (
    <div className="glass-morphism rounded-xl p-4 transition-all duration-300 hover:scale-105">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm text-gray-400">{title}</h3>
        <div className={`p-2 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default StatisticCard;
