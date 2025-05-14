import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { PlusCircle, Trash2, Edit, Users, BookOpen, GraduationCap, School, BarChart3 } from "lucide-react";

const AdminDashboard: React.FC = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [schoolPassword, setSchoolPassword] = useState("");
  const [examTitle, setExamTitle] = useState("");
  const [examDate, setExamDate] = useState("");

  const handleAddSchool = () => {
    // Logic to add school and grant login access
    alert(`School "${schoolName}" added with login access.`);
  };

  const handleAddExam = () => {
    // Logic to add a new exam for tracking
    alert(`Exam "${examTitle}" added.`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="admin" />
      
      <div className="flex-1">
        <DashboardHeader title="Admin Dashboard" />
        
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-education-blue" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                <p className="text-2xl font-semibold">12,845</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                <School className="h-6 w-6 text-education-teal" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Schools</h3>
                <p className="text-2xl font-semibold">256</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Exams</h3>
                <p className="text-2xl font-semibold">68</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <BarChart3 className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Test Attempts</h3>
                <p className="text-2xl font-semibold">24,632</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Add School & Create Login</h2>
                <button className="flex items-center gap-1 text-sm text-education-blue hover:text-blue-700">
                  <PlusCircle size={16} />
                  New School
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Enter school name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Email</label>
                  <input
                    type="email"
                    value={schoolEmail}
                    onChange={(e) => setSchoolEmail(e.target.value)}
                    placeholder="email@school.edu"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={schoolPassword}
                    onChange={(e) => setSchoolPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleAddSchool}
                  className="w-full bg-education-blue text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Add School
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Add Exam</h2>
                <button className="flex items-center gap-1 text-sm text-education-blue hover:text-blue-700">
                  <PlusCircle size={16} />
                  New Exam
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Exam Title</label>
                  <input
                    type="text"
                    value={examTitle}
                    onChange={(e) => setExamTitle(e.target.value)}
                    placeholder="Enter exam title"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Exam Date</label>
                  <input
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Exam Type</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  >
                    <option value="">Select exam type</option>
                    <option value="objective">Objective</option>
                    <option value="subjective">Subjective</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </div>
                <button
                  onClick={handleAddExam}
                  className="w-full bg-education-teal text-white p-2 rounded-md hover:bg-teal-600 transition duration-200"
                >
                  Add Exam
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
