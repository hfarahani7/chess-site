import './Tile.css';

const Tile = (props) => {
    console.log(props.color);
    if(props = true){
        return <div className="tile.dark"> </div>;
    }
    return <div className="tile.light"> </div>;
};

export default Tile;