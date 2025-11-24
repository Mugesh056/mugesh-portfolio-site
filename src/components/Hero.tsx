import { Download, Mail, Linkedin, FileText } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/mugesh-profile.jpg';
import { useNavigate } from "react-router-dom";


const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm md:text-base">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text animate-fade-in">
                Mugesh Gunasekaran
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light">
                Associate Software Engineer
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Java Full Stack Developer | FinTech & Payment Systems | Spring Boot | Microservices | Kafka | MongoDB | ISO20022 Message | DB
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
             <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-glow" > <Link to="/contact"> <Mail className="w-5 h-5 mr-2" /> Hire Me </Link> </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass-hover border-primary/50"
              >
                <a href="/Mugesh_Gunasekaran_Resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass-hover border-primary/50"
              >
                <a href="https://www.linkedin.com/in/mugesh-gunasekaran" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>

           
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:mugeshaanoor@gmail.com" className="hover:text-primary transition-colors">
                  mugeshaanoor@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📍</span>
                <span>Erode, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📞</span>
                <span>+91 9360245551</span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative glass rounded-full p-2 animate-float">
                <img
                  src={profileImage}
                  alt="Mugesh Gunasekaran"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/30"
                />
              </div>

              {/* Decorative Circles */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-primary/30 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-secondary/30 rounded-full animate-spin-slow delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
