import { Globe, Bot, Zap, Share2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    benefits: [
      "Mobile-first responsive design",
      "Fast loading performance",
      "SEO optimized structure",
      "Easy content management"
    ]
  },
  {
    icon: Bot,
    title: "AI for Admin Tasks",
    description: "Automate repetitive tasks and streamline your operations with AI.",
    benefits: [
      "Intelligent document processing",
      "Automated customer responses",
      "Smart scheduling systems",
      "Data analysis and insights"
    ]
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Connect your tools and automate workflows to save time and reduce errors.",
    benefits: [
      "Payment processing automation",
      "Inventory management systems",
      "Customer relationship tools",
      "Automated reporting"
    ]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Engage your audience and grow your brand across all platforms.",
    benefits: [
      "Content strategy and planning",
      "Multi-platform scheduling",
      "Audience engagement",
      "Performance analytics"
    ]
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
                className="hover-elevate active-elevate-2"
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
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
