import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import Log from "@/assets/logo.png";

import { useTranslationContext } from "@/contexts/i18n.context";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@soundwavepro.com" },
    { icon: Phone, text: "+212 767295014" },
    { icon: MapPin, text: "Tanger, Morocco" }
  ];

  const [language, setLanguage, t] = useTranslationContext();

  return (
    <footer
      id="contact"
      className="relative bg-card/50 border-t border-border/50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center justify-start ml-8">
              <img
                src={Log}
                alt="logo"
                className="h-[7rem]  object-contain relative -left-8  "
              />
              <div className="flex items-center">
                <span className="relative -left-8 block -600 add"></span>
                <span className="relative -left-8 block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold ">
                  Get4You
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md ">
              {t(
                "Découvrez une nouvelle dimension sonore avec nos écouteurs premium. Qualité, innovation et design pour une expérience audio exceptionnelle."
              )}
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">{t("Contact")}</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-muted-foreground"
                  dir="ltr"
                >
                  <info.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">{t("Quick Links")}</h3>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Product", href: "#product" },
                { label: "Reviews", href: "#reviews" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" }
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {t(link.label)}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            {t("© 2025 Smart Lint Remover Pro. All rights reserved.")}
          </p>
          <div className="flex space-x-6 text-sm gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("Confidentiality Policy")}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("Terms of Use")}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {t("Legal Notices")}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
