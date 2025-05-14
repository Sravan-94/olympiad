import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  BookOpen, 
  BarChart,
  Settings,
  LogOut,
  Users,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  userType: 'student' | 'admin' | 'school' | 'sales';
  onToggle?: () => void;
}

const DashboardSidebar: React.FC<SidebarProps> = ({ userType, onToggle }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (onToggle) {
      onToggle();
    }
  };
  
  const getNavItems = () => {
    switch (userType) {
      case 'student':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/student-dashboard' },
          { icon: <BookOpen size={20} />, label: 'Exam Results', path: '/student-exam-results' },
          { icon: <FileText size={20} />, label: 'Tests', path: '/student-tests' },
          { icon: <BarChart size={20} />, label: 'Progress', path: '/student-progress' },
        ];
      case 'school':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/school-dashboard' },
          { icon: <Users size={20} />, label: 'Students', path: '/school-students' },
          { icon: <FileText size={20} />, label: 'Tests', path: '/school-tests' },
          { icon: <BarChart size={20} />, label: 'Exam Results', path: '/school-exam-results' },
        ];
      case 'sales':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/sales-dashboard' },
          { icon: <Users size={20} />, label: 'Schools', path: '/sales-schools' },
          { icon: <BarChart size={20} />, label: 'Tasks', path: '/sales-tasks' },
        ];
      case 'admin':
        return [
          { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin-dashboard' },
          { icon: <Users size={20} />, label: 'Users', path: '/admin-users' },
          { icon: <FileText size={20} />, label: 'Exams', path: '/admin-exams' },
          { icon: <BarChart size={20} />, label: 'Sales Team', path: '/admin-sales-team' },
          { icon: <BarChart size={20} />, label: 'Exam Results', path: '/admin-exam-results' },
        ];
      default:
        return [];
    }
  };

  return (
    <>
      {/* Mobile menu toggle button - only visible on mobile */}
      {/* Mobile menu toggle button removed as it's now in the header */}
      
      <div 
        className={`min-h-screen bg-education-blue flex flex-col text-white fixed md:static top-0 left-0 z-50 transition-all duration-300 ease-in-out w-[85%] sm:w-72 md:w-60 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shadow-xl md:shadow-none overflow-y-auto`}
      >
        <div className="px-4 md:px-6 py-6 md:py-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white rounded-full w-9 md:w-10 h-9 md:h-10 flex items-center justify-center">
              <span className="text-education-blue font-bold text-lg md:text-xl">O</span>
            </div>
            <span className="font-bold text-lg md:text-xl">EduVerse</span>
          </Link>
          <button 
            onClick={toggleMobileMenu} 
            className="text-white p-1 hover:bg-blue-600 rounded-md transition-colors md:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="px-4 py-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-blue-600 text-white placeholder-blue-200 px-3 py-2 rounded-md text-sm"
            />
          </div>
        </div>
        
        <nav className="mt-4 md:mt-6 flex-grow">
          <ul className="space-y-1">
            {getNavItems().map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 md:px-6 py-3 text-sm font-medium rounded-md transition-colors mx-2 ${
                    location.pathname === item.path
                      ? 'bg-white text-education-blue'
                      : 'text-white hover:bg-blue-600'
                  }`}
                  onClick={() => isMobile && toggleMobileMenu()}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="px-4 pb-6 md:pb-8 mt-auto border-t border-blue-600 pt-4 mt-4">
          <Link to="/settings" className="flex items-center px-4 md:px-6 py-3 text-sm font-medium rounded-md hover:bg-blue-600 transition-colors mx-2">
            <Settings size={20} className="mr-3" />
            <span className="truncate">Settings</span>
          </Link>
          <Link to="/login" className="flex items-center px-4 md:px-6 py-3 text-sm font-medium rounded-md hover:bg-blue-600 transition-colors mx-2">
            <LogOut size={20} className="mr-3" />
            <span className="truncate">Logout</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
