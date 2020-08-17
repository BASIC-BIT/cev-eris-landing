import React from 'react';

class StarsBackground extends React.Component {
    shouldComponentUpdate(): boolean {
        return false;
    }

    render() {
        return (
            <div className="background">
                {/*<div className="rellax stars-background-image"/>*/}
                {/*<div className="rellax stars-midground-image"/>*/}
                {/*<div className="rellax stars-foreground-image"/>*/}
            </div>
        );
    }
}

export default StarsBackground
