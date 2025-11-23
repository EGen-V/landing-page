import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ModelCardProps {
  title: string;
  subtitle: string;
  description: string;
  parameters: string;
  icon: LucideIcon;
  features: string[];
  delay?: string;
  accentColor?: string;
}

const ModelCard = ({ 
  title, 
  subtitle, 
  description, 
  parameters, 
  icon: Icon, 
  features,
  delay = "0s",
  accentColor = "primary"
}: ModelCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-fade-in-up opacity-0"
      style={{ animationDelay: delay }}
    >
      {/* Accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${accentColor}/50 to-${accentColor}`} />
      
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs font-mono">
            {parameters}
          </Badge>
        </div>
        
        <div>
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          <CardDescription className="text-base font-medium text-muted-foreground">
            {subtitle}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 pt-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Key Capabilities
          </p>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs bg-card hover:bg-accent/50 transition-colors duration-200"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
    </Card>
  );
};

export default ModelCard;
