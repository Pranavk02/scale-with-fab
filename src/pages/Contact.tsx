import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import worldMapImage from "@/assets/world-map-dotted.png";

const offices = [
  {
    country: "United States",
    city: "New York",
    address: "123 Business Ave, NY 10001",
    email: "usa@fabaccounts.com"
  },
  {
    country: "United Kingdom",
    city: "London",
    address: "456 Commerce St, London EC1A 1BB",
    email: "uk@fabaccounts.com"
  },
  {
    country: "India",
    city: "Mumbai",
    address: "789 Tech Park, Mumbai 400001",
    email: "india@fabaccounts.com"
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    address: "321 Business Bay, Dubai",
    email: "uae@fabaccounts.com"
  }
];

const Contact = () => {
  const handleTelegramChat = () => {
    window.open("https://t.me/peezee1155", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Our Global{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Offices
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to serve you worldwide with trusted ad account solutions
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <img 
              src={worldMapImage} 
              alt="Global office locations"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Office Addresses Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {office.city}
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-4">
                  {office.country}
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-sm text-foreground">{office.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-sm text-primary font-medium">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                get started?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Talk to our account managers for personalized solutions
            </p>
            
            <Button
              size="lg"
              className="gradient-accent text-accent-foreground border-0 shadow-glow hover:scale-105 transition-smooth text-lg px-8"
              onClick={handleTelegramChat}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to Account Manager
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
