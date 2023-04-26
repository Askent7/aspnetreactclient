import React from "react";
import '../css/index.scss'
import {useNavigate} from "react-router-dom";



const ListContainer = ({game}) =>{
    let nav = useNavigate();
    return(

        <div className="list-container" onClick={() => nav('/OneGame/' + game.game_id)}>
            <div className="list-container-img-shadow"><img className="list-container-img" src={game.little_picture}></img></div>
            <div className="list-container-name">{game.game_name}</div>
            <div className="list-container-sub-name">{game.little_descrintion}</div>
            <div className="list-container-price">{game.price}р</div>
        </div>
    )
}

export default ListContainer;