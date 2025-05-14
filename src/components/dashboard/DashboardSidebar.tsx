import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  BookOpen, 
  BarChart,
  Settings,
  LogOut,
  Users
} from 'lucide-react';

interface SidebarProps {
  userType: 'student' | 'admin' | 'school' | 'sales';
}

const DashboardSidebar: React.FC<SidebarProps> = ({ userType }) => {
  const location = useLocation();
  
  const getNavItems = () => {
    switch (userType) {
      case 'student':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/student-dashboard' },
          { icon: <FileText size={20} />, label: 'Tests', path: '/student-tests' },
          { icon: <BarChart size={20} />, label: 'Progress', path: '/student-progress' },
        ];
      case 'school':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/school-dashboard' },
          { icon: <Users size={20} />, label: 'Students', path: '/school-students' },
          { icon: <FileText size={20} />, label: 'Tests', path: '/school-tests' },
        ];
      case 'sales':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/sales-dashboard' },
          { icon: <Users size={20} />, label: 'Schools', path: '/sales-schools' },
          { icon: <BarChart size={20} />, label: 'Analytics', path: '/sales-analytics' },
        ];
      case 'admin':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin-dashboard' },
          { icon: <Users size={20} />, label: 'Users', path: '/admin-users' },
          { icon: <FileText size={20} />, label: 'Exams', path: '/admin-exams' },
          { icon: <BarChart size={20} />, label: 'Analytics', path: '/admin-analytics' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-education-blue flex flex-col text-white w-60">
      <div className="px-6 py-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-education-blue font-bold text-xl">O</span>
          </div>
          <span className="font-bold text-xl">EduVerse</span>
        </Link>
      </div>
      
      <div className="px-4 py-2">
        <input 
          type="text" 
          placeholder="Search for a test, chapter or concept" 
          className="w-full bg-blue-600 text-white placeholder-blue-200 px-3 py-2 rounded-md text-sm"
        />
      </div>
      
      <nav className="mt-6 flex-grow">
        <ul>
          {getNavItems().map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm font-medium rounded-md transition-colors mx-2 ${
                  location.pathname === item.path
                    ? 'bg-white text-education-blue'
                    : 'text-white hover:bg-blue-600'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="px-4 pb-8 mt-auto">
        <Link to="/settings" className="flex items-center px-6 py-3 text-sm font-medium rounded-md hover:bg-blue-600 transition-colors mx-2">
          <Settings size={20} className="mr-3" />
          Settings
        </Link>
        <Link to="/login" className="flex items-center px-6 py-3 text-sm font-medium rounded-md hover:bg-blue-600 transition-colors mx-2">
          <LogOut size={20} className="mr-3" />
          Logout
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
