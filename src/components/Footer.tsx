import { Heart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <Button
            asChild
            variant="outline"
            className="glass-hover animate-glow"
          >
            <a href="/Mugesh_Gunasekaran_Resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>

          <p className="text-center text-muted-foreground flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
            <span className="gradient-text font-semibold">Mugesh Gunasekaran</span>
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
