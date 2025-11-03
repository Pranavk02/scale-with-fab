import { AlertTriangle, XCircle, Clock, Lock } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Constant Account Bans",
    description: "Ad accounts suspended without warning, disrupting campaigns."
  },
  {
    icon: Clock,
    title: "Approval Delays",
    description: "Long wait times preventing you from launching campaigns on time."
  },
  {
    icon: Lock,
    title: "Limited Access",
    description: "Platform restrictions making it harder to scale your reach."
  }
];

const Problem = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto animate-fade-in">
          {/* Left: Large Warning Icon Circle */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/30 dark:to-red-950/30 border-2 border-orange-200 dark:border-orange-800 flex items-center justify-center">
              <AlertTriangle className="w-20 h-20 lg:w-24 lg:h-24 text-orange-500 animate-pulse" strokeWidth={1.5} />
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                The Problem
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Getting consistent, reliable ad accounts shouldn't be a gamble.
              </p>
            </div>
            
            {/* Problem Indicators Grid */}
            <div className="space-y-4 mt-8">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-orange-50/50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-100 dark:border-orange-900/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <problem.icon className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
