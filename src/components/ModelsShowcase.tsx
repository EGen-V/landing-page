import ModelCard from "./ModelCard";
import { Brain, Code2, Shield, Heart } from "lucide-react";

const ModelsShowcase = () => {
  const models = [
    {
      title: "EGen V1",
      subtitle: "General Intelligence",
      description: "Master of diverse domains with exceptional reasoning and creative capabilities. Your versatile partner for business strategy, technical analysis, and sophisticated problem-solving.",
      parameters: "35B Active",
      icon: Brain,
      features: ["Multi-step Reasoning", "Creative Generation", "Strategic Analysis", "Technical Writing"],
      delay: "0.2s"
    },
    {
      title: "EGen B1",
      subtitle: "Software Architect",
      description: "Elite coding intelligence with quantum-inspired optimization. Generates production-ready code across 40+ languages with architectural excellence and security compliance built-in.",
      parameters: "50B Active",
      icon: Code2,
      features: ["Full-Stack Development", "System Architecture", "Performance Optimization", "Security First"],
      delay: "0.4s"
    },
    {
      title: "EGen T1",
      subtitle: "Cybersecurity Operator",
      description: "Specialized security expert mastering offensive and defensive operations. Ethical hacking, vulnerability assessment, and threat intelligence with comprehensive tool integration.",
      parameters: "25B Active",
      icon: Shield,
      features: ["Penetration Testing", "Vulnerability Analysis", "Threat Intelligence", "Security Tools"],
      delay: "0.6s"
    },
    {
      title: "EGen M1",
      subtitle: "Mental Health Guardian",
      description: "Compassionate AI companion trained in evidence-based therapeutic approaches. Provides emotional support with crisis detection and professional-grade ethical boundaries.",
      parameters: "30B Active",
      icon: Heart,
      features: ["CBT & DBT Support", "Crisis Detection", "Emotional Validation", "Resource Guidance"],
      delay: "0.8s"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Four Specialized Minds
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each model is meticulously crafted for domain excellence, powered by our proprietary Transformer Hierarchical Layers architecture.
          </p>
        </div>

        {/* Models grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model) => (
            <ModelCard key={model.title} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsShowcase;
