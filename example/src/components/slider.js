import React, { Component } from 'react';

class Slider extends Component {
    constructor(props){
        super(props);
        this.state = {
            ow: 0, //offSetWidth
            sw: 0, //scrollWidth
            dev: 0 //deviation
        };
        this.gw = React.createRef(); // Outer Wrapper
        this.ew = React.createRef(); // Target Wrapper
    }

    componentDidMount() {
        let ew = this.ew.current;
        let gw = this.gw.current;
        let ow = gw.offsetWidth;
        let sw = gw.scrollWidth;
        this.setState({ow: ow, sw: sw});
        window.addEventListener('resize', this.resizeListener);
        ew.addEventListener('resize', this.resizeListener);
        this.setTargetElementStyles();
    }
    
    setTargetElementStyles = () => {
        this.ew.current.style.transition = `all ${this.props.dur}s ease-in-out`;
    };
    
    resizeListener = () => {
        let gw = this.gw.current;
        let ew = this.ew.current;
        this.setState({ow: gw.offsetWidth, sw: gw.scrollWidth, dev: 0});
        ew.style.transform = `translateX(0px)`;
    };

    updateStats = () => {
        let gw = this.gw.current;
        this.setState({ow: gw.offsetWidth, sw: gw.scrollWidth});
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }
    
    leftClickHandler = () => {
        let { def } = this.props;
        let {ow, sw, dev} = this.state;
        let ew = this.ew.current;
        if((-1 * dev) < (sw - ow) && (-1 * (dev-def)) < (sw - ow)) {
            dev -= def;
            this.setState({dev: dev});
            ew.style.transform = `translateX(${dev}px)`;
        } else {
            dev -= (sw - ow + dev);
            this.setState({dev: dev});
            ew.style.transform = `translateX(${ow - sw}px)`;
        }
    };
    
    rightClickHandler = () => {
        let { def } = this.props;
        let {dev} = this.state;
        let ew = this.ew.current;
        if( (dev < 0) && (dev + def) < 0) {
            dev += def;
            this.setState({dev: dev});
            ew.style.transform = `translateX(${dev}px)`;
        } else {
            dev += (-1 * dev);
            this.setState({dev: dev});
            ew.style.transform = `translateX(${dev}px)`;
        }
    };
    
    render() {
        let Target = this.props.targetComponent;
        return(
            <div className={'sliderWrapper'} style={{overflow: 'hidden'}} ref={this.gw}>
                <Target
                    wrapperRef={this.ew} 
                    goLeft={this.leftClickHandler} 
                    goRight={this.rightClickHandler}
                    updateStats={this.updateStats}
                />
            </div>
        );
    }
}

export default Slider;
