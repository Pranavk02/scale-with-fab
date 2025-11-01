const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">FabAccounts</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner for verified ad accounts across multiple platforms.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>NewsBreak</li>
              <li>TikTok</li>
              <li>Bigo</li>
              <li>Google</li>
              <li>SmartNews</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About Us</li>
              <li>Contact</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
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
