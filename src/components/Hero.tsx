import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Get Trusted Ad Accounts.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Scale Without Limits.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Access verified and managed ad accounts across TikTok, NewsBreak, Bigo, Google, and SmartNews — with full support and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-accent text-accent-foreground border-0 shadow-glow hover:scale-105 transition-smooth text-lg px-8"
              >
                Request Accounts
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to an Account Manager
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-accent blur-3xl opacity-20 rounded-3xl"></div>
              <img 
                src={heroDashboard} 
                alt="FabAccounts Dashboard Interface" 
                className="relative rounded-2xl shadow-medium hover:shadow-glow transition-smooth w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
