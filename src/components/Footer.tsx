import telegramQR from "@/assets/IMG_2873.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3 columns: Left (Info) | Center (Platforms) | Right (QR) */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          
          {/* Left: Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">FabAccounts</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for verified ad accounts across multiple platforms.
            </p>

            {/* Privacy Policy Link */}
            <a
              href="https://privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm font-medium text-accent bg-accent-foreground/10 px-4 py-2 rounded-md hover:bg-accent-foreground/20 transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Center: Platforms */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="font-semibold mb-4 text-center">Platforms</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-center">
              <li>Google</li>
              <li>Meta</li>
              <li>Tik Tok</li>
              <li>Bigo</li>
              <li>Newsbreak</li>
            </ul>
          </div>

          {/* Right: Telegram QR */}
          <div className="flex flex-col items-end">
            <h4 className="font-semibold mb-2 text-right">Contact on Telegram</h4>
            <a
              href="https://t.me/yourTelegramUsername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={telegramQR}
                alt="Telegram QR Code"
                className="w-28 h-28 rounded-lg border border-primary-foreground/30 hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </a>
            <p className="text-xs text-primary-foreground/70 mt-1">
              Scan to chat instantly
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 FabAccounts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
