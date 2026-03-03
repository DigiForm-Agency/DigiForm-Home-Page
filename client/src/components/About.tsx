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
            Your trusted partner in <strong>digi</strong>tal trans<strong>form</strong>ation
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
                Websites that help local businesses get more customers.
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                We're a small, dedicated team based in North County San Diego, helping local businesses grow with clean, modern websites and reliable ongoing support.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                With backgrounds in technology, marketing, and product strategy, we build websites that make it easy for customers to find you, understand your services, and take action.
              </p>
              <p className="text-base text-muted-foreground">
                We care deeply about our work and love partnering with businesses that want to continue thriving, online and off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
