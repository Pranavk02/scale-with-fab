import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to get access to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              trusted ad accounts?
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
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
              Talk to Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
