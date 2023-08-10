import { Resource } from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const preloadLanguages = async (onPercentage?: (value: number) => void) => {
	const promises: Promise<any>[] = [];
	const supportedLangs = ['en', 'vi'] as const;
	const langMap: Resource = {};
	for (let i = 0; i < supportedLangs.length; i++) {
		const lng = supportedLangs[i];
		promises.push(import(`../static/locales/${lng}.lang.json`));
	}
	const locales = await Promise.all(promises);
	for (let i = 0; i < supportedLangs.length; i++) {
		const lng = supportedLangs[i];
		langMap[lng] = { translation: locales[i].default };
	}
	onPercentage?.(1);

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
