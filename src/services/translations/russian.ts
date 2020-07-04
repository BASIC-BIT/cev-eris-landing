import {Translations, TranslationKey} from "./translation.service";
import defaultTranslations from "./default";

export default function get(): Translations {
    return {
        ...defaultTranslations(),
        [TranslationKey.CEV_ERIS]: "CEV Eris",
        [TranslationKey.SERVER_DESCRIPTION]: "CEV Eris - частное исследовательское судно, которое принадлежит только капитану. Функции СБ на нем выполняет частная военная корпорация - Ironhammer Security. Целью корабля является исследование мертвого космоса и дереликтов. На корабле пять этажей, и сам он разделен на четыре трехмерные секции, которые соединены только центральным коридором.",
        [TranslationKey.RULES_LINK]: "правила",
        [TranslationKey.ABOUT_LINK]: "Около",
        [TranslationKey.TAGLINE]: "Смерть наш пункт назначения",
        [TranslationKey.JOIN_EN]: "Сервера EN",
        [TranslationKey.JOIN_RU]: "Сервера RU",
        [TranslationKey.WIKI_LINK]: "Вики",
        [TranslationKey.GITHUB_LINK]: "Билд",
        [TranslationKey.FORUM_LINK]: "Форум",
        [TranslationKey.BYOND_DESCRIPTION]: "CEV Eris является частью сообщества Space Station 13, работающего на платформе BYOND.",
        [TranslationKey.HOME_LINK]: "Домой",
    }
}