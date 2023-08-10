import i18n from 'i18next';

export class Lang {
	private static instance: Lang | null = null;
	static getInstance() {
		if (!this.instance) {
			this.instance = new Lang();
		}
		return this.instance;
	}

	trans(textKey: string) {
		return i18n.t(textKey);
	}

	getLanguages() {
		return i18n.languages;
	}

	getLanguage() {
		return i18n.language;
	}
}
