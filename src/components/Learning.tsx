import { Cloud, Brain, TrendingUp, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Learning = () => {
  const cloudSkills = [
    { name: 'AWS Cloud', progress: 75, icon: '☁️' },
    { name: 'Azure Cloud Fundamentals', progress: 60, icon: '☁️' },
    { name: 'Cloud Architecture Basics', progress: 70, icon: '☁️' },
    { name: 'CI/CD Pipelines (GitLab, Jenkins)', progress: 85, icon: '⚙️' },
  ];

  const aiSkills = [
    { name: 'Python for Automation & Backend', icon: '🧠', learning: true },
    { name: 'Machine Learning Basics', icon: '🤖', learning: true },
    { name: 'LLM & Generative AI Concepts', icon: '🧪', learning: false },
    { name: 'Prompt Engineering', icon: '🔍', learning: true },
    { name: 'Data Processing & Model Handling', icon: '📊', learning: false },
  ];

  const fintechSkills = [
    'ISO 20022 Advanced',
    'Cross-Border Payments',
    'Swift MT/MX Deep Dive',
    'Real-Time Payment Architecture',
  ];

  return (
    <section id="learning" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-neon-blue animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Learning & Skill Upgrading
            </h2>
            <Sparkles className="w-6 h-6 text-neon-purple animate-pulse" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuously expanding my technical expertise in cloud, AI, and modern financial technologies
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Cloud Learning Card */}
          <Card className="glass glass-hover group hover:scale-[1.02] transition-all duration-300 border-neon-blue/20 hover:border-neon-blue/40 hover:shadow-xl hover:shadow-neon-blue/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Cloud className="w-8 h-8 text-neon-blue group-hover:animate-pulse" />
                <span className="gradient-text">Cloud Learning</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {cloudSkills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="space-y-2 animate-fade-in hover:scale-[1.02] transition-transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">
                      {skill.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={skill.progress} 
                    className="h-2 bg-secondary/50 group-hover:animate-pulse"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Python & AI Learning Card */}
          <Card className="glass glass-hover group hover:scale-[1.02] transition-all duration-300 border-neon-purple/20 hover:border-neon-purple/40 hover:shadow-xl hover:shadow-neon-purple/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Brain className="w-8 h-8 text-neon-purple group-hover:animate-pulse" />
                <span className="gradient-text">Python & AI Learning</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/40 hover:bg-background/60 transition-all duration-300 hover:scale-[1.02] animate-fade-in border border-border/50 hover:border-neon-purple/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  {skill.learning && (
                    <Badge 
                      variant="outline" 
                      className="bg-neon-purple/10 text-neon-purple border-neon-purple/30 animate-pulse text-xs"
                    >
                      Currently Learning
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* FinTech Upskilling Section */}
        <Card className="glass glass-hover hover:scale-[1.01] transition-all duration-300 border-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-xl hover:shadow-neon-cyan/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <TrendingUp className="w-8 h-8 text-neon-cyan animate-pulse" />
              <span className="gradient-text">FinTech Upskilling</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {fintechSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 border-neon-cyan/30 hover:border-neon-cyan/50 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300 hover:scale-110 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mr-2">💱</span>
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Learning;