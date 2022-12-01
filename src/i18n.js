import i18n from "i18next";
import { format } from "date-fns";
import { initReactI18next } from "react-i18next";
import enUS from "./languages/en-US.json";
import deDE from "./languages/de-DE.json";

const resources = {
  "en-US": {
    translation: enUS,
  },
  "de-DE": {
    translation: deDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
    // eslint-disable-next-line camelcase
    format(value, format_type) {
      if (value instanceof Date) return format(value, format_type);
      return value;
    },
  },
});

export default i18n;
