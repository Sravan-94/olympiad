import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { PlusCircle, Upload, UserPlus, UserCheck, BookOpen, Clock } from "lucide-react";

const SchoolDashboard: React.FC = () => {
  const [testTitle, setTestTitle] = useState("");
  const [testDate, setTestDate] = useState("");
  const [testSyllabus, setTestSyllabus] = useState("");
  const [results, setResults] = useState<File | null>(null);

  const handleSubmitTest = () => {
    // Logic for posting a new test (you would probably send this to your backend)
    alert("Test posted!");
  };

  const handleUploadResults = () => {
    // Logic to upload test results
    if (results) {
      alert("Results uploaded!");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="school" />
      
      <div className="flex-1">
        <DashboardHeader title="School Dashboard" userName="Delhi Public School" />
        
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-6">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Post a New Test</h2>
                <button className="flex items-center gap-1 text-sm text-education-blue hover:text-blue-700">
                  <PlusCircle size={16} />
                  New Test
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Test Title</label>
                  <input
                    type="text"
                    value={testTitle}
                    onChange={(e) => setTestTitle(e.target.value)}
                    placeholder="Enter test title"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Test Date</label>
                  <input
                    type="date"
                    value={testDate}
                    onChange={(e) => setTestDate(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Syllabus</label>
                  <textarea
                    value={testSyllabus}
                    onChange={(e) => setTestSyllabus(e.target.value)}
                    placeholder="Enter syllabus details"
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleSubmitTest}
                  className="w-full bg-education-blue text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Post Test
                </button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Upload Test Results</h2>
                <button className="flex items-center gap-1 text-sm text-education-blue hover:text-blue-700">
                  <Upload size={16} />
                  Batch Upload
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Test</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent">
                    <option value="">Choose a test</option>
                    <option value="1">Mathematics Mid-Term</option>
                    <option value="2">Science Quiz #3</option>
                    <option value="3">English Literature Final</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select File</label>
                  <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={(e) => setResults(e.target.files ? e.target.files[0] : null)}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-sm font-medium text-gray-700">Click to upload file</span>
                      <span className="text-xs text-gray-500 mt-1">CSV, XLS or XLSX (max 10MB)</span>
                    </label>
                    {results && (
                      <div className="mt-2 text-sm text-education-blue">{results.name}</div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleUploadResults}
                  className="w-full bg-education-teal text-white p-2 rounded-md hover:bg-teal-600 transition duration-200"
                  disabled={!results}
                >
                  Upload Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
