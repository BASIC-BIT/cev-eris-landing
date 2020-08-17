import i18next from 'i18next';
import english from './english';
import russian from './russian';
import {BehaviorSubject} from "rxjs";
import {filter} from "rxjs/operators";

export enum TranslationKey {
    CEV_ERIS = "CEV_ERIS",
    TAGLINE = "TAGLINE",
    JOIN_EN = "JOIN_EN",
    JOIN_RU = "JOIN_RU",
    LANGUAGE_SELECT_ENGLISH = "LANGUAGE_SELECT_ENGLISH",
    LANGUAGE_SELECT_RUSSIAN = "LANGUAGE_SELECT_RUSSIAN",
    ABOUT_LINK = "ABOUT_LINK",
    WIKI_LINK = "WIKI_LINK",
    GITHUB_LINK = "GITHUB_LINK",
    DISCORD_LINK = "DISCORD_LINK",
    RULES_LINK = "RULES_LINK",
    FORUM_LINK = "FORUM_LINK",
    SERVER_DESCRIPTION = "SERVER_DESCRIPTION",
    BYOND_DESCRIPTION = "BYOND_DESCRIPTION",
    HOME_LINK = "HOME_LINK",
}

export enum Language {
    ENGLISH = "en",
    RUSSIAN = "ru",
}

export type Translations = {
    [key in TranslationKey]?: string
}

const englishTranslations = english() as Translations;
const russianTranslations = russian() as Translations;

export class TranslationService {
    private static translationUpdateTopic = new BehaviorSubject<boolean>(false);
    public static translationUpdate$ = TranslationService.translationUpdateTopic.asObservable()
        .pipe(filter((update) => update));

    public static async initTranslations() {
        await i18next.init({
            lng: TranslationService.getDefaultLanguage(),
            debug: true,
            resources: {
                en: {
                    translation: englishTranslations,
                },
                ru: {
                    translation: russianTranslations,
                },
            }
        });

        TranslationService.translationUpdateTopic.next(true);
    }

    private static isSupportedLanguage(language: string) {
        return language === "en" || language === "ru";
    }

    private static getShortLanguageCode(languageString: string): string {
        return (languageString || "").slice(0, 2);
    }

    private static getDefaultLanguage(): string {
        const languagesList = window.navigator.languages.map(this.getShortLanguageCode);
        // @ts-ignore
        const singleLanguage = this.getShortLanguageCode(window.navigator.userLanguage || window.navigator.language);

        const finalLanguages = (languagesList && languagesList.length) ? languagesList : [singleLanguage];

        return finalLanguages.find(this.isSupportedLanguage) || 'en';
    }

    public static get(key: TranslationKey): string {
        return i18next.t(key.toString());
    }

    public static async setLanguage(language: Language): Promise<void> {
        const previousLanguage = i18next.language;
        await i18next.changeLanguage(language);

        if (previousLanguage !== i18next.language) {
            TranslationService.translationUpdateTopic.next(true);
        }
    }

    public static getLanguage(): Language {
        return i18next.language as Language;
    }
}