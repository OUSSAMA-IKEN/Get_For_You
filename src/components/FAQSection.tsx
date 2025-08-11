import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { useTranslationContext } from "@/contexts/i18n.context";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [language, setLanguage, t] = useTranslationContext();

  // const faqs = [
  //   {
  //     question: "Quelle est l'autonomie réelle des écouteurs ?",
  //     answer:
  //       "Les SoundWave Pro offrent jusqu'à 8 heures d'écoute continue avec une seule charge, et jusqu'à 30 heures au total avec l'étui de charge. L'autonomie peut varier selon le volume d'écoute et l'utilisation de la réduction de bruit."
  //   },
  //   {
  //     question: "Sont-ils compatibles avec tous les appareils ?",
  //     answer:
  //       "Oui, les SoundWave Pro sont compatibles avec tous les appareils Bluetooth : smartphones Android et iOS, tablettes, ordinateurs, consoles de jeu, et bien plus encore. La connexion Bluetooth 5.3 assure une compatibilité universelle."
  //   },
  //   {
  //     question: "Comment fonctionne la réduction de bruit ?",
  //     answer:
  //       "La réduction de bruit active utilise des microphones externes pour analyser les bruits environnants et génère des ondes sonores inverses pour les annuler. Cette technologie adaptative s'ajuste automatiquement à votre environnement."
  //   },
  //   {
  //     question: "Quelle est la politique de retour ?",
  //     answer:
  //       "Nous offrons 30 jours de satisfaction garantie. Si vous n'êtes pas entièrement satisfait, vous pouvez retourner votre produit pour un remboursement complet, sans frais supplémentaires."
  //   },
  //   {
  //     question: "Les écouteurs sont-ils étanches ?",
  //     answer:
  //       "Les SoundWave Pro disposent d'une certification IPX6, ce qui signifie qu'ils résistent aux éclaboussures et à la transpiration. Ils sont parfaits pour le sport et l'utilisation quotidienne, mais ne sont pas conçus pour une immersion complète."
  //   },
  //   {
  //     question: "Comment puis-je les commander ?",
  //     answer:
  //       "Cliquez simplement sur le bouton 'Demander maintenant' sur cette page. Vous serez dirigé vers un formulaire de commande sécurisé où vous pourrez finaliser votre achat en quelques minutes."
  //   }
  // ];

  let faqs = [
    {
      question: "Is the device suitable for all fabric types?",
      answer:
        "Yes, the device is designed to be gentle and safe on delicate fabrics such as wool, cotton, and silk."
    },
    {
      question: "How long does it take to fully charge the device?",
      answer:
        "About 2 to 3 hours to get a full charge sufficient for multiple uses."
    },
    {
      question: "Is there a warranty on the product?",
      answer:
        "Yes, we offer a one-month warranty against manufacturing defects."
    },
    {
      question: "Can I return or exchange the product?",
      answer:
        "Of course, you can exchange or return it within 5 days of receipt if there is a manufacturing defect."
    },
    {
      question: "Can I pay upon receipt?",
      answer:
        "Yes, we offer a cash on delivery service for safe and fast shopping."
    }
  ];

  const translatedFaqs = [
    {
      question: "هل الجهاز مناسب لجميع أنواع الأقمشة؟",
      answer:
        "نعم، تم تصميم الجهاز ليكون لطيفًا وآمنًا على الأقمشة الحساسة مثل الصوف والقطن والحرير."
    },
    {
      question: "كم من الوقت يستغرق شحن الجهاز بالكامل؟",
      answer:
        "حوالي ساعتين إلى ثلاث ساعات للحصول على شحن كامل يكفي للاستخدامات المتعددة."
    },
    {
      question: "هل هناك ضمان على المنتج؟",
      answer: "نعم، نقدم ضمانًا لمدة شهر واحد ضد عيوب التصنيع."
    },
    {
      question: "هل يمكنني إرجاع أو استبدال المنتج؟",
      answer:
        "بالطبع، يمكنك استبداله أو إرجاعه خلال 5 أيام من الاستلام في حال وجود عيب في التصنيع."
    },
    {
      question: "هل يمكنني الدفع عند الاستلام؟",
      answer: "نعم، نوفر خدمة الدفع عند الاستلام لتسوق آمن وسريع."
    }
  ];

  if (language === "ar") {
    faqs = translatedFaqs;
  }

  return (
    <section id="faq" className="py-20 relative">
      <div className="spot-2" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {language === "ar" ? (
              <span className="text-primary"> {t("Questions")}</span>
            ) : (
              <div>
                <span> Frequently Asked </span>
                <span className="text-primary">{t("Questions")}</span>
              </div>
            )}
            {/* <span className="text-primary">{t("Questions")}</span> */}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("Everything you need to know, in one place")}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="glass rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
