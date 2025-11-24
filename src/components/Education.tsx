import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.E. Computer Science Engineering',
      institution: 'KSR College of Engineering',
      grade: 'CGPA: 8.5',
      icon: GraduationCap,
    },
    {
      degree: 'Higher Secondary (Class XII)',
      institution: 'Tamil Nadu State Board',
      grade: '',
      icon: GraduationCap,
    },
    {
      degree: 'Secondary School (Class X)',
      institution: 'Tamil Nadu State Board',
      grade: '',
      icon: GraduationCap,
    },
  ];

  const certifications = [
    'Spring Framework 5 – Udemy',
    'MongoDB Developer Guide – Udemy',
    'Fundamentals of Liquibase & CI/CD – Liquibase University',
    'AWS Beginners – Scaler',
  ];

  return (
    <>
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Education
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                    {edu.grade && <p className="text-muted-foreground">{edu.grade}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Certifications
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:animate-glow">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-foreground font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
