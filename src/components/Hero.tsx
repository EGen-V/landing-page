import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import egenLogo from "@/assets/egen-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Floating orbs for ambient effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo with elegant fade-in */}
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <img 
            src={egenLogo} 
            alt="EGen Series Logo" 
            className="w-32 h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          <span className="bg-gradient-to-r from-primary via-foreground to-primary bg-clip-text text-transparent">
            EGen Series
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          Premium AI Architecture
        </p>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          70 billion parameters of specialized intelligence. Four expertly crafted models designed for excellence in their domains. Built by{" "}
          <span className="text-foreground font-semibold">ErebusTN</span>, refined through innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="http://erebustn.ydns.eu/" target="_blank" rel="noopener noreferrer">
              Try the Models
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 hover:bg-accent/50 transition-all duration-300"
            asChild
          >
            <a href="https://huggingface.co/ErebusTN/EGen_V1" target="_blank" rel="noopener noreferrer">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore on Hugging Face
            </a>
          </Button>
        </div>

        {/* Tech badge */}
        <div className="mt-16 animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow" />
            <span className="text-sm text-muted-foreground">
              Powered by proprietary THL architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
