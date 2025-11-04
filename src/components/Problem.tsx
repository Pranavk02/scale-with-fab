import { AlertTriangle, XCircle, Clock, Lock } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Constant Account Bans",
    description:
      "Ad accounts suspended without warning, disrupting campaigns.",
  },
  {
    icon: Clock,
    title: "Approval Delays",
    description:
      "Long wait times preventing you from launching campaigns on time.",
  },
  {
    icon: Lock,
    title: "Limited Access",
    description:
      "Platform restrictions making it harder to scale your reach.",
  },
];

const Problem = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto animate-fade-in">
          
          {/* Left: Heading + Subtext with Icon */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 animate-pulse" strokeWidth={2} />
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                The Problem
              </h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
              Getting consistent, reliable ad accounts shouldn't be a gamble.
            </p>
          </div>

          {/* Right: Problems List (same as before) */}
          <div className="space-y-4">
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
    </section>
  );
};

export default Problem;
