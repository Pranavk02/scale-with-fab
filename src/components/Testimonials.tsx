import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 sm:p-12 shadow-soft border border-border">
            <Quote className="w-12 h-12 text-accent mb-6" />
            <blockquote className="text-2xl sm:text-3xl text-foreground font-medium leading-relaxed mb-6">
              "FabAccounts changed how we scale. Zero downtime, faster approvals, real people behind the accounts."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-accent"></div>
              <div>
                <div className="font-semibold text-foreground">Senior Media Buyer</div>
                <div className="text-muted-foreground">Agency Partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
