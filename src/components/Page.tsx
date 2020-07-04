import React from 'react'
import {Router} from "@reach/router";
import {TranslationService} from "../services/translations/translation.service";
import {Routes} from "react-static";
import Home from "components/pages/Home";
import About from "components/pages/About";
import NavBar from "components/NavBar";

class Page extends React.Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        TranslationService.translationUpdate$.subscribe(() => {
            this.forceUpdate();
        });
    }

    render() {
        return (
            <div className="page">
                <NavBar/>

                <div className="center-outer-container">
                    <div className="center-container">
                        <div className="center-container-inner">
                            <React.Suspense fallback={() => <div/>}>
                                <Router component={React.Fragment}>
                                    <Routes default render={() => <Home/>}/>
                                    <Routes path="/about" render={() => <About/>}/>
                                </Router>
                            </React.Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page
