import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import restaurantImage from "@assets/generated_images/Restaurant_website_portfolio_piece_2dbfc386.png";
import fitnessImage from "@assets/generated_images/Fitness_website_portfolio_piece_79c7752f.png";
import realEstateImage from "@assets/generated_images/Real_estate_website_portfolio_a1aa6af1.png";
import coffeeImage from "@assets/generated_images/Coffee_shop_website_portfolio_df1a8815.png";
import lawImage from "@assets/generated_images/Law_firm_website_portfolio_5b075b38.png";
import boutiqueImage from "@assets/generated_images/Boutique_store_website_portfolio_c4b50634.png";

const portfolioItems = [
  {
    image: restaurantImage,
    client: "Bella Italia Restaurant",
    type: "Fine Dining",
    description: "Complete website redesign with online reservation system and menu showcase.",
    results: "65% increase in online bookings, 45% improvement in mobile traffic",
    tags: ["Web Design", "Automation"]
  },
  {
    image: fitnessImage,
    client: "PowerFit Gym",
    type: "Fitness Center",
    description: "Modern website with class scheduling, membership management, and mobile app.",
    results: "200+ new member signups, 80% reduction in admin time",
    tags: ["Web Design", "Business Automation"]
  },
  {
    image: realEstateImage,
    client: "Cornerstone Realty",
    type: "Real Estate",
    description: "Property listing platform with virtual tours and automated lead management.",
    results: "3x more qualified leads, 50% faster listing updates",
    tags: ["Web Design", "AI Automation"]
  },
  {
    image: coffeeImage,
    client: "The Daily Grind",
    type: "Coffee Shop",
    description: "Responsive website with online ordering and loyalty program integration.",
    results: "40% increase in online orders, 500+ loyalty members",
    tags: ["Web Design", "Social Media"]
  },
  {
    image: lawImage,
    client: "Sterling Law Group",
    type: "Legal Services",
    description: "Professional website with client portal and automated appointment scheduling.",
    results: "90% reduction in scheduling conflicts, improved client satisfaction",
    tags: ["Web Design", "Automation"]
  },
  {
    image: boutiqueImage,
    client: "Luxe Boutique",
    type: "Retail Fashion",
    description: "E-commerce platform with inventory management and social media integration.",
    results: "150% growth in online sales, 2k+ Instagram followers",
    tags: ["Web Design", "Social Media"]
  }
];

export default function Portfolio() {
  return (
    <section className="py-16 md:py-24 bg-card" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses in our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2"
              data-testid={`card-portfolio-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={item.image} 
                  alt={item.client}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl">{item.client}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground">
                  {item.type}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground">
                  {item.description}
                </p>
                <div className="bg-accent/50 rounded-md p-3">
                  <p className="text-sm font-medium text-accent-foreground">
                    {item.results}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" data-testid={`badge-tag-${index}-${idx}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
