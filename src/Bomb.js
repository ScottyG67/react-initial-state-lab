// your Bomb code here!
import React from "react";
import index from './index.js'




export default class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
      }
      countdown = () => {
        // console.log(`before setState: ${this.state.secondsLeft}`)
    
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        })
    
        // console.log(`after setState: ${this.state.count}`)
        setTimeout(this.countdown,1000)
      }

    render(){
        return (
            <div onClick = {this.countdown}>
            {this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom"}
            </div>
        )
    }
}