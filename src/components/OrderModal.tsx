import { motion, AnimatePresence } from "framer-motion";
import { X, CreditCard, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

import { useTranslationContext } from "@/contexts/i18n.context";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  quantity: number;
}

const OrderModal = ({ isOpen, onClose, quantity }: OrderModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez traiter la commande
    console.log("Commande soumise:", formData);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const [language, setLanguage, t] = useTranslationContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass rounded-3xl p-8 w-full max-w-2xl max-h-[91vh] overflow-y-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl  font-bold">
                  {t("Complete your order")}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Product Summary */}
              <div className="glass rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">
                      {t("Smart Lint Remover Pro")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("exceptional performance")}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{`${Number(
                      quantity * 150
                    )}`}
                    <span className="text-primary px-1">dh</span>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      {t("Quantity")}: {quantity}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t("Delivery 24h")}
                    <p>{t("for free")}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t("Cash on Delivery")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t("1 month garantee")}
                  </div>
                </div>
              </div>

              {/* Order Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="lastName">{t("Username")}</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t("Email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t("Phone Number")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address">{t("Address")}</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="">
                  <div>
                    <Label htmlFor="city">{t("City")}</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r font-semibold from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 glow"
                  >
                    {/* order confirmation */}
                    {t("send order")} - {`${quantity * 150} Dh`}
                  </Button>
                </motion.div>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                {t("order confirmation")}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
