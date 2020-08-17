import React from 'react'
import {TranslationKey, TranslationService} from "../../services/translations/translation.service";
import {Title} from "../Title";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Title/>
                <div className="join-container-outer">
                    <div className="join-container">
                        <a href="byond://cev-eris.com:2522" className="server english-server">
                            {TranslationService.get(TranslationKey.JOIN_EN)}
                        </a>
                        <a href="byond://cev-eris.com:2511" className="server russian-server">
                            {TranslationService.get(TranslationKey.JOIN_RU)}
                        </a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home
