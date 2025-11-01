import { Shield, Zap, HeadphonesIcon, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Whitelisted & verified ad accounts",
    description: "Pre-approved accounts ready to use immediately"
  },
  {
    icon: Zap,
    title: "Available for 5 top-performing platforms",
    description: "Access to NewsBreak, TikTok, Bigo, Google, and SmartNews"
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated support for issue resolution",
    description: "Expert help when you need it most"
  },
  {
    icon: TrendingUp,
    title: "Strategic recommendations to optimize ROI",
    description: "Data-driven insights to improve performance"
  }
];

const Advantage = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            The FabAccounts Advantage
          </h2>
          <p className="text-2xl text-primary font-semibold mb-8">
            Your Partner for Performance Stability.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg gradient-accent mb-4">
                <feature.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in">
          <p className="text-xl text-foreground font-semibold">
            We don't just give you access — we help you scale responsibly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
