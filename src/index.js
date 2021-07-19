import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import './index.css';
// import App from './App';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'bg'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: './assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('key_lang')}</h2>;
}

ReactDOM.render(<App />, document.getElementById('root'));
