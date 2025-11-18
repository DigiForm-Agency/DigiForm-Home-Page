import { Button } from "@/components/ui/button";
import logoImage from "@assets/generated_images/DigiForm_minimalistic_logo_design_a7cc37b4.png";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoImage} 
              alt="DigiForm" 
              className="h-8 w-auto"
              data-testid="logo-digiform"
            />
            <span className="text-xl font-bold text-foreground">DigiForm</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("services")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <Button 
              onClick={() => scrollToSection("contact")}
              data-testid="nav-contact"
            >
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
