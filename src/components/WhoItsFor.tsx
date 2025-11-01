import { Building2, Target, Users } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "For Agencies",
    description: "Manage multiple accounts, stay compliant, and scale with confidence."
  },
  {
    icon: Target,
    title: "For Media Buyers",
    description: "Get access to ready-to-run accounts and avoid ad downtime."
  },
  {
    icon: Users,
    title: "For Affiliates",
    description: "Scale faster with pre-approved, trusted accounts across platforms."
  }
];

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Who It's For
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-fade-in border border-border hover:border-accent"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                <audience.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {audience.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
