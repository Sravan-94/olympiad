import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';

interface ExamResult {
  id: string;
  examName: string;
  subject: string;
  examType: string;
  createdBy: string;
  duration: string;
  score: string;
  date: string;
  status: 'completed' | 'pending';
}

interface ExamResultsPageProps {
  userType: 'admin' | 'school' | 'student';
}

const ExamResultsPage: React.FC<ExamResultsPageProps> = ({ userType }) => {
  const [results, setResults] = useState<ExamResult[]>([
    {
      id: '1',
      examName: 'Circles',
      subject: 'Mathematics',
      examType: 'Objective',
      createdBy: 'Oswal Experts',
      duration: '90 MIN',
      score: '40/50',
      date: '2025-05-10',
      status: 'completed'
    },
    {
      id: '2',
      examName: 'Electromagnetic Waves',
      subject: 'Physics',
      examType: 'Objective',
      createdBy: 'Oswal Experts',
      duration: '90 MIN',
      score: '35/50',
      date: '2025-05-05',
      status: 'completed'
    },
    {
      id: '3',
      examName: 'Organic Chemistry',
      subject: 'Chemistry',
      examType: 'Objective',
      createdBy: 'Oswal Experts',
      duration: '90 MIN',
      score: '42/50',
      date: '2025-04-28',
      status: 'completed'
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newResult, setNewResult] = useState<Omit<ExamResult, 'id'>>({ 
    examName: '',
    subject: '',
    examType: 'Objective',
    createdBy: '',
    duration: '',
    score: '',
    date: new Date().toISOString().split('T')[0],
    status: 'completed'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewResult(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddResult = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = (results.length + 1).toString();
    setResults(prev => [...prev, { ...newResult, id: newId }]);
    setShowAddForm(false);
    setNewResult({ 
      examName: '',
      subject: '',
      examType: 'Objective',
      createdBy: '',
      duration: '',
      score: '',
      date: new Date().toISOString().split('T')[0],
      status: 'completed'
    });
  };

  const canAddResults = userType === 'admin' || userType === 'school';

  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      <DashboardHeader title="Exam Results" />
      
      <div className="p-6">
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Total Exams</h3>
            <p className="text-2xl font-semibold">{results.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Average Score</h3>
            <p className="text-2xl font-semibold">
              {Math.round(
                results.reduce((acc, curr) => {
                  const [scored, total] = curr.score.split('/');
                  return acc + (parseInt(scored) / parseInt(total)) * 100;
                }, 0) / results.length
              )}
              <span className="text-sm text-gray-500">%</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Best Score</h3>
            <p className="text-2xl font-semibold">
              {results.reduce((best, curr) => {
                const [scored, total] = curr.score.split('/');
                const percentage = (parseInt(scored) / parseInt(total)) * 100;
                return percentage > best ? percentage : best;
              }, 0).toFixed(0)}
              <span className="text-sm text-gray-500">%</span>
            </p>
          </div>
        </div>
        
        <div className="mb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Exam Results</h2>
            {canAddResults && (
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium"
                onClick={() => setShowAddForm(true)}
              >
                Add New Result
              </button>
            )}
          </div>

          {canAddResults && showAddForm && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-md font-medium mb-4">Add New Exam Result</h3>
              <form onSubmit={handleAddResult} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Exam Name</label>
                  <input
                    type="text"
                    name="examName"
                    value={newResult.examName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={newResult.subject}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Exam Type</label>
                  <select
                    name="examType"
                    value={newResult.examType}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="Objective">Objective</option>
                    <option value="Subjective">Subjective</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Created By</label>
                  <input
                    type="text"
                    name="createdBy"
                    value={newResult.createdBy}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration (e.g. 90 MIN)</label>
                  <input
                    type="text"
                    name="duration"
                    value={newResult.duration}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Score (e.g. 40/50)</label>
                  <input
                    type="text"
                    name="score"
                    value={newResult.score}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    pattern="\d+/\d+"
                    title="Format should be like 40/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newResult.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                  <button 
                    type="button" 
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                  >
                    Save Result
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Exam Name</th>
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Subject</th>
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Exam Type</th>
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Created By</th>
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Duration</th>
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Date</th>
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Score</th>
                  <th className="px-4 py-3 text-sm font-medium text-gray-500">Action</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.id} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-sm">{result.examName}</td>
                    <td className="px-4 py-3 text-sm">{result.subject}</td>
                    <td className="px-4 py-3 text-sm">{result.examType}</td>
                    <td className="px-4 py-3 text-sm">{result.createdBy}</td>
                    <td className="px-4 py-3 text-sm">{result.duration}</td>
                    <td className="px-4 py-3 text-sm">{new Date(result.date).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-sm">{result.score}</td>
                    <td className="px-4 py-3 text-sm">
                      <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-xs font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResultsPage;