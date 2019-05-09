##react-button-slider

###A button operated slider for React based on CSS3 transform property.

A working example can be found here: https://react-button-slider.herokuapp.com

###Follow these steps to implement the slider and required buttons. 

###Step-0: 

###Installation

```
# using yarn
$ yarn add react-button-slider

# using npm
$ npm install react-button-slider
```

###Step-1: 

Import the Slider component.

``` 
import Slider from 'react-button-slider';
```

###Step-2: 

(i) Pass the target component to Slider component as a prop under the name targetComponent.

(ii) Pass def and dur props to the Slider component.

(iii) The prop def will set no. of pixels moved in one button press.

(iv) The prop dur will set the duration in seconds in which one transition will complete.

(v) All def, dur, targetComponent are mandatory props and cannot be neglected.


```
import React from 'react';
import Slider from 'react-button-slider';
import Bar from './components/bar';
import './App.css';

function App() {
  return (
    <div className='App'>
        <Slider 
          targetComponent={Bar}
          def={330}
          dur={1.5}
        />
    </div>
  );
}

export default App;
```

###Step-3: 

(i) Extract the props wrapperRef, goLeft and goRight from this.props(or you can avoid destructuring if you want) inside the target component. 

(ii) Now pass the wrapperRef as a ref to the html(don't use overflow hidden for this element as its already done in the module) element that is going to slide. 

(iii) Finally add onClick listeners to any two elements(usually buttons) and then pass functions goLeft and goRight as event handlers to them.

```
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
```
