import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import ExamResults from "../components/Dashbordspages/examresults";
import UpcomingExams from "../components/Dashbordspages/Upcomingexams";

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'results' | 'upcoming'>('results');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

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
  
  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  return (
    <div className="flex min-h-screen bg-gray-50 relative overflow-x-hidden">
      <DashboardSidebar userType="student" isSidebarOpen={isSidebarOpen} onClose={toggleSidebar} />
      
      {/* We removed this overlay as it's now handled in the DashboardSidebar component */}
      
      <div className="flex-1 w-full max-w-full">
        <DashboardHeader 
          title="Student Dashboard" 
          onMenuToggle={toggleSidebar} 
          isSidebarOpen={isSidebarOpen}
        />
        
        <div className="p-3 sm:p-4 md:p-6">
          <div className="mb-4 md:mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Tests Taken</h3>
              <p className="text-2xl font-semibold">12</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Average Score</h3>
              <p className="text-2xl font-semibold">87<span className="text-sm text-gray-500">%</span></p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Ranking</h3>
              <p className="text-2xl font-semibold">#42</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-200">
              <button
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'results' ? 'text-education-blue border-b-2 border-education-blue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('results')}
              >
                Exam Results
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'upcoming' ? 'text-education-blue border-b-2 border-education-blue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Exams
              </button>
            </div>
            
            <div className="overflow-hidden">
              {activeTab === 'results' ? (
                <ExamResults userType="student" />
              ) : (
                <UpcomingExams userType="student" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
