import React, {Component} from 'react';
import NumBlock from './NumBlock/NumBlock';

class Game extends Component {

    state = {
        board: []
    }

    initializeBoard = () => {
        let numbers = [0,2,3,4,5,6,7,8,9];
        let newBoard = [];
        for(let i = 0; i < 9; i++){
            let selected = Math.floor( Math.random() * numbers.length );
            newBoard[i] = numbers[selected];
            numbers.splice(selected, 1);
        }
        this.setState({
            board: [...newBoard]
        });
    }

    swapWithBlank = (number) => {
        console.log(number);
    }

    render(){

        let blocks = this.state.board.map((c)=> <NumBlock swap={this.swapWithBlank} number={c} key={c}/>);

        return(
            <div>
                <h1>Testing Game Component!</h1>
                <button onClick={this.initializeBoard}>Generate Board!</button>
                <div className="gameDiv">
                    {blocks}
                </div>
            </div>
        );
    };

}

export default Game;
