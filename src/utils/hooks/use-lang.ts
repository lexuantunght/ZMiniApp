import { useTranslation } from 'react-i18next';

const useLang = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = async (lang: string) => {
		await i18n.changeLanguage(lang);
	};

	return { t, changeLanguage, language: i18n.language, languages: i18n.languages };
};

export default useLang;
