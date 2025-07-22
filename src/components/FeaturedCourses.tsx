import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Star, Clock, Users, BookOpen, Play, Heart, ShoppingCart } from "lucide-react";
import coursesImage from "@/assets/courses-grid.jpg";

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      instructorAvatar: "",
      rating: 4.9,
      students: 12547,
      duration: "42 hours",
      price: 89.99,
      originalPrice: 199.99,
      level: "Beginner",
      category: "Web Development",
      progress: 0,
      isEnrolled: false,
      thumbnail: coursesImage,
      description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
      topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      isLive: false
    },
    {
      id: 2,
      title: "AI & Machine Learning Masterclass",
      instructor: "Dr. Michael Chen",
      instructorAvatar: "",
      rating: 4.8,
      students: 8234,
      duration: "38 hours",
      price: 129.99,
      originalPrice: 299.99,
      level: "Intermediate",
      category: "AI & Data Science",
      progress: 65,
      isEnrolled: true,
      thumbnail: coursesImage,
      description: "Master AI concepts, Python, TensorFlow, and build real-world ML projects.",
      topics: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
      isLive: true
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Emma Williams",
      instructorAvatar: "",
      rating: 4.7,
      students: 15632,
      duration: "25 hours",
      price: 59.99,
      originalPrice: 149.99,
      level: "Beginner",
      category: "Marketing",
      progress: 0,
      isEnrolled: false,
      thumbnail: coursesImage,
      description: "Learn SEO, social media marketing, content strategy, and analytics.",
      topics: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      isLive: false
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      instructor: "Alex Rivera",
      instructorAvatar: "",
      rating: 4.9,
      students: 9876,
      duration: "32 hours",
      price: 79.99,
      originalPrice: 179.99,
      level: "Beginner",
      category: "Design",
      progress: 25,
      isEnrolled: true,
      thumbnail: coursesImage,
      description: "Design beautiful interfaces with Figma, Adobe XD, and learn UX principles.",
      topics: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      isLive: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development": return "bg-blue-100 text-blue-800";
      case "AI & Data Science": return "bg-purple-100 text-purple-800";
      case "Marketing": return "bg-green-100 text-green-800";
      case "Design": return "bg-pink-100 text-pink-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-success/10 text-success";
      case "Intermediate": return "bg-warning/10 text-warning";
      case "Advanced": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Featured Courses
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popular Courses to
            <span className="block text-primary">Get You Started</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students learning from industry experts in our most popular courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.isLive && (
                  <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                    🔴 Live
                  </Badge>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                {course.isEnrolled && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getCategoryColor(course.category)} variant="secondary">
                    {course.category}
                  </Badge>
                  <Badge className={getLevelColor(course.level)} variant="outline">
                    {course.level}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={course.instructorAvatar} />
                    <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.topics.slice(0, 3).map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {course.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{course.topics.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">${course.price}</span>
                    <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                  </div>
                  
                  {course.isEnrolled ? (
                    <Button className="ml-4">
                      <Play className="mr-2 h-4 w-4" />
                      Continue Learning
                    </Button>
                  ) : (
                    <Button className="ml-4">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <BookOpen className="mr-2 h-5 w-5" />
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;