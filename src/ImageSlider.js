// your ImageSlider code here!
import React from "react";



export default class ImageSlide extends React.Component {
    constructor(){
        super()
        this.state = {
          currentSliderIndex: 0
        }
      }
    render(){
        return (
            <h1>I am on slide {this.state.currentSliderIndex}</h1>
        )
    }
}