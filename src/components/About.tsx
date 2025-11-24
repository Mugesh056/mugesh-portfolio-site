const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-300">
          <p className="text-lg text-foreground/90 leading-relaxed">
            I'm an <span className="text-primary font-semibold">Associate Software Engineer</span> specializing in{' '}
            <span className="text-secondary font-semibold">Java Full Stack Development</span> and high-performance payment engineering. 
            With <span className="text-primary font-semibold">3+ years of experience</span> in the FinTech domain, I build scalable 
            backend systems and real-time transaction platforms for global financial institutions.
          </p>

          <p className="text-lg text-foreground/90 leading-relaxed mt-6">
            My core expertise includes <span className="text-primary font-semibold">Java, Spring Boot, Microservices, Kafka, MongoDB</span>, 
            and advanced financial messaging standards such as <span className="text-secondary font-semibold">SWIFT, Fedwire, RTGS, and ISO 20022</span>. 
            I work extensively on mission-critical payment flows—designing APIs, building reusable components, implementing enrichment and validation logic, 
            optimizing transaction performance, and ensuring seamless end-to-end message processing.
          </p>

          <p className="text-lg text-foreground/90 leading-relaxed mt-6">
            As a <span className="text-primary font-semibold">Java Full Stack Developer</span>, I also work with RESTful APIs, JSON/XML data transformations, 
            UI integrations, and microservice-to-UI communication patterns. I focus on clean engineering practices—writing maintainable code, 
            modularizing services, strengthening security, and applying best practices from modern enterprise architectures.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">15+</div>
              <div className="text-sm text-muted-foreground mt-1">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">1</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground mt-1">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
