import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
  images: props.images,
    currentImageIndex: 0,
    isCycleMode: false,
    canGoPrev: false,
    canGoNext: true
  };

  this.nextSlideHandler = this.nextSlideHandler.bind(this);
}

nextSlideHandler(e) {
  let newIndex = this.state.currentImageIndex;
if (e.currentTarget.dataset.direction ==="next") {
  if(newIndex < this.state.images.length - 1) {
      newIndex = this.state.currentImageIndex + 1;
      this.setState.canGoPrev = true;
    }

    if(newIndex === this.state.images.length - 1) {
      this.setState.canGoNext = false;
    }
} else{
  if(newIndex > 0) {
  newIndex = this.state.currentImageIndex - 1;
  this.setState.canGoNext = true;
}
if(newIndex === 0) {
  this.setState.canGoPrev = false;
}
}
this.setState({currentImageIndex: newIndex});
}








  render() {
    return (
      <div className="App">
      <div>
        <button disabled={ ! this.state.canGoPrev } data-direction="prev" onClick={this.nextSlideHandler.bind(this)}>prev</button>
        </div>
        <div>
<img src={this.state.images[this.state.currentImageIndex]} alt=""/>
        {this.state.currentImageIndex}
          </div>
        <div>
          <button disabled={ ! this.state.canGoNext } data-direction="next" onClick={this.nextSlideHandler.bind(this)}>next</button>
          </div>
        </div>
    );
  }
}

export default App;
