import Image from "next/image";
import newsbreak from "@/assets/newsbreak.jpg";
import tiktok from "@/assets/tik-tok.png";
import bigo from "@/assets/bigo.png";
import google from "@/assets/google.png";
import meta from "@/assets/meta.png";

const platforms = [
  { name: "Google", color: "from-blue-500 to-green-500", image: google },
  { name: "Meta", color: "from-indigo-500 to-blue-500", image: meta },
  { name: "NewsBreak", color: "from-red-500 to-red-600", image: newsbreak },
  { name: "TikTok", color: "from-black to-cyan-500", image: tiktok },
  { name: "Bigo", color: "from-blue-500 to-purple-500", image: bigo },
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
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth animate-fade-in flex items-center justify-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${platform.color} mb-4 overflow-hidden`}
                >
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    width={60}
                    height={60}
                    className="object-contain"
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
