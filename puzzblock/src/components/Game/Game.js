import React, {Component} from 'react';
import NumBlock from './NumBlock/NumBlock';

class Game extends Component {

    state = {
        board: [],
        blankIndex: 0
    }

    initializeBoard = () => {
        let numbers = [0,2,3,4,5,6,7,8,9];
        let newBoard = [];
        let blankIndex = 0;
        for(let i = 0; i < 9; i++){
            let selected = Math.floor( Math.random() * numbers.length );
            if(numbers[selected] == 0){
                blankIndex = i
            }
            newBoard[i] = numbers[selected];
            numbers.splice(selected, 1);
        }
        this.setState({
            board: [...newBoard],
            blankIndex: blankIndex
        });
    }

    swapWithBlank = (number, index) => {
        if(index == this.state.blankIndex - 1 || index == this.state.blankIndex + 1 || index == this.state.blankIndex + 3 || index == this.state.blankIndex -3){
            let tempState = {...this.state};
            [tempState.board[index], tempState.board[this.state.blankIndex]] = [tempState.board[this.state.blankIndex], tempState.board[index]];
            tempState.blankIndex = index;
            this.setState({
                ...tempState
            })
        }
    }

    render(){

        let blocks = this.state.board.map((c, i)=> <NumBlock swap={this.swapWithBlank} number={c} index={i} key={c}/>);

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
