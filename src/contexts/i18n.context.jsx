// i18n translation context
import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

const I18nContext = createContext();

export const useTranslationContext = () => useContext(I18nContext);

const TranslationContext = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("ar");
  i18n.changeLanguage(lang);
  return (
    <I18nContext.Provider value={[lang, setLang, t]}>
      {children}
    </I18nContext.Provider>
  );
};

export default TranslationContext;
