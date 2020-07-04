import React, {ReactPropTypes} from 'react';

class StarsBackground extends React.Component {
    constructor(props: ReactPropTypes) {
        super(props);
    }

    shouldComponentUpdate(): boolean {
        return false;
    }

    render() {
        return (
            <div className="stars-background">
                <div className="rellax stars-background-image"/>
                <div className="rellax stars-midground-image"/>
                <div className="rellax stars-foreground-image"/>
            </div>
        );
    }
}

export default StarsBackground
