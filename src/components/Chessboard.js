import './Chessboard.css';
import Tile from './Tile';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8 '];

export default function Chessboard(){
    let board = [];
    let black = false;

    for(let j = horizontalAxis.length - 1; j >= 0; j--){
        for( let i = 0; i < verticalAxis.length; i++){
            board.push(<Tile color={black}> </Tile>);
        }
        black = !black;
    }
    return <div id="chessboard"> {board} </div>;
}