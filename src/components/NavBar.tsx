import React from 'react'
import {Link} from "@reach/router";
import LanguageSelector from "components/LanguageSelector";
import {TranslationKey, TranslationService} from "../services/translations/translation.service";

interface NavBarState {
    toggled: boolean;
}

class NavBar extends React.Component<{}, NavBarState> {
    constructor(props: any) {
        super(props);
        this.state = {
            toggled: false
        }
    }

    render() {
        return (
            <nav className={!this.state.toggled ? "hidden" : ""}>
                <div className="hamburger" onClick={() => this.toggleLinks()} />
                <Link to="/" className="nav-symbol" />
                <Link to="/" className="nav-link home-link" onClick={() => this.toggleLinks()}>{TranslationService.get(TranslationKey.HOME_LINK)}</Link>
                <Link className="nav-link" to="/about" onClick={() => this.toggleLinks()}>{TranslationService.get(TranslationKey.ABOUT_LINK)}</Link>
                <a className="nav-link" href="https://wiki.cev-eris.com/Main_Page">{TranslationService.get(TranslationKey.WIKI_LINK)}</a>
                <a className="nav-link" href="https://github.com/discordia-space/CEV-Eris">{TranslationService.get(TranslationKey.GITHUB_LINK)}</a>
                <a className="nav-link" href="https://discord.gg/hqjsfF9">{TranslationService.get(TranslationKey.DISCORD_LINK)}</a>
                <a className="nav-link" href="http://wiki.cev-eris.com/index.php/Rules_ErisEn">{TranslationService.get(TranslationKey.RULES_LINK)}</a>
                <LanguageSelector/>
            </nav>
        );
    }

    toggleLinks() {
        this.setState({ toggled: !this.state.toggled });
    }
}

export default NavBar
