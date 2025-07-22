import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Users, BookOpen, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import { useAuth } from "@/hooks/useAuth";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="E-learning platform" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-glow/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Card className="p-4 shadow-glow">
          <CardContent className="p-0 flex items-center space-x-2">
            <Play className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Live Classes</span>
          </CardContent>
        </Card>
      </div>

      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Card className="p-4 shadow-glow">
          <CardContent className="p-0 flex items-center space-x-2">
            <Award className="h-5 w-5 text-success" />
            <span className="text-sm font-medium">Certificates</span>
          </CardContent>
        </Card>
      </div>

      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Card className="p-4 shadow-glow">
          <CardContent className="p-0 flex items-center space-x-2">
            <Users className="h-5 w-5 text-info" />
            <span className="text-sm font-medium">50k+ Students</span>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="text-primary font-medium px-4 py-2">
            🚀 AI-Powered Learning Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Learn From The
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Best Instructors
            </span>
            Worldwide
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join millions of learners in mastering new skills with our AI-powered courses, 
            live classes, and personalized learning paths.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-glow hover:shadow-xl transition-all duration-300"
              onClick={() => user ? navigate('/courses') : navigate('/auth')}
            >
              <Play className="mr-2 h-5 w-5" />
              {user ? 'Continue Learning' : 'Start Learning Now'}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => navigate('/courses')}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Courses
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary-glow mr-2" />
                <span className="text-3xl font-bold text-white">50k+</span>
              </div>
              <p className="text-white/80">Active Students</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-primary-glow mr-2" />
                <span className="text-3xl font-bold text-white">1,200+</span>
              </div>
              <p className="text-white/80">Courses</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                <span className="text-3xl font-bold text-white">4.9</span>
              </div>
              <p className="text-white/80">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-primary-glow mr-2" />
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <p className="text-white/80">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;