import React, {useContext, useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../css/index.scss'
import '../css/gamePage.scss'
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";

import {Link} from 'react-router-dom'
import {get} from "mobx";
import {Breadcrumbs, Stack} from "@mui/material";
import {Context} from "../index";
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Grid from "@mui/material/Grid";
import Carousel from "nuka-carousel";
import Arrow from "../img/Icon ionic-ios-arrow-back.svg";
import MyLink from "../utils/const_api_link"
import {Loader} from "../components/Loader";

const OneGame = observer(() => {
    //const[game, setGame] = useState({})
    const {category} = useContext(Context)
    const {game} = useContext(Context)

    const {id} = useParams()
    useEffect(() =>{

        fetch( MyLink.API_URL_GET_ALL_CATEGORI, {
            method: 'GET'
        }).then( data => data.json())
            .then( data => {
                category.setCategories(data)
            }).catch( (error) =>{
            console.log(error)
            alert(error)
        });
        let url = MyLink.API_URL_GET_GAME_BY_ID + '/' + id

        fetch( url, {
            method: 'GET'
        }).then( data => data.json())
            .then( data => {
                game.setOnegame(data)
            }).catch( (error) =>{
            console.log(error)
            alert(error)
        });




    },[])

    const [isLoading, setLoading] = useState(true);


    useEffect(()=>{
        setTimeout(()=>{
            setImg(game.onegame.mas_big_picture.split('\n'))


            },300
        )

    },[game.onegame])
    useEffect(() =>{

        console.log("Сработал тут")

        fetch( MyLink.API_URL_GET_ALL_CATEGORI, {
            method: 'GET'
        }).then( data => data.json())
            .then( data => {
                category.setCategories(data)
            }).catch( (error) =>{
            console.log(error)
            alert(error)
        });

        setTimeout(() => {},400)
        let url = MyLink.API_URL_GET_GAME_BY_ID + '/' + id

        fetch( url, {
            method: 'GET'
        }).then( data => data.json())
            .then( data => {
                game.setOnegame(data)
            }).catch( (error) =>{
            console.log(error)
            alert(error)
        });
    },[id])


    const catId = game.cat_id


    let rule_link = "" + game.onegame.rool_link


    const [img, setImg] = useState([])

    console.log(img)

    return(

        <div>
            <Header/>
            <div className="Container">
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} className="breadcrumbs" aria-label="breadcrumb">
                    <Link className="breadcrumbsLink" to="/">Игры</Link>

                    <div className="breadcrumbsName">{game.onegame.game_name}</div>
                </Breadcrumbs>
                <Grid container spacing={0} className="Container-game">
                    <Grid item xs={9} className="Container-game-name">
                        <div className="container-game-name-ver">
                            <div className="game-name"> {game.onegame.game_name}</div>
                            <div className="game-little-description">{game.onegame.little_descrintion}</div>
                        </div>
                    </Grid>
                    <Grid item xs={2.5} className="Container-game-params">

                        <Grid   item xs={15} spacing={15} className="Container-con-game-params">
                            <div className="game-age-rating">{game.onegame.age_raiting}+</div>
                            <GroupsIcon className="game-params-icon"/><div className="game-player-number">{game.onegame.players_number_min}-{game.onegame.players_number_max}</div>
                            <AccessTimeIcon className="game-params-icon"/><div className="game-time">{game.onegame.game_time_min}-{game.onegame.game_time_max}</div>
                        </Grid>
                    </Grid>
                    <Grid item xs={9} className="Container-game-descriptions">
                        <div className="game-img-container">
                            <Carousel
                                renderCenterLeftControls={({ previousSlide }) => (
                                    <img onClick={previousSlide} className="left-arrow-container" src={Arrow} ></img>
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    <img onClick={nextSlide} className="right-arrow-container" src={Arrow} ></img>
                                )}
                                renderBottomCenterControls={({ currentSlide }) => (
                                    img.map((image, index) => index === currentSlide ? <div className="paging active"></div> : <div  className="paging"></div>)
                                )}
                            >

                                {img.map(image => <div className="game-img-container-2"><img className="fit" src={image}/></div>)}

                            </Carousel>
                        </div>
                        <div className="game-des-container"><div className="game-des">Описание</div><div className="game-description">{game.onegame.descrintion}</div></div>
                    </Grid>
                    <Grid item xs={2.5} className="Container-game-price">
                        <div className="game-id">Код товара:{game.onegame.game_id}</div>
                        <div className="game-price-container"><div className="game-price">{game.onegame.price}</div><div className="game-rub">руб.</div></div>
                        <div className="game-dropbus-button">В корзину</div>
                        <div className="game-delivery">Самовывоз из 1 магазина от 7 дней, бесплатно<br/>Самовывоз из 51 пункта выдачи, 2 - 7 дней, от 165 ₽ <br/>Курьерская доставка, от 7 дней, от 343 ₽<br/> Почта России, от 15 дней, от 292 ₽</div>

                    </Grid>
                    {
                        rule_link === "" ? <div></div> :
                            <div className="Container-game-rule">
                                <a className="game-rule" href={rule_link}>Правила игры {game.onegame.game_name}</a>
                            </div>


                    }
                </Grid>

                <Footer/>
            </div>
        </div>
    )

})

export default OneGame