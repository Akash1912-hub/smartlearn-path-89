import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Clock, Users, BookOpen, Play, Heart, ShoppingCart, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import coursesImage from '@/assets/courses-grid.jpg';

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

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
    },
    {
      id: 5,
      title: "Advanced React Development",
      instructor: "John Smith",
      instructorAvatar: "",
      rating: 4.8,
      students: 7543,
      duration: "28 hours",
      price: 99.99,
      originalPrice: 219.99,
      level: "Advanced",
      category: "Web Development",
      progress: 0,
      isEnrolled: false,
      thumbnail: coursesImage,
      description: "Deep dive into React hooks, context, performance optimization, and testing.",
      topics: ["React Hooks", "Context API", "Performance", "Testing"],
      isLive: false
    },
    {
      id: 6,
      title: "Data Science with Python",
      instructor: "Dr. Lisa Anderson",
      instructorAvatar: "",
      rating: 4.7,
      students: 11234,
      duration: "45 hours",
      price: 119.99,
      originalPrice: 259.99,
      level: "Intermediate",
      category: "AI & Data Science",
      progress: 0,
      isEnrolled: false,
      thumbnail: coursesImage,
      description: "Learn data analysis, visualization, and machine learning with Python.",
      topics: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      isLive: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Web Development', label: 'Web Development' },
    { value: 'AI & Data Science', label: 'AI & Data Science' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Design', label: 'Design' }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">All Courses</h1>
          <p className="text-xl text-muted-foreground">
            Discover our complete collection of courses and find your next learning adventure.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-card rounded-lg p-6 shadow-card">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses, instructors, or topics..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
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
                      Continue
                    </Button>
                  ) : (
                    <Button className="ml-4">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Enroll
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all courses.
            </p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;