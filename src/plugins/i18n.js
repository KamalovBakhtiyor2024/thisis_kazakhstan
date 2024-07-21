import Vue from "vue";
import VueI18n from "vue-i18n";

// Импорт языковых файлов
import ruLang from "../langs/ru.json";
import kzLang from "../langs/kz.json";

Vue.use(VueI18n);

var language;

// Функция для определения системного языка
function setLanguageDefault() {
  const systemLanguage = window.navigator.language.split("-")[0];
  if (systemLanguage === "ru" || systemLanguage === "kz") {
    language = systemLanguage;
  } else language = "en";
}

setLanguageDefault();

export default new VueI18n({
  locale: language,
  messages: {
    ru: ruLang,
    kz: kzLang,
  },
});
