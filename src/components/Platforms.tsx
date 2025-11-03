const platforms = [
  { name: "Meta", logo: "@/assets/meta.png", color: "from-blue-500 to-purple-500" }
  { name: "NewsBreak", logo: "@/assets/newsbreak.jpg", color: "from-red-500 to-red-600" },
  { name: "TikTok", logo: "@/assets/tik-tok.png", color: "from-black to-cyan-500" },
  { name: "Bigo", logo: "@/assets/bigo.png", color: "from-orange-500 to-red-500" },
  { name: "Google", logo: "@/assets/google.png", color: "from-blue-500 to-green-500" },
];

const Platforms = () => {
  return (
    <section id="platforms" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Platforms We Cover
          </h2>
          <p className="text-xl text-muted-foreground">
            Access to the top-performing advertising platforms
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-fade-in flex items-center justify-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${platform.color} mb-4`}
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-9 h-9 object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {platform.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
