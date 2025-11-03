import { Button } from "@/components/ui/button";

const Navigation = () => {
  const handleRequestClick = () => {
    window.open("https://forms.gle/vUEKh8VoK7uCW5Uh9", "_blank");
  };
  const handleTelegramChat = () => {
    // Replace with your actual Telegram username or chat link
    window.open("https://t.me/peezee1155", "_blank");
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">FabAccounts</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#platforms" className="text-foreground hover:text-primary transition-smooth">
              Platforms
            </a>
            <a href="#who-its-for" className="text-foreground hover:text-primary transition-smooth">
              Who It's For
            </a>
            <a href="#why-choose" className="text-foreground hover:text-primary transition-smooth">
              Why Choose Us
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex"
              onClick={handleTelegramChat}
              >
              Talk to Team
            </Button>
            <Button className="gradient-accent text-accent-foreground border-0 shadow-glow hover:scale-105 transition-smooth"
              onClick={handleRequestClick}
              >
              Request Accounts
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
