import React, { Component } from 'react';

class Bar extends Component {
    render() {
        let {wrapperRef, goLeft, goRight, updateStats} = this.props;
        return(
            <React.Fragment>
                <div ref={wrapperRef} id={'barWrapper'}/>
                <button onClick={goLeft} onMouseEnter={updateStats}>Go Left</button>
                <button onClick={goRight} onMouseEnter={updateStats}>Go Right</button>
            </React.Fragment>
        );
    }
}

export default Bar;