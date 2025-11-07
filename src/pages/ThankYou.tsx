import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <CheckCircle2 className="w-24 h-24 sm:w-32 sm:h-32 text-primary relative" strokeWidth={1.5} />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Thank You – You're In!{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Your Request is Confirmed
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed max-w-xl mx-auto">
          Thanks for choosing FabAccounts! We've received your request for trusted ad accounts. Our team will reach out to you soon to get you started.
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg font-semibold text-foreground mb-10">
          FabAccounts — Your Gateway to Reliable Ad Accounts
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="gradient-accent text-accent-foreground border-0 shadow-glow hover:scale-105 transition-smooth text-lg px-12"
          onClick={() => navigate("/")}
        >
          Back to Homepage
        </Button>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            Expect to hear from us within 24 hours. In the meantime, feel free to reach out on{" "}
            <a
              href="https://t.me/peezee1155"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Telegram
            </a>
            {" "}if you have any questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
