import { Instagram, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DigiForm</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Helping local businesses grow online.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>858-344-4585</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <Mail className="h-4 w-4 text-primary" />
              <span>hello@digiform.agency</span>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" asChild data-testid="link-instagram">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-service-web"
                >
                  Website Design & Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-service-maintenance"
                >
                  Website Maintenance & Hosting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-service-seo"
                >
                  Local SEO & Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-service-photo"
                >
                  On-Site Photography
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DigiForm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
