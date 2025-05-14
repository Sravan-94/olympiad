import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { PlusCircle, PhoneCall, MapPin, School, CreditCard, TrendingUp, Building } from "lucide-react";

const SalesDashboard: React.FC = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [schoolContact, setSchoolContact] = useState("");
  const [salesStatus, setSalesStatus] = useState("interested");

  const handleAddSchool = () => {
    // Logic for adding a school to the list (this would likely be sent to your backend)
    alert("School added!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="sales" />
      
      <div className="flex-1">
        <DashboardHeader title="Sales Dashboard" userName="Sales Team" />
        
        <div className="p-6">
          <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Building className="h-6 w-6 text-education-blue" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Schools</h3>
                <p className="text-2xl font-semibold">256</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-education-teal" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">New Leads</h3>
                <p className="text-2xl font-semibold">42</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                <PhoneCall className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Calls Made</h3>
                <p className="text-2xl font-semibold">128</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <CreditCard className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                <p className="text-2xl font-semibold">₹45K</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Add a New School</h2>
                <button className="flex items-center gap-1 text-sm text-education-blue hover:text-blue-700">
                  <PlusCircle size={16} />
                  New Lead
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <School className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      placeholder="Enter school name"
                      className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">School Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={schoolAddress}
                      onChange={(e) => setSchoolAddress(e.target.value)}
                      placeholder="Enter school address"
                      className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Information</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <PhoneCall className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={schoolContact}
                      onChange={(e) => setSchoolContact(e.target.value)}
                      placeholder="Phone or email"
                      className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={salesStatus}
                    onChange={(e) => setSalesStatus(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
                  >
                    <option value="interested">Interested</option>
                    <option value="contacted">Contacted</option>
                    <option value="onboarded">Onboarded</option>
                  </select>
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
                <h2 className="text-lg font-semibold">Recent Leads</h2>
                <button className="text-sm text-education-blue hover:text-blue-700">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left border-b border-gray-200">
                      <th className="px-4 py-3 text-sm font-medium text-gray-500">School</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-500">Contact</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm">Delhi Public School</td>
                      <td className="px-4 py-3 text-sm">principal@dps.edu</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Onboarded</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="text-education-blue hover:text-blue-700">Details</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm">Ryan International</td>
                      <td className="px-4 py-3 text-sm">+91 9876543210</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Contacted</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="text-education-blue hover:text-blue-700">Details</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm">Kendriya Vidyalaya</td>
                      <td className="px-4 py-3 text-sm">admin@kv.edu</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Interested</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="text-education-blue hover:text-blue-700">Details</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm">St. Mary's School</td>
                      <td className="px-4 py-3 text-sm">+91 9887766554</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Interested</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <button className="text-education-blue hover:text-blue-700">Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
