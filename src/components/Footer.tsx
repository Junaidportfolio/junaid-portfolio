import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">Junaid Javaid</div>
            <div className="text-primary-foreground/80 text-sm">
              Lead Generation & Outreach Specialist
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/junaid-javaid-lead"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            © {currentYear} Junaid Javaid. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
