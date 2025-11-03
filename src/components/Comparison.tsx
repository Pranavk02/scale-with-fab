import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Account Status",
    fabaccounts: "Whitelisted Accounts",
    others: "Unverified or resale accounts"
  },
  {
    feature: "Platform Coverage",
    fabaccounts: "5-Platform Coverage",
    others: "Usually single or limited platforms"
  },
  {
    feature: "Support",
    fabaccounts: "Expert Support",
    others: "Limited or no escalation"
  },
  {
    feature: "Strategic Guidance",
    fabaccounts: "Recommendations & Insights",
    others: "No strategic help"
  }
];

const Comparison = () => {
  return (
    <section id="why-choose" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose FabAccounts
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-medium overflow-hidden animate-fade-in">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground p-6 font-bold text-lg">
              <div></div>
              <div className="text-center">FabAccounts</div>
              <div className="text-center">Others</div>
            </div>
            
            {comparisonData.map((row, index) => (
              <div 
                key={index}
                className={`grid grid-cols-3 p-6 ${index % 2 === 0 ? 'bg-muted/30' : 'bg-card'} border-b border-border last:border-b-0`}
              >
                <div className="font-semibold text-foreground">{row.feature}</div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-accent font-medium">
                    <Check className="w-5 h-5" />
                    <span className="hidden sm:inline">{row.fabaccounts}</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 text-muted-foreground">
                    <X className="w-5 h-5" />
                    <span className="hidden sm:inline">{row.others}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
