import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from 'static/locales/en.lang.json';
import VI from 'static/locales/vi.lang.json';

export * from './translator';

export const loadLanguages = () => {
	const supportedLangs = ['en', 'vi'];
	const langMap = {};
	const locales = [EN, VI];
	for (let i = 0; i < supportedLangs.length; i++) {
		const lng = supportedLangs[i];
		langMap[lng] = { translation: locales[i].default };
	}

	i18n.use(initReactI18next).init({
		resources: langMap,
		lng: window.localStorage.getItem('language') || 'en',
		supportedLngs: supportedLangs,
		fallbackLng: supportedLangs,
		interpolation: {
			escapeValue: false,
		},
	});

	return i18n;
};

