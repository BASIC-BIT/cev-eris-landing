import React from 'react'
import {Root} from 'react-static'
import './app.scss'
import StarsBackground from "components/StarsBackground";
import {TranslationService} from "./services/translations/translation.service";
import Page from "components/Page";

class App extends React.Component {
    // @ts-ignore
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await TranslationService.initTranslations();
    }

    render() {
        return (
            <Root>
                <StarsBackground/>
                <Page/>
            </Root>
        );
    }
}

export default App
