
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, Save, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: "easy" | "medium" | "hard";
}

const MockTestPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock exam data
  const examData = {
    id: id || "default-id",
    title: "Mathematics Olympiad Mock Test",
    subject: "Mathematics",
    duration: 60, // in minutes
    totalQuestions: 10,
    instructions: [
      "Read each question carefully before answering.",
      "Each question has only one correct answer.",
      "There is no negative marking for wrong answers.",
      "You can navigate between questions using the navigation panel.",
      "You can mark questions for review and come back to them later.",
    ]
  };
  
  // Mock questions data
  const mockQuestions: Question[] = [
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
  ];
  
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(mockQuestions.length).fill(null));
  const [markedForReview, setMarkedForReview] = useState<boolean[]>(Array(mockQuestions.length).fill(false));
  const [timeLeft, setTimeLeft] = useState(examData.duration * 60); // in seconds
  const [testSubmitted, setTestSubmitted] = useState(false);
  
  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !testSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !testSubmitted) {
      handleSubmitTest();
    }
  }, [timeLeft, testSubmitted]);
  
  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Calculate progress
  const answeredQuestions = selectedAnswers.filter(answer => answer !== null).length;
  const progress = (answeredQuestions / mockQuestions.length) * 100;
  
  // Handle question navigation
  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };
  
  // Handle answer selection
  const handleSelectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };
  
  // Toggle mark for review
  const toggleMarkForReview = () => {
    const newMarked = [...markedForReview];
    newMarked[currentQuestion] = !newMarked[currentQuestion];
    setMarkedForReview(newMarked);
  };
  
  // Handle save and next
  const handleSaveAndNext = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  // Handle previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  // Handle submit test
  const handleSubmitTest = () => {
    setTestSubmitted(true);
    toast({
      title: "Mock Test Submitted",
      description: "Your answers have been successfully submitted.",
    });
    
    // Navigate to results page with answers data
    setTimeout(() => {
      navigate(`/exam-results/${id}`, { 
        state: { 
          answers: selectedAnswers,
          questions: mockQuestions,
          examTitle: examData.title,
          timeSpent: examData.duration * 60 - timeLeft
        } 
      });
    }, 1500);
  };
  
  // Get question status class
  const getQuestionStatusClass = (index: number) => {
    if (markedForReview[index]) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    if (selectedAnswers[index] !== null) return "bg-green-100 text-green-800 border-green-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };
  
  // Get difficulty badge color
  const getDifficultyColor = (difficulty: "easy" | "medium" | "hard") => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-300";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "hard":
        return "bg-red-100 text-red-800 border-red-300";
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="education-container">
        {/* Instructions Modal - could be converted to a dialog component */}
        {!testSubmitted && (
          <div className="mb-6">
            <Card className="border-education-blue">
              <CardHeader className="bg-education-blue text-white">
                <CardTitle className="flex justify-between items-center">
                  <span>{examData.title} - Instructions</span>
                  <span className="flex items-center text-base">
                    <Clock className="mr-1 h-5 w-5" /> Time Left: {formatTime(timeLeft)}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="list-disc pl-5 space-y-1">
                  {examData.instructions.map((instruction, index) => (
                    <li key={index} className="text-gray-700">{instruction}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Total Questions: {examData.totalQuestions} | 
                    Subject: {examData.subject} | 
                    Duration: {examData.duration} minutes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {/* Main test area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question and options */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              {!testSubmitted ? (
                <>
                  <CardHeader className="border-b">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-500">
                        Question {currentQuestion + 1} of {mockQuestions.length}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border" 
                        style={{ 
                          borderColor: mockQuestions[currentQuestion].difficulty === 'easy' ? '#86EFAC' : 
                                     mockQuestions[currentQuestion].difficulty === 'medium' ? '#FDE68A' : '#FCA5A5',
                          backgroundColor: mockQuestions[currentQuestion].difficulty === 'easy' ? '#DCFCE7' : 
                                         mockQuestions[currentQuestion].difficulty === 'medium' ? '#FEF9C3' : '#FEE2E2',
                          color: mockQuestions[currentQuestion].difficulty === 'easy' ? '#166534' : 
                               mockQuestions[currentQuestion].difficulty === 'medium' ? '#854D0E' : '#991B1B'
                        }}>
                        {mockQuestions[currentQuestion].difficulty.charAt(0).toUpperCase() + mockQuestions[currentQuestion].difficulty.slice(1)}
                      </span>
                    </div>
                    <CardTitle>{mockQuestions[currentQuestion].text}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <RadioGroup 
                      value={selectedAnswers[currentQuestion]?.toString() || ""} 
                      onValueChange={(value) => handleSelectAnswer(parseInt(value))}
                    >
                      <div className="space-y-4">
                        {mockQuestions[currentQuestion].options.map((option, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <RadioGroupItem value={idx.toString()} id={`option-${idx}`} />
                            <Label htmlFor={`option-${idx}`} className="text-base">{option}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex flex-wrap justify-between gap-2">
                    <div>
                      <Button 
                        variant="outline" 
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                      >
                        Previous
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        onClick={toggleMarkForReview}
                        className={markedForReview[currentQuestion] ? "bg-yellow-50 text-yellow-700 border-yellow-300" : ""}
                      >
                        {markedForReview[currentQuestion] ? "Unmark for Review" : "Mark for Review"}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleSaveAndNext}
                        disabled={currentQuestion === mockQuestions.length - 1}
                        className="flex items-center"
                      >
                        <Save className="mr-1 h-4 w-4" /> Save & Next
                      </Button>
                    </div>
                  </CardFooter>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 p-6">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h2 className="text-2xl font-semibold mb-2">Test Submitted!</h2>
                  <p className="text-gray-600 text-center">
                    Your answers have been successfully submitted. Redirecting to results...
                  </p>
                </div>
              )}
            </Card>
          </div>
          
          {/* Question palette and timer */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Time Left</CardTitle>
                  <span className="text-xl font-semibold flex items-center">
                    <Clock className="mr-1.5 h-5 w-5 text-red-500" />
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-gray-500 mb-2">Progress</p>
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-gray-500 mt-2 text-right">
                  {answeredQuestions} of {mockQuestions.length} questions answered
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="border-b pb-3">
                <CardTitle className="text-lg">Question Palette</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid grid-cols-5 gap-2">
                  {mockQuestions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToQuestion(index)}
                      className={`w-full aspect-square flex items-center justify-center text-sm font-medium border rounded-md
                        ${getQuestionStatusClass(index)}
                        ${currentQuestion === index ? 'ring-2 ring-education-blue' : ''}
                      `}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="mt-6 space-y-2 text-sm">
                  <p className="font-medium mb-2">Legend:</p>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-gray-100 border border-gray-300 rounded-sm mr-2"></span>
                    <span>Not Answered</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-green-100 border border-green-300 rounded-sm mr-2"></span>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 bg-yellow-100 border border-yellow-300 rounded-sm mr-2"></span>
                    <span>Marked for Review</span>
                  </div>
                </div>
                
                {/* Submit button */}
                <div className="mt-6">
                  <Button 
                    onClick={handleSubmitTest} 
                    className="w-full bg-education-blue hover:bg-blue-700"
                  >
                    Submit Test
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Click to submit your answers. You cannot change your answers after submission.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestPage;
