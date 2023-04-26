import React, {useState} from "react";
import '../css/index.scss';

import Header from './Header';
import Footer from './Footer'
import ListContainer from "../components/listGameItem";

import Blob1 from "../img/Path1.svg";
import Blob2 from "../img/Path2.svg";
import Blob3 from "../img/Path3.svg";



import Arrow from "../img/Icon ionic-ios-arrow-back.svg";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../index";

import {get} from "mobx";
import {useNavigate, useParams} from "react-router-dom";
import MyLink from "../utils/const_api_link"
import {Loader} from "../components/Loader";



const FilterGame = observer(() =>  {
    const [right_arrow_container, setRight_arrow] = useState("vis right-arrow-container")
    const [left_arrow_container, setLeft_arrow] = useState("not_vis left-arrow-container")
    const [container, setContainer] = useState("container_normal Container-for-list")
    //const {id} = useParams()
    const {game} = useContext(Context)
    const params = useParams()

    useEffect(() => {
        ;
        console.log(params)

        setTimeout( () => {

            let url = MyLink.API_URL_GET_SEARCH_GAMES + '/' + params.cat_id + '/' + params.price_min + '/' + params.price_max + '/' + params.players
            fetch(url, {
                method: 'GET'
            }).then(data => data.json())
                .then(data => {
                    //console.log(data)
                    game.setGames(data)
                    game.setTotal(data.count)
                }).catch((error) => {
                console.log(error)
                alert(error)
            })
        }, 100)
        console.log(game.games)
    }, [params.cat_id, params.price_min, params.price_max, params.players])

    useEffect(() => {
        ;
        console.log(params)

        setTimeout( () => {

            let url = MyLink.API_URL_GET_SEARCH_GAMES + '/' + params.cat_id + '/' + params.price_min + '/' + params.price_max + '/' + params.players
            fetch(url, {
                method: 'GET'
            }).then(data => data.json())
                .then(data => {
                    //console.log(data)
                    game.setGames(data)
                    game.setTotal(data.count)
                }).catch((error) => {
                console.log(error)
                alert(error)
            })
        }, 100)
        console.log(game.games)
    }, [])




    let nav = useNavigate()





    //console.log(game.games);
    return (

        <div>
            <Header/>

            <div className="Banner">

                <img className="Banner-Blob" src={Blob1}></img>
                <img className="Banner-Blob2" src={Blob2}></img>
                <div className="Banner-Container">
                    <div onClick={() => {nav('/OneGame/37')}} className="Banner-Name">НЕМЕЗИДА</div>
                    <div onClick={() => {nav('/OneGame/37')}} className="Banner-Sub-Name">КАРНОМОРФЫ</div>
                    <div onClick={() => {nav('/OneGame/37')}} className="Banner-text">
                        Всё произошло из-за одной-единственной кошки. Должно быть, она пробралась на борт во время нашей встречи с научным кораблём "Адрастея". Забрав нужные нам образцы, мы совершили обратный гиперпрыжок, и все благополучно уснули. Все, кроме кошки. Даже девять жизней не могли её спасти.
                    </div>
                    <button  className="Banner-Button" >В корзину</button>
                </div>

                <div className="Banner-Glass"></div>
            </div>
            <div className="Container">
                <div className="Container-Headlines">
                    <div className="Container-Headlines-Name">Игры :)</div>
                    <div className="Container-UnderText"></div>
                    <img className="Container-Blob3" src={Blob3}></img>
                    <div className="Container-Container" id="News">

                        <div className={container}>
                            {game.games.map(game => <ListContainer key={game.game_id} game={game}/>)}
                        </div>


                    </div>

                </div>
                <Footer/>
            </div>




        </div>
    );
})

export default FilterGame;