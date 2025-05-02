
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
      <div className="education-container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-education-dark mb-6 leading-tight">
              Elevate Your <span className="text-education-blue">Academic</span> Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Join thousands of students preparing for exams through our comprehensive platform. Expert-designed mock tests, personalized feedback, and proven results.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register" className="btn-primary text-center py-3 px-8 text-lg">
                Get Started
              </Link>
              <Link to="/exams" className="btn-outline text-center py-3 px-8 text-lg flex items-center justify-center">
                Explore Exams <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="lg:w-5/12 lg:pl-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Student studying" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-education-blue text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                  <span className="text-sm text-gray-500">Starts May 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">National Science Olympiad</h3>
                <p className="text-gray-600 mb-4">Prepare for the prestigious science competition with our comprehensive mock tests and study materials.</p>
                <Link to="/exams/science-olympiad" className="text-education-blue font-medium hover:underline flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen size={32} className="text-education-blue" />
            </div>
            <h3 className="text-2xl font-bold text-education-dark mb-2">500+</h3>
            <p className="text-gray-600">Mock Tests Available</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-education-blue" />
            </div>
            <h3 className="text-2xl font-bold text-education-dark mb-2">50,000+</h3>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-education-blue" />
            </div>
            <h3 className="text-2xl font-bold text-education-dark mb-2">95%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
