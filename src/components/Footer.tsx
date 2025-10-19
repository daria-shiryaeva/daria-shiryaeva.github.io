import { Mail, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a 
                href="mailto:odrshrv@gmail.com" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                odrshrv@gmail.com
              </a>
              <a 
                href="https://linkedin.com/in/daria-shiryaeva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                United Kingdom
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/projects" className="hover:text-accent transition-colors">
                Projects
              </Link>
              <Link to="/experience" className="hover:text-accent transition-colors">
                Experience
              </Link>
              <Link to="/about" className="hover:text-accent transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/legal" className="hover:text-accent transition-colors">
                Privacy & Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Daria Shiryaeva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
