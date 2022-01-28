import React, { Component } from 'react';
import './Game.css'
// class Game extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             score: 0,
//             gameOver: false,
//         }
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Your Score Is: {this.state.score}</h1>
//             </div>
//         )
//     }
// }
// export default Game;


class Clicker extends Component {
  constructor(props){
    super(props);
    this.state = {num:1}
    this.genRandom = this.genRandom.bind(this);
  }
  genRandom(){
      let rand = Math.floor(Math.random() * 10) + 1
      this.setState({num: rand});
  }
  render(){
    let title ;
        if(this.state.num === 7){
            title = <p className='winner'>You got it Congrats!</p>
        } else {
            title = <p className='loser'>Try again!</p>
        }
      return(
          <div>
              <h1>Number is: {this.state.num}</h1>
              <button onClick={this.genRandom}>Random Number</button>
              <p>{title}</p>

          </div>
      )
  }

}
export default Clicker;