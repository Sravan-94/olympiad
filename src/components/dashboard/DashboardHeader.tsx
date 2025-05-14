import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  userName?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, userName = 'Rahul Gupta' }) => {
  return (
    <div className="bg-white py-4 px-6 flex items-center justify-between border-b">
      <h1 className="text-xl font-semibold text-education-dark">{title}</h1>
      
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-education-blue flex items-center justify-center text-white">
            {userName.charAt(0)}
          </div>
          <span className="text-sm font-medium mr-1">{userName}</span>
          <ChevronDown size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
