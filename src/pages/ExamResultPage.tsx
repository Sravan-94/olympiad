
import { useLocation, useParams } from "react-router-dom";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";
import { 
  Card, CardContent, CardDescription, CardFooter, 
  CardHeader, CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Award, CheckCircle, XCircle, AlertCircle, Clock, 
  BarChart2, ArrowUpCircle, Download, Share2
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Define the interface for questions and answers
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: "easy" | "medium" | "hard";
}

interface ResultState {
  answers: (number | null)[];
  questions: Question[];
  examTitle: string;
  timeSpent: number;
}

const ExamResultPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [viewAnswers, setViewAnswers] = useState(false);
  
  // Get result data from router state or mock data if not available
  const resultData = location.state as ResultState || {
    answers: [1, 0, 2, 0, 1, 3, 2, 0, 1, 1],
    questions: [
      {
        id: 1,
        text: "If x² + y² = 25 and x + y = 7, find the value of x × y.",
        options: ["10", "12", "24", "49/4"],
        correctAnswer: 1,
        difficulty: "medium"
      },
      {
        id: 2,
        text: "What is the sum of the first 100 positive integers?",
        options: ["5050", "5000", "5150", "10100"],
        correctAnswer: 0,
        difficulty: "easy"
      },
      {
        id: 3,
        text: "If the sequence a₁, a₂, a₃, ... is defined by a₁ = 3 and aₙ₊₁ = 2aₙ - 1 for all n ≥ 1, what is a₄?",
        options: ["11", "17", "23", "31"],
        correctAnswer: 2,
        difficulty: "medium"
      },
      {
        id: 4,
        text: "What is the value of cos(30°) × cos(60°) - sin(30°) × sin(60°)?",
        options: ["0", "0.25", "0.5", "0.75"],
        correctAnswer: 0,
        difficulty: "medium"
      },
      {
        id: 5,
        text: "How many 4-digit numbers are there such that the digit sum is exactly 9?",
        options: ["84", "126", "220", "330"],
        correctAnswer: 1,
        difficulty: "hard"
      },
      {
        id: 6,
        text: "If the radius of a circle is increased by 50%, by what percentage does the area increase?",
        options: ["50%", "75%", "100%", "125%"],
        correctAnswer: 3,
        difficulty: "easy"
      },
      {
        id: 7,
        text: "What is the sum of all the interior angles of a regular octagon?",
        options: ["540°", "720°", "1080°", "1440°"],
        correctAnswer: 2,
        difficulty: "medium"
      },
      {
        id: 8,
        text: "Solve for x: log₄(x) + log₄(4x) = 3",
        options: ["2", "4", "8", "16"],
        correctAnswer: 0,
        difficulty: "hard"
      },
      {
        id: 9,
        text: "How many different ways can 8 people be seated around a circular table?",
        options: ["40320", "5040", "56", "1"],
        correctAnswer: 1,
        difficulty: "medium"
      },
      {
        id: 10,
        text: "If a and b are the roots of the equation x² - 5x + 6 = 0, what is the value of a² + b²?",
        options: ["13", "25", "30", "37"],
        correctAnswer: 1,
        difficulty: "medium"
      }
    ],
    examTitle: "Mathematics Olympiad Mock Test",
    timeSpent: 1950 // in seconds
  };
  
  // Calculate result statistics
  const totalQuestions = resultData.questions.length;
  const answeredQuestions = resultData.answers.filter(a => a !== null).length;
  const correctAnswers = resultData.answers.reduce((acc, answer, index) => {
    if (answer === resultData.questions[index].correctAnswer) return acc + 1;
    return acc;
  }, 0);
  const incorrectAnswers = answeredQuestions - correctAnswers;
  const notAnswered = totalQuestions - answeredQuestions;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  const score = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Mock data for ranks and percentiles
  const rankData = {
    rank: 12,
    totalParticipants: 263,
    percentile: 95
  };
  
  // Format time spent
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    let formattedTime = '';
    if (hrs > 0) formattedTime += `${hrs} hr `;
    formattedTime += `${mins} min `;
    formattedTime += `${secs} sec`;
    
    return formattedTime;
  };
  
  // Calculate difficulty-wise performance
  const difficultyPerformance = {
    easy: { total: 0, correct: 0 },
    medium: { total: 0, correct: 0 },
    hard: { total: 0, correct: 0 }
  };
  
  resultData.questions.forEach((q, idx) => {
    difficultyPerformance[q.difficulty].total++;
    if (resultData.answers[idx] === q.correctAnswer) {
      difficultyPerformance[q.difficulty].correct++;
    }
  });
  
  // Prepare chart data
  const summaryData = [
    { name: "Correct", value: correctAnswers, color: "#22C55E" },
    { name: "Incorrect", value: incorrectAnswers, color: "#EF4444" },
    { name: "Not Answered", value: notAnswered, color: "#94A3B8" }
  ];
  
  const difficultyData = [
    { 
      name: "Easy", 
      correct: difficultyPerformance.easy.correct,
      incorrect: difficultyPerformance.easy.total - difficultyPerformance.easy.correct,
      total: difficultyPerformance.easy.total
    },
    { 
      name: "Medium", 
      correct: difficultyPerformance.medium.correct,
      incorrect: difficultyPerformance.medium.total - difficultyPerformance.medium.correct,
      total: difficultyPerformance.medium.total
    },
    { 
      name: "Hard", 
      correct: difficultyPerformance.hard.correct,
      incorrect: difficultyPerformance.hard.total - difficultyPerformance.hard.correct,
      total: difficultyPerformance.hard.total
    }
  ];
  
  const COLORS = ["#22C55E", "#EF4444", "#94A3B8"];
  
  // Generate feedback based on score
  const getFeedbackAndNextSteps = () => {
    if (score >= 80) {
      return {
        message: "Excellent performance! You have a strong grasp of the concepts.",
        suggestions: [
          "Challenge yourself with more difficult problems",
          "Attempt previous year olympiad questions",
          "Consider participating in advanced competitions"
        ]
      };
    } else if (score >= 60) {
      return {
        message: "Good job! You have a decent understanding of most concepts.",
        suggestions: [
          "Focus on the topics where you made mistakes",
          "Practice more medium and hard level problems",
          "Review the theoretical concepts for better clarity"
        ]
      };
    } else {
      return {
        message: "You need more practice to improve your performance.",
        suggestions: [
          "Begin with strengthening your foundational concepts",
          "Practice basic problems before moving to advanced ones",
          "Spend more time on each topic and take guided help"
        ]
      };
    }
  };
  
  const feedback = getFeedbackAndNextSteps();
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="education-container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-education-dark mb-2">Test Results</h1>
          <p className="text-gray-600">{resultData.examTitle}</p>
        </div>
        
        {/* Score and rank summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-t-4 border-t-education-blue">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Award className="mr-2 h-5 w-5 text-education-blue" /> 
                Your Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-education-dark">
                {score}%
              </div>
              <Progress value={score} className="h-2 mt-2" />
              <p className="text-gray-500 text-sm mt-2">
                {correctAnswers} correct out of {totalQuestions} questions
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <ArrowUpCircle className="mr-2 h-5 w-5 text-green-500" /> 
                Your Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-education-dark">
                {rankData.rank}<span className="text-base font-normal text-gray-500">/{rankData.totalParticipants}</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                You are in the top {rankData.percentile}th percentile
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Clock className="mr-2 h-5 w-5 text-yellow-500" /> 
                Time Spent
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-education-dark">
                {formatTime(resultData.timeSpent)}
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Average: {Math.round(resultData.timeSpent / totalQuestions)} seconds per question
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <BarChart2 className="mr-2 h-5 w-5 text-education-blue" />
                Performance Summary
              </CardTitle>
              <CardDescription>
                Distribution of your answers by correctness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={summaryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {summaryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <BarChart2 className="mr-2 h-5 w-5 text-education-blue" />
                Difficulty-wise Performance
              </CardTitle>
              <CardDescription>
                How you performed across difficulty levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={difficultyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="correct" name="Correct" fill="#22C55E" />
                    <Bar dataKey="incorrect" name="Incorrect" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Feedback and Next Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-education-blue" />
              Feedback & Improvement Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{feedback.message}</p>
            
            <h4 className="font-semibold mb-2">Suggested Next Steps:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {feedback.suggestions.map((suggestion, index) => (
                <li key={index} className="text-gray-700">{suggestion}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Answer Review */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <FileText className="mr-2 h-5 w-5 text-education-blue" />
              Question Review
            </CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => setViewAnswers(!viewAnswers)}>
                {viewAnswers ? "Hide Answers" : "Show Answers"}
              </Button>
              <Button variant="outline" className="text-gray-500">
                <Download className="h-4 w-4 mr-1" /> Download PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {resultData.questions.map((question, index) => {
                const userAnswer = resultData.answers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                const isAnswered = userAnswer !== null;
                
                return (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      !isAnswered ? 'border-gray-200 bg-gray-50' : 
                      isCorrect ? 'border-green-200 bg-green-50' : 
                      'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium flex-1">
                        {index + 1}. {question.text}
                      </h4>
                      <Badge 
                        className={
                          !isAnswered ? 'bg-gray-100 text-gray-800 hover:bg-gray-100' : 
                          isCorrect ? 'bg-green-100 text-green-800 hover:bg-green-100' : 
                          'bg-red-100 text-red-800 hover:bg-red-100'
                        }
                      >
                        {!isAnswered ? 'Not Answered' : isCorrect ? 'Correct' : 'Incorrect'}
                      </Badge>
                    </div>
                    
                    {viewAnswers && (
                      <div className="mt-3 space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div 
                            key={optionIndex} 
                            className={`flex items-center p-2 rounded-md ${
                              optionIndex === question.correctAnswer ? 'bg-green-100' : 
                              (userAnswer === optionIndex && userAnswer !== question.correctAnswer) ? 'bg-red-100' : 
                              'bg-white'
                            }`}
                          >
                            <div className="mr-2">
                              {optionIndex === question.correctAnswer ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : (userAnswer === optionIndex) ? (
                                <XCircle className="h-5 w-5 text-red-600" />
                              ) : (
                                <div className="h-5 w-5"></div>
                              )}
                            </div>
                            <span>{option}</span>
                          </div>
                        ))}
                        
                        {/* Explanation (could be added in the future) */}
                        {/* <div className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                          <span className="font-semibold">Explanation: </span> 
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div> */}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <Link to={`/exams/${id}`}>
              <Button variant="outline">Back to Exam Page</Button>
            </Link>
            <Link to={`/mock-tests/${id}`}>
              <Button>Try Again</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ExamResultPage;
