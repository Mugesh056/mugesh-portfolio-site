const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-300">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Full Stack Developer with <span className="text-primary font-semibold">3+ years of experience</span> in the{' '}
            <span className="text-secondary font-semibold">FinTech and Payments domain</span>. Specialized in Java, Spring Boot, 
            Microservices, and scalable API development.
          </p>

          <p className="text-lg text-foreground/90 leading-relaxed mt-6">
            Experienced in building secure, high-performance transaction platforms using Kafka, ActiveMQ, and MongoDB. 
            Strong expertise in financial messaging standards — <span className="text-primary font-semibold">SWIFT MT/MX, 
            Fedwire, RTGS, ISO 20022 (PAIN/PACS)</span>.
          </p>

          <p className="text-lg text-foreground/90 leading-relaxed mt-6">
            Skilled in real-time processing, enterprise integrations, backend optimization, and CI/CD pipelines. 
            Passionate about building reliable, modern financial systems that handle millions of transactions with precision and security.
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
              <div className="text-3xl font-bold text-accent">100+</div>
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
