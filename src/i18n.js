import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TestimonialsSection from "./components/TestimonialsSection";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next"
    }
  },
  ar: {
    translation: {
      "Welcome to React": "مرحبا بكم في React و react-i18next",
      "SoundWave Pro Headphones": "سماعات ساوند ويف برو",
      "Smart Lint Remover": "مزيل الوبر الذكي",
      Pro: "برو",
      "Discover exceptional performance with our premium Smart Lint Remover. Cutting-edge technology, sleek design, and ultimate comfort for an unmatched fabric care experience.":
        "اكتشف أداءً استثنائيًا مع مزيل الوبر الذكي عالي الجودة. تكنولوجيا متقدمة، تصميم أنيق، وراحة قصوى لتجربة عناية بالأقمشة لا مثيل لها.",
      Quantity: "الكمية",
      "Order Now": "اطلب الآن",
      "Product Hero": "صفحة المنتج",
      Home: "الرئيسية",
      Product: "المنتج",
      Reviews: "المراجعات",
      FAQ: "الاسئلة الشائعة",
      Contact: "تواصل معنا",
      "Features": "خصائص",
      "Our Product": "منتجنا",
      "Meet the Smart Lint Remover — premium quality for flawless fabric care":
        "تعرف على مزيل الوبر الذكي - جودة فائقة للعناية بالأقمشة دون أي عيوب",

      "Exclusive Features": "خصائص خاصة",
      "Every detail has been carefully crafted to offer an exceptional fabric care experience.":
        "كل التفاصيل تم تصميمها بعناية لتقديم تجربة عناية بالأقمشة استثناءية.",

      "Smart Lint Remover Pro": "مزيل الوبر الذكي برو",
      "exceptional performance": "اداء استثناءي",

      "🔋 Rechargeable , no batteries needed, just plug and use":
        "🔋 قابل لإعادة الشحن، لا يحتاج إلى بطاريات، فقط اشبكه واستخدمه",
      "🧼 Easy to clean , removable tank cleans in seconds":
        "🧼 سهل التنظيف، خزان قابل للإزالة يُنظف خلال ثوانٍ",
      "👕 Gentle on fabrics , removes lint without damage":
        "👕 لطيف على الأقمشة، يزيل الوبر دون إلحاق ضرر",
      "🔘 One-button operation , press to turn on/off effortlessly":
        "🔘 تشغيل بزر واحد، اضغط لتشغيل/إيقاف بسهولة",
      "⏱️ Up to 30 hours of continuous use on a single charge":
        "⏱️ حتى 30 ساعة من الاستخدام المتواصل بشحنة واحدة",
      "✈️ Travel-friendly , compact and lightweight design":
        "✈️ مناسب للسفر، تصميم صغير وخفيف الوزن",
      "✨ Sleek and modern look that fits any space":
        "✨ مظهر أنيق وعصري يتناسب مع أي مكان",
      "🛡️ 2-year warranty included for peace of mind":
        "🛡️ ضمان لمدة سنتين لضمان راحة البال",
      "Long-lasting Performance": "أداء طويل الأمد",
      "Designed for long-lasting performance and reliable fabric care.":
        "مُصمم لتوفير أداء يدوم طويلاً وعناية موثوقة بالأقمشة.",
      "Customer Testimonials": "مراجعات الزبائن",
      "Join thousands of happy customers worldwide":
        "انضم إلى آلاف العملاء السعداء في جميع أنحاء العالم",
      // souad: "سعاد",
      // comment:"المنتج أكثر من رائع! جعلني أعود لارتداء الملابس التي نسيتُها بسبب الوبر 💖",
      // role: "من مراكش",

      // leila: "ليلى",
      // comment: "وصل في يومين فقط، والتوصيل كان مجانيًا! خدمة ممتازة 👏",
      // role: "من الدار البيضاء",

      // nadia: "نادية",
      // comment:
      //   "استخدمته على جاكيت قديم وبدا جديدًا مرة أخرى! أنصح به للجميع دون تردد ✅",
      // role: "من طنجة"

      "Découvrez une nouvelle dimension sonore avec nos écouteurs premium. Qualité, innovation et design pour une expérience audio exceptionnelle.":
        "اكتشف بُعدًا صوتيًا جديدًا مع مكبرات الصوت المتميزة. الجودة والابتكار والتصميم لتجربة صوتية استثنائية.",
      "© 2025 Smart Lint Remover Pro. All rights reserved.":
        "© 2025 Smart Lint Remover Pro. جميع الحقوق محفوظة.",
      "Privacy Policy": "سياسة الخصوصية",
      "Terms of Use": "شروط الاستخدام",
      "Contact Us": "اتصل بنا",
      "Legal Notices": "اشعارات قانونية",
      "Confidentiality Policy": "سياسة الخصوصية",
      "Delivery 24h": "توصيل 24 ساعة",
      "Cash on Delivery": "الدفع عند الاستلام",
      "1 month garantee": "ضمان لمدة شهر واحد",
      Username: "اسم الكامل",
      Email: "البريد الالكتروني",
      "Phone Number": "رقم الهاتف",
      "send order": "ارسال الطلب",
      City: "المدينة",
      Address: "العنوان",
      "order confirmation": "تاكيد الطلب",
      "for free": "بالمجان",
      "Quick Links": "روابط سريعة",
      "Contact":"تواصل معنا",
      "Questions":"الاسئلة الشائعة",
      "Everything you need to know, in one place":"كل ما تحتاجه في مكان واحد",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
