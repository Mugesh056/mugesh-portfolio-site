import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Volante Technologies',
      period: 'Aug 2023 – Present',
      location: 'Chennai, India',
      achievements: [
        'Contributing to Central Bank payment modernization projects, focusing on Fedwire, SWIFT, RTGS, and ISO 20022-based high-value payment systems',
        'Developing complex payment processing modules using Java, Spring Boot, and Volante Designer, including transformations, enrichment logic, business rules, and high-availability routing workflows',
        'Building and deploying secure, scalable microservices with end-to-end transaction processing, real-time API integration, and performance-optimized high-value payments',
        'Actively contributed to the Central Bank ISO 20022 migration (July 14 Milestone), ensuring full alignment with global messaging standards and regulatory expectations',
        'Worked extensively with SWIFT MT/MX messages, ISO 20022 formats (PACS, PAIN, CCT, BCT, RP), ensuring seamless straight-through processing and compliance',
        'Built strong knowledge in domestic & cross-border payment flows, high-value settlement patterns, and structured financial messaging',
        'Closely collaborated with Business, QA, and Support teams to deliver rule configurations, validation logic, release verifications, and end-to-end functional testing for SWIFT/Fedwire flows',
        'Designed and implemented MongoDB data models for payment initiation, transaction audits, routing rules, and reference datasets—optimized for high-volume read/write workloads',
      ],
    },
    {
      title: 'Software Engineer Trainee',
      company: 'Volante Technologies',
      period: 'Jul 2022 – Jul 2023',
      location: 'Chennai, India',
      achievements: [
        'Resolved critical bugs and implemented new features using Java, Kafka, and MongoDB',
        'Hands-on development in core payment engines using VolPay Designer',
        'Worked with ISO 20022 PACS/PAIN flows and validation logic',
        'Gained expertise in end-to-end financial workflows',
        'Delivered solutions in Agile & Kanban delivery models',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 relative"
            >
              {/* Timeline Connector */}
              {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="text-lg text-primary font-semibold mb-3">{exp.company}</div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-foreground/90">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
