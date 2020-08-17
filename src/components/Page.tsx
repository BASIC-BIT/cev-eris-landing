import React from 'react'
import {Route} from "react-router-dom";
import {TranslationService} from "../services/translations/translation.service";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./NavBar";

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
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                            </React.Suspense>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page
