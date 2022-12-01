import { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const DEFAULT_LANGUAGE = "en-US";

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageConsumer = LanguageContext.Consumer;

export const useLanguage = () => useContext(LanguageContext);
