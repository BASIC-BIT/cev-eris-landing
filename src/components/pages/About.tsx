import React from 'react'
import {TranslationKey, TranslationService} from "../../services/translations/translation.service";
import {Title} from "components/Title";

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Title/>
                <div className="about-container">
                    <div className="about-part">
                        {TranslationService.get(TranslationKey.SERVER_DESCRIPTION)}
                    </div>
                    <div className="about-part">
                        {TranslationService.get(TranslationKey.BYOND_DESCRIPTION)}
                        <a href="https://www.byond.com" className="byond-button" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About
