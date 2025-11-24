import { Code2, Database, Workflow, Server, GitBranch, MessageSquare } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Core Programming',
      skills: ['Java (Expert)', 'JavaScript', 'Object-Oriented Programming', 'Design Patterns'],
    },
    {
      icon: Server,
      title: 'Backend & Frameworks',
      skills: ['Spring Boot (Advanced)', 'Spring Core', 'Spring MVC', 'Spring Data', 'RESTful API Development', 'Apache Camel', 'Microservices Architecture', 'Event-Driven Architecture'],
    },
    {
      icon: MessageSquare,
      title: 'Messaging & Streaming',
      skills: ['Apache Kafka', 'ActiveMQ', 'Message Queues', 'Real-time Data Processing'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB (Expert)', 'MySQL', 'Database Modeling', 'Query Optimization', 'Schema Design'],
    },
    {
      icon: GitBranch,
      title: 'DevOps & Tools',
      skills: ['GitLab CI/CD', 'Jenkins Automation', 'Maven', 'Docker (Basics)', 'JIRA', 'IntelliJ IDEA', 'VS Code'],
    },
    {
      icon: Workflow,
      title: 'Financial Messaging & Payments',
      skills: ['ISO 20022 (PAIN/PACS/CAMT)', 'SWIFT MT/MX', 'Fedwire', 'RTGS', 'High-value Payment Flows', 'Cross-Border Transactions'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary group-hover:animate-glow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground/90 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
