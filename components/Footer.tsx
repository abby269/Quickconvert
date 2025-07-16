
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="border-t bg-background/80 backdrop-blur-sm" role="contentinfo">
      
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} QuickConvert. All rights reserved.
          </div>
      
    </footer>
  );
}
