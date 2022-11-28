import { createContext, useContext, useState, useEffect } from "react";
import initializeI18n from "../i18n";

const DEFAULT_LANGUAGE = "en-US";

const LanguageContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    initializeI18n(language);
  }, []);

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
