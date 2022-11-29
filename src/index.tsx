import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

import './index.css';
// import './polyfill';
import App from './App';

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
//   .use(HttpApi)
//   .init({
//     supportedLngs: ['en'],
//     fallbackLng: 'en',
//     detection: {
//       order: ['htmlTag', 'cookie', 'localStorage', 'htmlTag', 'path'],
//       caches: ['cookie']
//     }
//     // backend: {
//     //   loadPath: '/assets/language/{{lng}}/translations.json'
//     // }
//   });

const loadingMarkup = (
  <div className="loading-markup">
    <h2> Loading.. </h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
