import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">EGen Series</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium AI architecture crafted for specialized excellence. Four models, one vision: quality over scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="http://erebustn.ydns.eu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                Try the Models
              </a>
              <a 
                href="https://huggingface.co/ErebusTN/EGen_V1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="h-4 w-4" />
                Hugging Face
              </a>
            </div>
          </div>

          {/* Developer */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developer</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">ErebusTN</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Independent AI researcher and architect
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                10+ years in neural architecture design
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 EGen Series. Proprietary Architecture.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://huggingface.co/ErebusTN/EGen_V1" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
