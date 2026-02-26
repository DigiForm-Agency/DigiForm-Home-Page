import { Globe, Server, MapPin, Camera } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Clean, mobile-friendly websites built to convert visitors into customers.",
    benefits: [
      "Mobile-first",
      "Fast loading",
      "Easy to update",
      "Built for Google"
    ],
    pricing: "Starting at $1,200"
  },
  {
    icon: Server,
    title: "Website Maintenance & Hosting",
    description: "We keep your website running, secure, and up to date.",
    benefits: [
      "Hosting & monitoring",
      "Small updates included",
      "Backups",
      "Security updates"
    ],
    pricing: "Starting at $75/month"
  },
  {
    icon: MapPin,
    title: "Local SEO & Optimization",
    description: "Help customers find you online.",
    benefits: [
      "Google Business integration",
      "Local keywords",
      "Contact & map setup"
    ],
    pricing: "Quoted Separately"
  },
  {
    icon: Camera,
    title: "On-Site Photography (Add-On)",
    description: "Simple, professional on-site photography to elevate your website and build trust with customers.",
    benefits: [
      "Up to 1-hour on-site photoshoot",
      "Interior, exterior, product, or workspace shots",
      "Natural, lifestyle-style images (not overly posed)",
      "15-30 edited photos optimized for web use",
      "Planned specifically to support your website content"
    ],
    pricing: "Quoted Separately"
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover-elevate active-elevate-2 flex flex-col h-full"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-2 flex-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold text-primary mt-4 pt-4 border-t">
                    {service.pricing}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
