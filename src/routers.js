
import AddGame from "./pages/AddGame";
import AllGameAdmin from "./pages/AllGameAdmin";
import FilterGame from "./pages/FilterGame";
import Main from "./pages/Main";
import OneGame from "./pages/OneGame";
import EdditGame from "./pages/EdditGame";

import {ALL_GAME_ROUTE, ADD_ROUTE, MAIN_ROUTE, ONE_GAME_ROUTE, FILTER_ROUTE} from "./utils/const";

export const publicRoutes = [
    {
        path: ALL_GAME_ROUTE,
        component: <AllGameAdmin/>
    },
    {
        path: ADD_ROUTE,
        component: <AddGame/>
    },
    {
        path: ADD_ROUTE  + '/:id',
        component: <EdditGame/>
    },
    {
        path: MAIN_ROUTE,
        component: <Main/>
    },
    {
        path: ONE_GAME_ROUTE + '/:id',
        component: <OneGame/>
    },
    {
        //path: FILTER_ROUTE + '/:cat_id' + '/:price_min' + '/:price_max' + '/:players',
        path: FILTER_ROUTE + '/:cat_id' + '/:price_min' + '/:price_max' + '/:players',
        component: <FilterGame/>
    }
]

