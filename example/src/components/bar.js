import React, { Component } from 'react';

class Bar extends Component {
    render() {
        let {wrapperRef, goLeft, goRight} = this.props;
        return(
            <React.Fragment>
                <div ref={wrapperRef} id={'barWrapper'}/>
                <button onClick={goLeft}>Go Left</button>
                <button onClick={goRight}>Go Right</button>
            </React.Fragment>
        );
    }
}

export default Bar;