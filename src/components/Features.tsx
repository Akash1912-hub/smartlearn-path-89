import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Video, 
  MessageSquare, 
  Award, 
  Users, 
  BookOpen,
  Clock,
  Shield,
  Smartphone,
  BarChart3,
  Headphones,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized course recommendations and adaptive learning paths powered by advanced AI algorithms.",
      gradient: "from-purple-500 to-pink-500",
      badge: "AI"
    },
    {
      icon: Video,
      title: "HD Video Streaming",
      description: "Crystal clear video lectures with adaptive streaming, offline downloads, and interactive transcripts.",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Premium"
    },
    {
      icon: MessageSquare,
      title: "Live Q&A Sessions",
      description: "Interactive live sessions with instructors, real-time chat, and collaborative whiteboards.",
      gradient: "from-green-500 to-emerald-500",
      badge: "Live"
    },
    {
      icon: Award,
      title: "Verified Certificates",
      description: "Industry-recognized certificates upon course completion to boost your career prospects.",
      gradient: "from-yellow-500 to-orange-500",
      badge: "Certified"
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Connect with fellow learners, form study groups, and collaborate on projects together.",
      gradient: "from-rose-500 to-red-500",
      badge: "Social"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Detailed insights into your learning progress, strengths, and areas for improvement.",
      gradient: "from-indigo-500 to-purple-500",
      badge: "Analytics"
    },
    {
      icon: Smartphone,
      title: "Mobile Learning",
      description: "Learn on-the-go with our responsive design and dedicated mobile app features.",
      gradient: "from-teal-500 to-green-500",
      badge: "Mobile"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Learn at your own pace with lifetime access to course materials and flexible deadlines.",
      gradient: "from-amber-500 to-yellow-500",
      badge: "Flexible"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect your data and ensure a safe learning environment.",
      gradient: "from-slate-500 to-gray-500",
      badge: "Secure"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support and technical assistance whenever you need help.",
      gradient: "from-violet-500 to-purple-500",
      badge: "Support"
    },
    {
      icon: Zap,
      title: "Interactive Quizzes",
      description: "Engaging quizzes and assessments with instant feedback and detailed explanations.",
      gradient: "from-orange-500 to-red-500",
      badge: "Interactive"
    },
    {
      icon: BookOpen,
      title: "Rich Content Library",
      description: "Access to thousands of courses, ebooks, coding exercises, and supplementary materials.",
      gradient: "from-cyan-500 to-blue-500",
      badge: "Library"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block text-primary">Succeed in Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and features you need for an exceptional learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-card hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:shadow-glow transition-all duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 rounded-2xl bg-primary text-primary-foreground shadow-glow">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">50k+</div>
            <div className="text-primary-foreground/80">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">1,200+</div>
            <div className="text-primary-foreground/80">Expert Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
            <div className="text-primary-foreground/80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-primary-foreground/80">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;