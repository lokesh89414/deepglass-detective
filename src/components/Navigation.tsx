
import React from 'react';
import { Home, FileWarning, Info, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, active = false }) => {
  return (
    <Link 
      to={to}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
        "hover:bg-white/10 hover:text-neon-purple",
        active && "bg-white/5 text-neon-purple"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Navigation: React.FC = () => {
  const pathname = window.location.pathname;
  
  return (
    <nav className="glass-morphism py-3 px-4 rounded-full mb-10 max-w-md mx-auto">
      <ul className="flex justify-between items-center">
        <li>
          <NavItem 
            icon={<Home className="w-5 h-5" />} 
            label="Home" 
            to="/"
            active={pathname === '/'} 
          />
        </li>
        <li>
          <NavItem 
            icon={<FileWarning className="w-5 h-5" />} 
            label="Risks" 
            to="/risks"
            active={pathname === '/risks'} 
          />
        </li>
        <li>
          <NavItem 
            icon={<Info className="w-5 h-5" />} 
            label="About" 
            to="/about"
            active={pathname === '/about'} 
          />
        </li>
        <li>
          <a 
            href="https://github.com/your-username/deepfake-detection" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-neon-blue"
          >
            <Github className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
