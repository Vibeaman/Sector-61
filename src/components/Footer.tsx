const Footer = () => {
  return (
    <footer className="border-t border-border py-12 glass-panel">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-primary text-lg mb-2">SECTOR 61</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              A decentralized creative ecosystem for experimental tokens and community-driven crypto culture.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-3">
              Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#ecosystem" className="text-muted-foreground hover:text-primary transition-colors">Ecosystem</a></li>
              <li><a href="#whitepaper" className="text-muted-foreground hover:text-primary transition-colors">Whitepaper</a></li>
              
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-xs uppercase tracking-wider mb-3">
              Community
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://t.me/+FF702jatY7tmM2E0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://x.com/i/communities/2031250283301376238" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  X Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-[10px] leading-relaxed max-w-2xl mx-auto">
            Disclaimer: Sector 61 is an experimental project. Tokens launched within the ecosystem are
            community experiments and should not be considered financial advice or investment products.
            
            DYOR. NFA.
          </p>
          <p className="text-muted-foreground/50 text-[10px] mt-4">
            © {new Date().getFullYear()} Sector 61 // All rights reserved
          </p>
          <p className="text-muted-foreground/30 text-[9px] mt-2 tracking-widest uppercase">
            Built by VIBEAMAN
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;