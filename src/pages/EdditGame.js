import React, {useEffect} from "react";
import Button from '@mui/material/Button';
import {Autocomplete} from '@mui/material';
import {Checkbox} from "@mui/material";
import {TextField} from "@mui/material";

import {Stack} from "@mui/material";
import {useContext, useState} from "react";
import {Context} from "../index";
import {useNavigate, useParams} from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MyLink from "../utils/const_api_link"


const options = [

    {label: 'Семейные', id:1},
    {label: 'Кооперативные', id:2},
    {label: 'Детктивные', id: 3},

]



const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function EdditGame(){
    //const [game, setGame] = useState({age_raiting:0, cat_id:0, descrintion:"", game_id:0, game_name:"", game_time_max:0, game_time_min:0, little_descrintion:"", little_picture:"", mas_big_picture:"",
        //players_number_max:0, players_number_min:0, popular:false, price:0, rool_link:""})
    const {id} = useParams()

    const {game} = useContext(Context)

    const [oneGame, setOneGame] = useState({})

    useEffect(() => {
        let url = MyLink.API_URL_GET_GAME_BY_ID + '/' + id
        console.log("url = ", url)
        setTimeout(() => {
        fetch( url, {
            method: 'GET'
        }).then( data => data.json())
            .then( data => {
                setTimeout(() => {
                //console.log(data)
                /*setGame({age_raiting: data.age_raiting,
                    cat_id: data.cat_id,
                    descrintion: data.descrintion,
                    game_id: data.game_id,
                    game_name: data.game_name,
                    game_time_max: data.game_time_max,
                    game_time_min: data.game_time_min,
                    little_descrintion: data.little_descrintion,
                    mas_big_picture: data.mas_big_picture,
                    players_number_max: data.players_number_max,
                    players_number_min: data.players_number_min,
                    popular: data.popular,
                    price: data.price,
                    rool_link: data.rool_link,

                })*/
                game.setOnegame(data)
                    //console.log(game.one)
                    setOneGame(data)

                }, 100)
            }).catch( (error) =>{
            console.log(error)
            alert(error)
        });
        }, 100)


    },[])


    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };


    const [error, setError] = useState('')

    const nav = useNavigate()


    const [name, setName] = useState('')
    const [litDescription, setLitDescription] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [roollink, setRoollink] = useState('')
    const [category, setCategory] = useState()
    const [miniImg, setMiniImg] = useState('')
    const [img, setImg] = useState('')
    const [age, setAge] = useState('')
    const [minPlayers, setMinPlayers] = useState('')
    const [maxPlayers, setMaxPlayers] = useState('')
    const [minTime, setMinTime] = useState('')
    const [maxTime, setMaxTime] = useState('')
    const [popular, setPopular] = useState(false)
    const [gameId, setGameId] = useState('')

    useEffect(() =>{
            setName(oneGame.game_name)
            setLitDescription(oneGame.little_descrintion)
            setDescription(oneGame.descrintion)
            setPrice(oneGame.price)
            setRoollink(oneGame.rool_link)
            setMiniImg(oneGame.little_picture)
            setImg(oneGame.mas_big_picture)
            setAge(oneGame.age_raiting)
            setMinPlayers(oneGame.players_number_min)
            setMaxPlayers(oneGame.players_number_max)
            setMinTime(oneGame.game_time_min)
            setMaxTime(oneGame.game_time_max)
            setPopular(oneGame.popular)
        }, [oneGame]
    )



    const UpdateGame = () => {


        if(name===''){
            setError('Введи название!')
            handleClick()
        }
        else if(litDescription===''){
            setError('Введи короткое описание!')
            handleClick()
        }
        else if(description===''){
            setError('Введи описание!')
            handleClick()
        }
        else if(price===0 || price===undefined){
            setError('Введи цену!')
            handleClick()
        }
        else if(category===undefined){
            setError('Введи категорию!')
            handleClick()
        }
        else if(miniImg===''){
            setError('Добавь мини-картинку!')
            handleClick()
        }
        else if(img===''){
            setError('Добавь картинки!')
            handleClick()
        }
        else if(age===''){
            setError('Добавь возраст!')
            handleClick()
        }
        else if(minPlayers===''){
            setError('Добавь кол-во игроков!')
            handleClick()
        }
        else if(maxPlayers===''){
            setError('Добавь кол-во игроков!')
            handleClick()
        }
        else if(minTime===''){
            setError('Добавь продолжительность!')
            handleClick()
        }
        else if(maxTime===''){
            setError('Добавь продолжительность!')
            handleClick()
        }
        else {
            //formData.append('game_name',name)
            //formData.append('little_description',litDescription)
            //formData.append('description',description)
            //formData.append('price',`${price}`)
            //formData.append('rool_link',roollink)
            //formData.append('categoryIdCategories',category)
            //formData.append('little_picture',miniImg)
            //formData.append('mas_pictures',img)
            //formData.append('age_rating',age)
            //formData.append('players_number',players)
            //formData.append('game_time',time)
            //formData.append('popular',popular)
            //createGame(formData).then(data => nav(TABLE_ROUTE))

            const gameToUpdate ={
                game_id: oneGame.game_id,
                game_name: name,
                price: price,
                game_time_min: minTime,
                game_time_max: maxTime,
                age_raiting: age,
                descrintion: description,
                little_descrintion: litDescription,
                players_number_min: minPlayers,
                players_number_max: maxPlayers,
                little_picture: miniImg,
                mas_big_picture: img,
                rool_link: roollink,
                popular: popular,
                cat_id: category
            }

            fetch(MyLink.API_URL_UPDATE_GAME, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gameToUpdate)

            })
                .then(response => response.json())
                .then(responseFromServer => {
                    console.log(responseFromServer);
                    console.log(gameToUpdate)
                    nav('/AllGame')

                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });

        }


    }

    return (
        <div className="Padding">
            <Stack spacing={3} justifyContent="center"
                   alignItems="center">
                <TextField value={name} onChange={e => setName(e.target.value)} size="small" sx={{ width: 800}} id="Game-Name" label="Название игры" variant="filled" />
                <TextField value={litDescription} onChange={e => setLitDescription(e.target.value)} size="small" sx={{ width: 800 }} id="Short-Description" label="Короткое описание" variant="filled" />
                <TextField value={description} onChange={e => setDescription(e.target.value)} size="small" sx={{ width: 800 }} multiline rows={20} id="Full-Description" label="Полное описание" variant="filled" />
                <TextField value={price} onChange={e => setPrice(Number(e.target.value))} size="small" sx={{ width: 800 }} id="Price" label="Цена" variant="filled" />
                <TextField value={roollink} onChange={e => setRoollink(e.target.value)} size="small" sx={{ width: 800 }} id="Rules" label="Правила-ссылка" variant="filled" />
                <Autocomplete
                    onChange={(event, newValue) => setCategory(newValue.id)}
                    disablePortal
                    id="Category-List"
                    size="small"
                    options={options}
                    sx={{ width: 800 }}
                    renderInput={(params) => <TextField {...params} label="Категория" />}
                />
                <TextField value={miniImg}  onChange={e => setMiniImg(e.target.value)} size="small" sx={{ width: 800 }} id="Image-Cover" label="Ссылка на мини-картинку" variant="filled" />
                <TextField value={img} onChange={e => setImg(e.target.value)} size="small"  multiline rows={10} sx={{ width: 800 }} id="Images" label="Ссылка на картинки" variant="filled" />
                <TextField value={age} onChange={e => setAge(Number(e.target.value))} size="small" sx={{ width: 800 }} id="Age-raiting" label="Возрастной рейтинг" variant="filled" />
                <TextField value={minPlayers} onChange={e => setMinPlayers(Number(e.target.value))} size="small" sx={{ width: 800 }} id="Number-players" label="Минимальное число игроков" variant="filled" />
                <TextField value={maxPlayers} onChange={e => setMaxPlayers(Number(e.target.value))} size="small" sx={{ width: 800 }} id="Number-players" label="Максимальное число игроков" variant="filled" />
                <TextField value={minTime} onChange={e => setMinTime(Number(e.target.value))} size="small" sx={{ width: 800 }} id="Time" label="Минимальное время игры" variant="filled" />
                <TextField value={maxTime} onChange={e => setMaxTime(Number(e.target.value))} size="small" sx={{ width: 800 }} id="Time" label="Максимальное время игры" variant="filled" />
                <div><Checkbox onChange={e => setPopular(!popular)}/><span>Популярное?</span></div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        {error}
                    </Alert>
                </Snackbar>
                <Button onClick={UpdateGame} sx={{margin: 40}} variant="contained" color="success">Обновить</Button>
            </Stack>
        </div>
    );
}