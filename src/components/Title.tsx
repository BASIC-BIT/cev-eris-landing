import React from "react";
import {TranslationKey, TranslationService} from "../services/translations/translation.service";

export class Title extends React.Component {
    render() {
        return (
            <div className="title-container">
                <div className="eris-title-logo"/>
                <div className="title-text-container">
                    <div className="title">
                        {TranslationService.get(TranslationKey.CEV_ERIS)}
                    </div>
                    <div className="subtitle">
                        {TranslationService.get(TranslationKey.TAGLINE)}
                    </div>
                </div>
            </div>
        );
    }
}