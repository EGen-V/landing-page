import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Layers, Lock, Zap, Globe, Target } from "lucide-react";

const TechSpecs = () => {
  const specs = [
    {
      icon: Cpu,
      label: "Parameters",
      value: "70 Billion",
      description: "Total model capacity"
    },
    {
      icon: Layers,
      label: "Architecture",
      value: "THL v1.0.2",
      description: "Proprietary design"
    },
    {
      icon: Zap,
      label: "Context",
      value: "8,192 tokens",
      description: "Working memory"
    },
    {
      icon: Lock,
      label: "Safety",
      value: "Built-in",
      description: "Ethical by design"
    },
    {
      icon: Globe,
      label: "Training",
      value: "2.5T tokens",
      description: "Diverse corpora"
    },
    {
      icon: Target,
      label: "Precision",
      value: "95%+",
      description: "Domain accuracy"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built from the ground up with quality, safety, and specialized performance as core principles.
          </p>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specs.map((spec, index) => (
            <Card 
              key={spec.label}
              className="group hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up opacity-0 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <spec.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground mb-1">
                    {spec.value}
                  </p>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {spec.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {spec.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy section */}
        <div className="mt-20 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <Card className="border-2 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Development Philosophy
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Quality First</p>
                      <p className="text-sm text-muted-foreground">Specialized excellence over scale, every time</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Vertical Integration</p>
                      <p className="text-sm text-muted-foreground">Full control from architecture to deployment</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Ethical by Design</p>
                      <p className="text-sm text-muted-foreground">Safety protocols at the architectural level</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Independent Innovation</p>
                      <p className="text-sm text-muted-foreground">Solo development with uncompromising vision</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
