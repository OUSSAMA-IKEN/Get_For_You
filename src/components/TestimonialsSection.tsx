import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  // const testimonials = [
  //   {
  //     name: "Marie Dubois",
  //     role: "Audiophile",
  //     comment: "La qualité sonore est absolument exceptionnelle. Ces écouteurs ont transformé ma façon d'écouter la musique.",
  //     rating: 5,
  //     avatar: "MD"
  //   },
  //   {
  //     name: "Thomas Martin",
  //     role: "Producteur musical",
  //     comment: "En tant que professionnel, j'ai testé beaucoup d'écouteurs. Ceux-ci offrent une précision remarquable dans toutes les fréquences.",
  //     rating: 5,
  //     avatar: "TM"
  //   },
  //   {
  //     name: "Sophie Laurent",
  //     role: "Utilisatrice quotidienne",
  //     comment: "Confortables même après plusieurs heures d'utilisation. La réduction de bruit est parfaite pour les transports.",
  //     rating: 5,
  //     avatar: "SL"
  //   }
  // ];

  const testimonials = [
    {
      name: "Souad",
      role: "👩‍🦰 from Marrakech",
      comment:
        "The product is more than amazing! It made me go back to wearing clothes I had forgotten about because of the lint 💖",
      rating: 5,
      avatar: "S"
    },
    {
      name: "Leila",
      role: "👩‍💼 from Casablanca",
      comment:
        "It arrived in just 2 days, and the delivery was free! Excellent service 👏",
      rating: 4,
      avatar: "L"
    },
    {
      name: "Nadia",
      role: "👩 from Tangier",
      comment:
        "I used it on an old jacket and it looked new again! I recommend it to everyone without hesitation ✅",
      rating: 5,
      avatar: "N"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="reviews" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Customer <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers worldwide
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="h-8 w-8 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* User info */}
              <div
                className={`flex items-center space-x-3 ${
                  testimonial.avatar === "L" ? "mt-[50px]" : ""
                }`}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
