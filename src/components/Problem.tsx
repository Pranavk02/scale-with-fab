import { AlertCircle } from "lucide-react";

const Problem = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
            <AlertCircle className="w-8 h-8 text-destructive" />
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            The Problem
          </h2>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Getting consistent, reliable ad accounts shouldn't be a gamble.
          </p>
          <p className="text-xl text-foreground font-semibold mt-4 leading-relaxed">
            With constant bans, limited access, and approval delays, scaling becomes harder than it should be.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
