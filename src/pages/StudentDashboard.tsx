import React from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";

const StudentDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="student" />
      
      <div className="flex-1">
        <DashboardHeader title="Dashboard" />
        
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Tests Taken</h3>
              <p className="text-2xl font-semibold">12</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Average Score</h3>
              <p className="text-2xl font-semibold">87<span className="text-sm text-gray-500">%</span></p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Ranking</h3>
              <p className="text-2xl font-semibold">#42</p>
            </div>
          </div>
          
          <div className="mb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Your Test Results</h2>
              <button className="text-sm text-education-blue hover:text-blue-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Test Name</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Subject</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Test Type</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Created By</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Time</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Score</th>
                    <th className="px-4 py-3 text-sm font-medium text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Circles</td>
                    <td className="px-4 py-3 text-sm">Mathematics</td>
                    <td className="px-4 py-3 text-sm">Objective</td>
                    <td className="px-4 py-3 text-sm">Oswal Experts</td>
                    <td className="px-4 py-3 text-sm">90 MIN</td>
                    <td className="px-4 py-3 text-sm">40/50</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="px-3 py-1 bg-amber-50 text-amber-500 rounded-md text-xs font-medium">Re-Attempt</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Electromagnetic Waves</td>
                    <td className="px-4 py-3 text-sm">Mathematics</td>
                    <td className="px-4 py-3 text-sm">Objective</td>
                    <td className="px-4 py-3 text-sm">Oswal Experts</td>
                    <td className="px-4 py-3 text-sm">90 MIN</td>
                    <td className="px-4 py-3 text-sm">35/50</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="px-3 py-1 bg-education-blue bg-opacity-10 text-education-blue rounded-md text-xs font-medium">Attempt</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Circles</td>
                    <td className="px-4 py-3 text-sm">Mathematics</td>
                    <td className="px-4 py-3 text-sm">Objective</td>
                    <td className="px-4 py-3 text-sm">Oswal Experts</td>
                    <td className="px-4 py-3 text-sm">90 MIN</td>
                    <td className="px-4 py-3 text-sm">42/50</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="px-3 py-1 bg-education-blue bg-opacity-10 text-education-blue rounded-md text-xs font-medium">Attempt</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">Electromagnetic Waves</td>
                    <td className="px-4 py-3 text-sm">Mathematics</td>
                    <td className="px-4 py-3 text-sm">Objective</td>
                    <td className="px-4 py-3 text-sm">Oswal Experts</td>
                    <td className="px-4 py-3 text-sm">90 MIN</td>
                    <td className="px-4 py-3 text-sm">39/50</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="px-3 py-1 bg-education-blue bg-opacity-10 text-education-blue rounded-md text-xs font-medium">Attempt</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Upcoming Tests</h2>
              <button className="text-sm text-education-blue hover:text-blue-700">View Calendar</button>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div>
                  <h3 className="font-medium">Chemistry Olympiad</h3>
                  <p className="text-sm text-gray-500">June 1, 2025 • 10:00 AM</p>
                </div>
                <button className="px-3 py-1 bg-education-blue text-white rounded-md text-sm font-medium">Practice</button>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                <div>
                  <h3 className="font-medium">English Olympiad</h3>
                  <p className="text-sm text-gray-500">July 10, 2025 • 2:00 PM</p>
                </div>
                <button className="px-3 py-1 bg-education-blue text-white rounded-md text-sm font-medium">Practice</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
