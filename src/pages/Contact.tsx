import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Footer from "@/components/Footer";

const offices = [
  {
    country: "United States",
    city: "New York",
    address: "123 Business Ave, NY 10001",
    email: "usa@fabaccounts.com",
    coordinates: [-74.006, 40.7128] as [number, number]
  },
  {
    country: "United Kingdom",
    city: "London",
    address: "456 Commerce St, London EC1A 1BB",
    email: "uk@fabaccounts.com",
    coordinates: [-0.1276, 51.5074] as [number, number]
  },
  {
    country: "India",
    city: "Mumbai",
    address: "789 Tech Park, Mumbai 400001",
    email: "india@fabaccounts.com",
    coordinates: [72.8777, 19.0760] as [number, number]
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    address: "321 Business Bay, Dubai",
    email: "uae@fabaccounts.com",
    coordinates: [55.2708, 25.2048] as [number, number]
  }
];

const Contact = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map with a placeholder token message
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN_HERE';
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [20, 30],
        zoom: 1.5,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add markers for each office
      offices.forEach((office) => {
        if (map.current) {
          const marker = new mapboxgl.Marker({ color: 'hsl(var(--primary))' })
            .setLngLat(office.coordinates)
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<strong>${office.city}</strong><br>${office.country}`)
            )
            .addTo(map.current);
        }
      });
    } catch (error) {
      console.error('Mapbox initialization error:', error);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleTelegramChat = () => {
    window.open("https://t.me/peezee1155", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
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
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={mapContainer} 
            className="w-full h-[500px] rounded-lg shadow-lg border border-border"
            style={{ minHeight: '500px' }}
          />
          <p className="text-sm text-muted-foreground text-center mt-4">
            Add your Mapbox token to enable the interactive map
          </p>
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
