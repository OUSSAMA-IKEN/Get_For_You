import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ProductDescription = () => {
  const features = [
    'Audio haute résolution avec drivers de 40mm',
    'Réduction de bruit active adaptative',
    'Autonomie de 30 heures avec étui de charge',
    'Connexion Bluetooth 5.3 ultra-stable',
    'Résistant à l\'eau IPX6',
    'Commandes tactiles intuitives',
    'Compatible avec tous les appareils',
    'Garantie 2 ans incluse'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 relative">
      <div className="spot-3" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Caractéristiques <span className="text-primary">Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chaque détail a été pensé pour vous offrir une expérience audio exceptionnelle
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-4 glass rounded-lg p-4 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-4">30h</div>
              <div className="text-xl font-semibold mb-2">Autonomie totale</div>
              <div className="text-muted-foreground">
                Profitez de votre musique toute la journée sans interruption
              </div>
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;