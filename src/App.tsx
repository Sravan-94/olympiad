
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import ExamsPage from "./pages/ExamsPage";
import ExamDetailPage from "./pages/ExamDetailPage";
import MockTestPage from "./pages/mock-test/MockTestPage";
import ExamResultPage from "./pages/ExamResultPage";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import NotFound from "./pages/NotFound";
import SalesDashboard from "./pages/SalesDashboard";
import SchoolDashboard from "./pages/SchoolDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ExamResultsPage from "./components/Dashbordspages/examresults";
import Login from "./pages/Login";

import Forgotpassword from "./pages/ForgotPassword";

import SalesTeam from "./components/Dashbordspages/Salesteam";
import Schools from "./components/Dashbordspages/Schools";
import Tasks from "./components/Dashbordspages/Tasks";
import UpcomingExams from "./components/Dashbordspages/Upcomingexams";
 
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/exams" element={<ExamsPage />} />
              <Route path="/exams/:id" element={<ExamDetailPage />} />
              <Route path="/mock-tests/:id" element={<MockTestPage />} />
              <Route path="/exam-results/:id" element={<ExamResultPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              <Route path="/sales-dashboard" element={<SalesDashboard />} />
              <Route path="/school-dashboard" element={<SchoolDashboard userType={"school"} />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/student-exams" element={<ExamResultsPage userType="student" />} />
              <Route path="/student-exam-results" element={<ExamResultsPage userType="student" />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />

              <Route path="/forgotpassword" element={<Forgotpassword />} />

              <Route path="/admin-exam-results" element={<ExamResultsPage userType="admin" />} />
              <Route path="/school-exam-results" element={<ExamResultsPage userType="school" />} />
              <Route path="/sales-team" element={<SalesTeam />} />
              <Route path="/schools" element={<Schools userType="admin" />} />
              <Route path="/tasks" element={<Tasks userType="admin" />} />
              <Route path="/upcoming-exams" element={<UpcomingExams userType="admin" />} />
            </Routes>
          </main>
            <Footer />
          </div>
        </HashRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
