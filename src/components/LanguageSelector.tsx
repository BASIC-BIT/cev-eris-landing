import React, {ReactPropTypes} from 'react';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import {Language, TranslationKey, TranslationService} from "../services/translations/translation.service";

interface LanguageSelectorState {
    active: Language,
}

class LanguageSelector extends React.Component<{}, LanguageSelectorState> {
    constructor(props: ReactPropTypes) {
        super(props);
        this.state = {
            active: TranslationService.getLanguage(),
        };
        TranslationService.translationUpdate$.subscribe(() => {
            this.setState({
                active: TranslationService.getLanguage(),
            });
        });
    }

    getFlagClasses(language: Language): string {
        return `flag${ this.state.active === language ? ' active' : ''}`;
    }

    onFlagClick(language: Language): void {
        TranslationService.setLanguage(language);
    }

    render() {
        return (
            <div className="float-right">
                <Flags.US title={TranslationService.get(TranslationKey.LANGUAGE_SELECT_ENGLISH)} onClick={() => this.onFlagClick(Language.ENGLISH)} className={this.getFlagClasses(Language.ENGLISH)}/>
                <Flags.RU title={TranslationService.get(TranslationKey.LANGUAGE_SELECT_RUSSIAN)} onClick={() => this.onFlagClick(Language.RUSSIAN)} className={this.getFlagClasses(Language.RUSSIAN)}/>
            </div>
        );
    }


}

export default LanguageSelector
