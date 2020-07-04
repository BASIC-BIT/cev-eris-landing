import { Translations, TranslationKey } from "./translation.service";

export default function get(): Translations {
    return {
        [TranslationKey.CEV_ERIS]: "CEV Eris",
        [TranslationKey.LANGUAGE_SELECT_ENGLISH]: "English",
        [TranslationKey.LANGUAGE_SELECT_RUSSIAN]: "русский",
        [TranslationKey.GITHUB_LINK]: "Github",
        [TranslationKey.DISCORD_LINK]: "Discord",
    }
}