import React, { useState } from 'react';
import { Clock, Calendar, Info, Download, Plus } from 'lucide-react';

interface Exam {
  id: string;
  title: string;
  date: string;
  time: string;
  subject: string;
  description?: string;
}

interface UpcomingExamsProps {
  userType: 'student' | 'school' | 'admin' | 'sales';
}

const UpcomingExams: React.FC<UpcomingExamsProps> = ({ userType }) => {
  const [exams, setExams] = useState<Exam[]>([
    { 
      id: '1', 
      title: 'Mathematics Olympiad', 
      date: '2025-06-15', 
      time: '10:00 AM', 
      subject: 'Mathematics',
      description: 'Annual mathematics competition covering algebra, geometry, and calculus.'
    },
    { 
      id: '2', 
      title: 'Science Quiz', 
      date: '2025-07-05', 
      time: '2:00 PM', 
      subject: 'Science',
      description: 'Science quiz covering physics, chemistry, and biology concepts.' 
    },
    { 
      id: '3', 
      title: 'English Literature', 
      date: '2025-07-22', 
      time: '11:00 AM', 
      subject: 'English',
      description: 'Literature and grammar assessment for all grades.' 
    },
  ]);

  const [showAddExam, setShowAddExam] = useState(false);
  const [newExam, setNewExam] = useState<Partial<Exam>>({
    title: '',
    date: '',
    time: '',
    subject: '',
    description: ''
  });

  const handleAddExam = () => {
    if (newExam.title && newExam.date && newExam.time && newExam.subject) {
      const exam = {
        id: Math.random().toString(36).substr(2, 9),
        title: newExam.title,
        date: newExam.date,
        time: newExam.time,
        subject: newExam.subject,
        description: newExam.description
      };
      setExams([...exams, exam]);
      setNewExam({
        title: '',
        date: '',
        time: '',
        subject: '',
        description: ''
      });
      setShowAddExam(false);
    }
  };

  const handleDeleteExam = (id: string) => {
    setExams(exams.filter(exam => exam.id !== id));
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Upcoming Exams</h1>
        {(userType === 'admin' || userType === 'school') && (
          <button 
            onClick={() => setShowAddExam(!showAddExam)}
            className="flex items-center gap-2 px-4 py-2 bg-education-blue text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} />
            Add Exam
          </button>
        )}
      </div>

      {showAddExam && (userType === 'admin' || userType === 'school') && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
          <h2 className="text-lg font-semibold mb-4">Add New Exam</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Exam Title</label>
              <input
                type="text"
                value={newExam.title}
                onChange={(e) => setNewExam({...newExam, title: e.target.value})}
                placeholder="Enter exam title"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                value={newExam.subject}
                onChange={(e) => setNewExam({...newExam, subject: e.target.value})}
                placeholder="Enter subject"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={newExam.date}
                onChange={(e) => setNewExam({...newExam, date: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                value={newExam.time}
                onChange={(e) => setNewExam({...newExam, time: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={newExam.description}
              onChange={(e) => setNewExam({...newExam, description: e.target.value})}
              placeholder="Enter exam description"
              rows={3}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-education-blue focus:border-transparent"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowAddExam(false)}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddExam}
              className="px-4 py-2 bg-education-blue text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add Exam
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {exams.map(exam => (
          <div key={exam.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{exam.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-education-blue" />
                    <span>{formatDate(exam.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-education-blue" />
                    <span>{exam.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Info className="h-4 w-4 mr-1 text-education-blue" />
                    <span>{exam.subject}</span>
                  </div>
                </div>
                {exam.description && (
                  <p className="text-sm text-gray-500 mb-4">{exam.description}</p>
                )}
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                {userType === 'student' && (
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-education-blue text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
                    <Download size={16} />
                    Materials
                  </button>
                )}
                {(userType === 'admin' || userType === 'school') && (
                  <button 
                    onClick={() => handleDeleteExam(exam.id)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-sm"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {exams.length === 0 && (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
          <p className="text-gray-500">No upcoming exams at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default UpcomingExams;
