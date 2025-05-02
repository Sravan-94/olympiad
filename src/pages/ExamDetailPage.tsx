
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BookOpen, 
  FileText, 
  Calendar, 
  Clock, 
  Award, 
  Users, 
  CheckCircle, 
  AlertCircle 
} from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const ExamDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Mock data for a single exam
  const exam = {
    id: id || "default-id",
    title: "Mathematics Olympiad",
    subject: "Mathematics",
    description: "The Mathematics Olympiad is a prestigious competition designed to identify and nurture mathematical talent among students. Participants will face challenging problems that test their analytical thinking, problem-solving skills, and mathematical creativity.",
    date: "June 10, 2025",
    registrationDeadline: "May 15, 2025",
    duration: "2 hours",
    difficulty: "Medium" as const,
    eligibility: "Open to students in grades 9-12 with a passion for mathematics",
    fee: "$25",
    location: "Online / Remote",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    syllabus: [
      {
        title: "Number Theory",
        topics: ["Prime Numbers", "Divisibility Rules", "Modular Arithmetic", "Diophantine Equations"]
      },
      {
        title: "Algebra",
        topics: ["Polynomials", "Inequalities", "Functional Equations", "Sequences and Series"]
      },
      {
        title: "Geometry",
        topics: ["Euclidean Geometry", "Coordinate Geometry", "Trigonometry", "Transformations"]
      },
      {
        title: "Combinatorics",
        topics: ["Counting Principles", "Permutations and Combinations", "Probability", "Graph Theory"]
      }
    ],
    resources: [
      {
        title: "Recommended Textbooks",
        items: [
          "Problem Solving Strategies by Arthur Engel",
          "Mathematical Olympiad Challenges by Titu Andreescu and Razvan Gelca",
          "The Art and Craft of Problem Solving by Paul Zeitz"
        ]
      },
      {
        title: "Online Resources",
        items: [
          "Khan Academy: Advanced Mathematics",
          "Brilliant.org: Math Problem Solving",
          "Art of Problem Solving Forum"
        ]
      }
    ],
    faqs: [
      {
        question: "How will the exam be conducted?",
        answer: "The exam will be conducted online through our secure examination portal. You will need a computer with a stable internet connection and a webcam for proctoring."
      },
      {
        question: "Can I use a calculator during the exam?",
        answer: "No, calculators are not permitted. The problems are designed to be solved without electronic aids."
      },
      {
        question: "How will the exam be graded?",
        answer: "Each problem will be worth a specified number of points. Partial credit may be awarded for significant progress on a problem even if the final answer is incorrect."
      },
      {
        question: "What happens if I experience technical difficulties during the exam?",
        answer: "If you experience technical difficulties, you can contact our support team immediately. In case of major issues, we may reschedule your exam."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="education-container">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Exam Header */}
          <div className="relative">
            <img 
              src={exam.image} 
              alt={exam.title} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="mb-2">
                <Badge variant="secondary" className="mb-2">{exam.subject}</Badge>
                <Badge variant={exam.difficulty === "Easy" ? "default" : exam.difficulty === "Medium" ? "secondary" : "destructive"} className="ml-2">
                  {exam.difficulty}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{exam.title}</h1>
            </div>
          </div>
          
          {/* Quick Info */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="text-education-blue h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Date</p>
                  <p className="text-sm text-gray-500">{exam.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-education-blue h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-sm text-gray-500">{exam.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-education-blue h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Fee</p>
                  <p className="text-sm text-gray-500">{exam.fee}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-education-blue h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-gray-500">{exam.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <div className="flex flex-wrap gap-4">
              <Button className="bg-education-blue hover:bg-blue-700">
                Register for Exam
              </Button>
              <Link to={`/mock-tests/${id}`}>
                <Button variant="outline" className="border-education-blue text-education-blue hover:bg-blue-50">
                  Start Mock Test
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="p-6">
            <Tabs defaultValue="overview" onValueChange={setActiveTab} value={activeTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="faqs">FAQs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-3">About this Exam</h2>
                    <p className="text-gray-700">{exam.description}</p>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        Eligibility
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{exam.eligibility}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertCircle className="mr-2 h-5 w-5 text-yellow-500" />
                        Important Dates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="font-medium">Registration Deadline:</dt>
                          <dd>{exam.registrationDeadline}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="font-medium">Exam Date:</dt>
                          <dd>{exam.date}</dd>
                        </div>
                      </dl>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="syllabus">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-3">Exam Syllabus</h2>
                  <p className="text-gray-700 mb-6">
                    The syllabus covers the following topics. Make sure to prepare thoroughly for each section.
                  </p>
                  
                  <div className="space-y-6">
                    {exam.syllabus.map((section, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-1">
                            {section.topics.map((topic, idx) => (
                              <li key={idx} className="text-gray-700">{topic}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-3">Study Resources</h2>
                  <p className="text-gray-700 mb-6">
                    Here are some recommended resources to help you prepare for the exam.
                  </p>
                  
                  <div className="space-y-6">
                    {exam.resources.map((resource, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-1">
                            {resource.items.map((item, idx) => (
                              <li key={idx} className="text-gray-700">{item}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="faqs">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    {exam.faqs.map((faq, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">{faq.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamDetailPage;
