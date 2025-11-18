import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_background_team_workspace_075e61f3.png";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Modernize Your Business<br />for the Digital Age
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
          We help local small and medium businesses transform their online presence through 
          cutting-edge web design, AI automation, and strategic digital marketing.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
            onClick={scrollToContact}
            data-testid="button-get-started"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-view-work"
          >
            View Our Work
          </Button>
        </div>
        <p className="mt-12 text-sm text-white/70 font-medium">
          Trusted by 50+ local businesses
        </p>
      </div>
    </section>
  );
}
