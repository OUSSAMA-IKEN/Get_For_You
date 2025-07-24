import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import productImage from "@/assets/61Lpj9ipB-L._AC_UF1000_1000_QL80___1_-removebg-preview.png";

interface ProductHeroProps {
  onOrderClick: () => void;
}

const ProductHero = ({ onOrderClick }: ProductHeroProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: number) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  return (
    <section
      id="product"
      className="min-h-screen  mx-auto flex items-center  relative  "
    >
      {/* Background spots */}
      <div className="spot-1" />
      <div className="spot-2" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-auto  "
          >
            <div className="w-full h-auto flex justify-center relative lg:right-16 ">
              <div className="flex flex-col items-center ">
                <div className="flex justify-center rotate-12">
                  <img
                    src={productImage}
                    alt="SoundWave Pro Headphones"
                    className="w-[50%] lg:w-[80%] h-auto podAnimation  "
                  />
                </div>
                <div className="shadow"></div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/30 rounded-full blur-xl"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Smart Lint Remover
              </span>
              <br />
              <span className="text-foreground">Pro</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Discover exceptional performance with our premium Smart Lint
              Remover. Cutting-edge technology, sleek design, and ultimate
              comfort for an unmatched fabric care experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-4xl font-bold text-primary"
            >
              150 DH
            </motion.div>

            {/* Quantity Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center  space-x-4 justify-center"
            >
              <span className="text-lg font-medium">Quantité:</span>
              <div className="flex items-center space-x-2 glass rounded-lg p-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center font-bold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(1)}
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Order Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={onOrderClick}
                size="lg"
                className="w-full sm:w-auto px-12 py-6 text-lg font-semibold bg-gradient-to-r button transition-all  glow"
              >
                Demander maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
