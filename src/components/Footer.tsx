import telegramQR from "@/assets/IMG_2873.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Left Section */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">FabAccounts</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for verified ad accounts across multiple platforms.
            </p>
          </div>

          {/* Platforms + QR Section */}
          <div className="flex flex-col items-end space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-right">Platforms</h4>
              <ul className="space-y-1 text-primary-foreground/80 text-right">
                <li>NewsBreak</li>
                <li>TikTok</li>
                <li>Bigo</li>
                <li>Google</li>
                <li>SmartNews</li>
              </ul>
            </div>

            {/* Telegram QR */}
            <div className="mt-4 flex flex-col items-end">
              <h4 className="font-semibold mb-2">Contact on Telegram</h4>
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
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 FabAccounts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
