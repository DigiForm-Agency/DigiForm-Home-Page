import teamImage from "@assets/generated_images/About_us_team_photo_a00c0571.png";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={teamImage} 
              alt="Our team"
              className="rounded-xl w-full h-auto shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Empowering Local Businesses Since 2016
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                We're a team of passionate digital strategists, designers, and developers 
                dedicated to helping small and medium businesses thrive in the digital age. 
                Our mission is simple: make cutting-edge technology accessible and affordable 
                for local businesses.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Unlike large agencies that treat you like a number, we take the time to 
                understand your unique challenges and goals. We believe that every business 
                deserves a professional online presence and efficient systems that help them 
                compete with larger competitors.
              </p>
              <p className="text-base text-muted-foreground">
                Our approach combines proven strategies with the latest technologies to deliver 
                measurable results. We're not just service providers—we're your long-term partners 
                in growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
