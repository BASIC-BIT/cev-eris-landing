import React from 'react'
import './app.scss'
import StarsBackground from "./components/StarsBackground";
import {TranslationService} from "./services/translations/translation.service";
import Page from "./components/Page";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
    async componentDidMount() {
        await TranslationService.initTranslations();
    }

    render() {
        return (
            <BrowserRouter>
                <StarsBackground/>
                <Page/>
            </BrowserRouter>
        );
    }
}

export default App
