import React, { useState, useEffect } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { UserCheck, BookOpen, Clock, UserPlus } from "lucide-react";
import UpcomingExams from "../components/Dashbordspages/Upcomingexams";
import ExamResults from "../components/Dashbordspages/examresults";

const SchoolDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'dashboard' | 'exams' | 'students'>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'exams':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Exams Management</h1>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6">
              <div className="flex border-b border-gray-200">
                <button className="px-6 py-3 text-sm font-medium text-education-blue border-b-2 border-education-blue">
                  Manage Exams
                </button>
              </div>
              <UpcomingExams userType="school" />
            </div>
          </div>
        );
      case 'students':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Student Results</h1>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex border-b border-gray-200">
                <button className="px-6 py-3 text-sm font-medium text-education-blue border-b-2 border-education-blue">
                  Manage Results
                </button>
              </div>
              <ExamResults userType="school" />
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <div className="mb-4 md:mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <UserCheck className="h-6 w-6 text-education-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                  <p className="text-2xl font-semibold">682</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-education-teal" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Tests Created</h3>
                  <p className="text-2xl font-semibold">28</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Upcoming Tests</h3>
                  <p className="text-2xl font-semibold">6</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                  <UserPlus className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">New Registrations</h3>
                  <p className="text-2xl font-semibold">14</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-3 md:gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex border-b border-gray-200">
                  <button className="px-6 py-3 text-sm font-medium text-education-blue border-b-2 border-education-blue">
                    Recent Exam Results
                  </button>
                </div>
                <div className="p-6">
                  <ExamResults userType="school" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex border-b border-gray-200">
                  <button className="px-6 py-3 text-sm font-medium text-education-blue border-b-2 border-education-blue">
                    Upcoming Exams
                  </button>
                </div>
                <div className="p-6">
                  <UpcomingExams userType="school" />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 relative overflow-x-hidden">
      <DashboardSidebar 
        userType="school" 
        isSidebarOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      
      {/* Dark overlay when sidebar is open on mobile */}
      {isSidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}
      
      <div className="flex-1 w-full max-w-full">
        <DashboardHeader 
          title="School Dashboard" 
          userName="Delhi Public School"
          onMenuToggle={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        
        <div className="mb-4 md:mb-6 flex border-b border-gray-200 bg-white overflow-x-auto">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`px-6 py-3 text-sm font-medium ${activeSection === 'dashboard' 
              ? 'text-education-blue border-b-2 border-education-blue' 
              : 'text-gray-500 hover:text-gray-700'}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveSection('exams')}
            className={`px-6 py-3 text-sm font-medium ${activeSection === 'exams' 
              ? 'text-education-blue border-b-2 border-education-blue' 
              : 'text-gray-500 hover:text-gray-700'}`}
          >
            Exams
          </button>
          <button
            onClick={() => setActiveSection('students')}
            className={`px-6 py-3 text-sm font-medium ${activeSection === 'students' 
              ? 'text-education-blue border-b-2 border-education-blue' 
              : 'text-gray-500 hover:text-gray-700'}`}
          >
            Students
          </button>
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default SchoolDashboard;
