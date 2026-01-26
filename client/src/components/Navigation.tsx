import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/yacht", label: "The Yacht" },
  { href: "/charters", label: "Experiences" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isTransparent
          ? "bg-transparent py-8 border-b border-white/10"
          : "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-border"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        <Link href="/" className="z-50">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-widest uppercase transition-colors",
            isTransparent ? "text-white" : "text-primary"
          )}>
            Yacht XVII
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary",
                isTransparent 
                  ? "text-white/90 hover:text-white" 
                  : location === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking">
            <Button 
              variant={isTransparent ? "outline" : "default"}
              className={cn(
                "rounded-none px-8 font-serif italic",
                isTransparent 
                  ? "border-white text-white hover:bg-white hover:text-black" 
                  : "bg-primary hover:bg-primary/90 text-white"
              )}
            >
              Reserve
            </Button>
          </Link>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={cn("hover:bg-transparent active:bg-transparent", isTransparent ? "text-white" : "text-foreground")}>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] bg-background border-l border-border p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-border/50 flex items-center justify-between">
                <span className="text-xl font-serif font-bold text-primary tracking-widest">YACHT XVII</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col p-8 gap-8 items-center text-center">
                {links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={cn(
                      "text-2xl font-serif transition-colors",
                      location === link.href ? "text-primary" : "text-foreground/80"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="w-full h-px bg-border/50 my-4" />
                <Link href="/booking" className="w-full" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-white rounded-none py-8 text-xl font-serif italic">
                    Reserve Now
                  </Button>
                </Link>
              </nav>
              <div className="mt-auto p-8 text-center text-muted-foreground text-sm font-light">
                <p>concierge@yachtxvii.com</p>
                <p className="mt-2">202-451-8809</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
