import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Guides
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} TechBuild. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;