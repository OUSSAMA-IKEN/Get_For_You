import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Log from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#home" },
    { label: "Produit", href: "#product" },
    { label: "Avis", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 z-50 mx-auto p-3 transition-all duration-700
    glass backdrop-blur-xl rounded-[2rem]
    ${
      isScrolled
        ? "border-b border-border/50 md:rounded-full top-16 w-[65%]"
        : "bg-transparent  top-3 w-[70%]"
    }`}
    >
      <div className="container  mx-auto px-6">
        <div className="flex items-center justify-around  h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
          >
            <div className="flex items-center justify-around">
              <img
                src={Log}
                alt="logo"
                className="h-[7rem] object-contain relative -left-8 "
              />
              <span className="relative -left-8 block -600 add"></span>
              <span className="relative -left-8 block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold ">
                Get4You
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex w-full items-center justify-center space-x-9">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-foreground/85 hover:text-primary text-[18px] font-[400] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Cart Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {/* <Button variant="outline" size="sm" className="hidden md:flex">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Panier
            </Button> */}
          </motion.div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground/80 hover:text-primary  transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* <Button variant="outline" size="sm" className="w-full">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Panier
            </Button> */}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
