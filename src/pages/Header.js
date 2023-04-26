import React, {useState} from "react";
import '../css/Header.scss';
import '../css/AnimationHeader.scss'
import AddCart from '../img/add-shopping-cart.svg'
import Logo from '../img/BoardGameBar.svg';
import DownArrow from '../img/Icon material-keyboard-arrow-down.svg';
import Basket from '../img/basket-outline.svg';
import Profile from '../img/profile_2.svg';
import Cancel from '../img/cancel.svg';
import Search from '../img/Icon ionic-ios-search.svg'
import {Link, useNavigate, useParams} from 'react-router-dom';
import Arrow from "../img/Icon ionic-ios-arrow-back.svg";
import {CSSTransition} from 'react-transition-group';
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import { MAIN_ROUTE, FILTER_ROUTE} from "../utils/const";
import MyLink from "../utils/const_api_link"
import MonoBear from "../img/monobear-eating.gif"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = observer(() =>{

    const {game} = useContext(Context)

    useEffect(() => {
        fetch( MyLink.API_URL_GET_ALL_CATEGORI, {
            method: 'GET'
        }).then( data => data.json())
            .then( data => {

                game.setCategories(data)
            }).catch( (error) =>{
            console.log(error)
            alert(error)
        });
    }, [])


    var searchVal;
    var DropCSS_Search = "fade-out dropdown-search";

    function NavSearch(props){
        const[openS, setOpenS] = useState(false);
        const [value, setValue] = useState('')
        const {id} = useParams();
        var flag = new Boolean(false);

        useEffect(()=> {
            searchVal = value


            if (value === "" && flag) {
                setOpenS(!openS);
                flag = false;
                DropCSS_Search  = "fade-out dropdown-search"
            }
            else if(flag) {
                setOpenS(!openS);
                setOpenS(flag);
                DropCSS_Search = "fade-in dropdown-search"

            }

        },[value])
        useEffect(()=>{
            setValue('')
        },[id])

        return(
            <div>
                <img src={Search} className="Search-Icon"/>
                <div className="search-cont" >

                    <CSSTransition in={openS}
                                   timeout={200}
                                   classNames="DropAnim"
                                   onEntering={() => setOpenS(openS)}
                                   onExited={() => setOpenS(openS)}
                    >{props.children}</CSSTransition>
                    <div><input onChange={e => setValue(e.target.value)} type="search" id="site-search" placeholder="Поиск..."></input></div>


                </div>
            </div>
        );

    };

    const DropdownItemSearch = ({game}) =>{

        const nav = useNavigate()

        {

            return (
                <div onClick={() => nav('/OneGame/' + game.game_id)} className="search-nav">
                    <img src={game.little_picture} className="menu-search-img"></img>
                    <div className="menu-search-name">{game.game_name}</div>
                    <div className="menu-search-subname">{game.little_descrintion}</div>
                    <img src={AddCart} className="AddCard"/>
                    <div className="menu-search-price">{game.price}</div>

                    <div className="menu-search-line"></div>
                </div>
            );
        }
        ;
    }

    function DropdownMenuSearch(){
        const {search} = useContext(Context)

        useEffect(() => {
            if(searchVal === ""){}
            else {
                //console.log("ЗАшед")

                let url = MyLink.API_URL_GET_SEARCH_GAMES + '/' + searchVal


                fetch( url, {
                    method: 'GET',

                }).then( data => data.json())
                    .then( data => {
                        //console.log(data)

                        search.setGames(data)
                        search.setTotal(data.length)
                        //console.log(search.countTotal)
                    }).catch( (error) =>{
                    console.log(error)
                    alert(error)
                });
            }
        },[searchVal])
        return(

            <div className={DropCSS_Search}>
                {
                    search.countTotal > 0 ? <div>{search.games.map(game => <DropdownItemSearch key={game.game_id} game={game}/>)}</div> :  <div className="searchOpps">#Oppps. Ничего не найдено. </div>
                }
            </div>

        );

    }

    var DropCSS = "fade-out dropdown";
    var DropCSS_Search = "fade-out dropdown-search";
    var DropCSS_Basket = "fade-out BasketVoidDrop";

    var DropCSS_Profile = "fade-out dropdown-profile"


    var Arr = "DownArrow";
    var flagClose = false;
    var flagClose2 = false



    function NavCat(props){
        const[open, setOpen] = useState(false);

        //console.log("open all = ", open)
        function Hide(){

            flagClose = false;
            Arr = "DownArrow";
            DropCSS = "fade-out dropdown";
            setOpen(flagClose)

        }
        function Open(){

            if(flagClose){
                DropCSS = "fade-out dropdown";

                Arr = "DownArrow";
                setOpen(!flagClose);
                flagClose = false;
                //console.log("Сработало 1", open)
            }
            else{
                DropCSS = "fade-in dropdown";

                Arr = "UpArrow";

                setOpen(!flagClose);
                flagClose = true;
                //console.log("Сработало 2", open)
            }

            //console.log("Ой-ой = ", open)
        }
        //console.log(props.children)

        return(
            <div className="Category" >
                <div className="FakeHeader">

                    <CSSTransition in={!open}
                                   timeout={200}
                                   classNames="DropAnim"
                    ><div onPointerLeave={Hide} className={DropCSS}>{props.children}</div></CSSTransition>
                    </div>

                <div><div onClick={Open}>

                    Все фильтры
                    <img className={Arr} src={DownArrow}/>
                </div></div>



            </div>
        );
    };



    function DropdownItem(props){

        return(

            <div className="menu-item">
                <input type="radio" />
                <label >{props.children}</label>

            </div>
        );
    }
    const DropdownMenu = observer(() => {
        const [cat, setCat] = useState(1)
        const [pticeMin, setPticeMin] = useState(0)
        const [pticeMax, setPticeMax] = useState(30000)
        const [players, setPlayers] = useState(2)

        const {game} = useContext(Context)
        useEffect(() => {
            fetch( MyLink.API_URL_GET_ALL_CATEGORI, {
                method: 'GET'
            }).then( data => data.json())
                .then( data => {

                    game.setCategories(data)
                }).catch( (error) =>{
                console.log(error)
                alert(error)
            });
        }, [])

        //console.log(topping)
        const nav = useNavigate()
        function search(){

            let url = MyLink.API_URL_GET_SEARCH_GAMES  + '/' + cat + '/' + pticeMin + '/' + pticeMax + '/' + players


            nav('/Filter/' + cat + '/' + pticeMin + '/' + pticeMax + '/' + players )


        }

        return(

            <div>

                {game.categories.map(category =>
                    <div className="menu-item">
                        <input  type="radio" name="radio" value={category.categories_id} checked={cat === category.categories_id} />
                    <label onClick={() =>setCat(category.categories_id)}>{category.category_name}</label>

                </div>)}

                <div className="param_filter">
                    <div className="param-text">Цена от</div>
                    <div className="search-cont-little" >
                        <input onChange={e => setPticeMin(e.target.value)} type="search" id="site-search" placeholder="Цена от..."></input>
                    </div>
                </div>

                <div className="param_filter">
                    <div className="param-text">Цена до</div>
                    <div className="search-cont-little" >
                        <input  onChange={e => setPticeMax(e.target.value)} type="search" id="site-search" placeholder=" до..."></input>
                    </div>
                </div>

                <div className="param_filter">
                    <div className="param-text">Число игроков</div>
                    <div className="search-cont-little" >
                        <input  onChange={e => setPlayers(e.target.value)}type="search" id="site-search" placeholder="Число игроков"></input>
                    </div>
                </div>

                <div className="game-dropbus-button" onClick={() => search()}>Найти</div>


            </div>


        );

    })


    return(
        <div className="Header">
            <div className="Header-Bg"></div>
            <Link to={MAIN_ROUTE}><img className="Logo" src={Logo} /></Link>

            <div id="search-Nav">
                <NavSearch >
                    <DropdownMenuSearch></DropdownMenuSearch>
                </NavSearch>
            </div>


            <NavCat>
                <DropdownMenu/>
            </NavCat>






        </div>
    )
})



export default Header