import { Translations, TranslationKey } from "./translation.service";
import defaultTranslations from "./default";

export default function get(): Translations {
    return {
        ...defaultTranslations(),
        [TranslationKey.JOIN_RU]: "Join RU",
        [TranslationKey.JOIN_EN]: "Join EN",
        [TranslationKey.TAGLINE]: "Death is our destination",
        [TranslationKey.ABOUT_LINK]: "About",
        [TranslationKey.RULES_LINK]: "Rules",
        [TranslationKey.WIKI_LINK]: "Wiki",
        [TranslationKey.FORUM_LINK]: "Forums",
        [TranslationKey.SERVER_DESCRIPTION]: "CEV Eris - private research vessel, that belongs to captain himself. Here, the function of Security is performed by a private military corporation - Ironhammer Security. The ship itself has a mission to explore Null Sector and derelicts in it. It has five levels(floors) and is divided into four three-dimensional sections, that are connected only by a main corridor.",
        [TranslationKey.BYOND_DESCRIPTION]: "CEV Eris is part of the Space Station 13 community, run on the BYOND platform.",
        [TranslationKey.HOME_LINK]: "Home",
    }
}