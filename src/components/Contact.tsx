import { Mail, Linkedin, FileText, Download, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mugeshaanoor@gmail.com',
      link: 'mailto:mugeshaanoor@gmail.com',
      primary: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9360245551',
      link: 'tel:+919360245551',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, India',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mugesh-gunasekaran',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileText,
      label: 'Naukri Profile',
      link: 'https://www.naukri.com/',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          Let's Connect
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Open to exciting opportunities in FinTech and Full Stack Development. 
          Let's build something amazing together!
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className={`glass rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 ${
                    method.primary ? 'md:col-span-3' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 animate-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{method.label}</h3>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{method.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social Links & Resume */}
          <div className="glass rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Connect With Me</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    variant="outline"
                    className="glass-hover h-16 text-base"
                  >
                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-5 h-5 mr-3" />
                      {social.label}
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full h-16 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-glow"
              >
                <a href="/Mugesh_Gunasekaran_Resume.pdf" download>
                  <Download className="w-6 h-6 mr-3" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Personal Attributes */}
          <div className="mt-12 glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Personal Attributes</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Proactive', 'Ownership-driven', 'Strong collaboration in Agile teams', 'Fast learner', 'Adaptable to new technologies'].map((attr, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-foreground font-medium hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                >
                  {attr}
                </span>
              ))}
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-lg font-semibold mb-3">Languages</h4>
              <div className="flex justify-center gap-4">
                <span className="px-4 py-2 bg-muted rounded-full text-foreground">Tamil (Proficient)</span>
                <span className="px-4 py-2 bg-muted rounded-full text-foreground">English (Proficient)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
