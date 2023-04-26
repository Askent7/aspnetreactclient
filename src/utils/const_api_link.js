const API_BASE_URL = 'http://localhost:7077'
const API_BASE_URL_PROD = 'https://appname.azurewebsites.net'

const ENDPOINTS = {
    GET_ALL_GAME : 'get-all-game',
    CREATE_GAME : 'create-game',
    UPDATE_GAME : 'update-game',
    GET_ALL_CATEGORI : 'get-all-categori',
    GET_GAME_BY_ID : 'get-game-by-id',
    GET_CATEGORI_BY_ID : 'get-categori-by-id',
    GET_NEW_GAME : 'get-new-game',
    GET_POPULAR_GAME : 'get-popular-game',
    GET_POPULAR_GAME_COUNT : 'get-popular-game-count',
    GET_SEARCH_GAMES : 'get-search-game',
    DELETE_GAME : '/delete-game-by-id'
}
const dev = {
    API_URL_GET_ALL_GAME : `${API_BASE_URL}/${ENDPOINTS.GET_ALL_GAME}`,
    API_URL_CREATE_GAME  : `${API_BASE_URL}/${ENDPOINTS.CREATE_GAME }`,
    API_URL_UPDATE_GAME : `${API_BASE_URL}/${ENDPOINTS.UPDATE_GAME}`,
    API_URL_GET_ALL_CATEGORI : `${API_BASE_URL}/${ENDPOINTS.GET_ALL_CATEGORI}`,
    API_URL_GET_GAME_BY_ID : `${API_BASE_URL}/${ENDPOINTS.GET_GAME_BY_ID}`,
    API_URL_GET_CATEGORI_BY_ID : `${API_BASE_URL}/${ENDPOINTS.GET_CATEGORI_BY_ID}`,
    API_URL_GET_NEW_GAME: `${API_BASE_URL}/${ENDPOINTS.GET_NEW_GAME}`,
    API_URL_GET_POPULAR_GAME  : `${API_BASE_URL}/${ENDPOINTS.GET_POPULAR_GAME}`,
    API_URL_GET_POPULAR_GAME_COUNT : `${API_BASE_URL}/${ENDPOINTS.GET_POPULAR_GAME_COUNT}`,
    API_URL_GET_SEARCH_GAMES : `${API_BASE_URL}/${ENDPOINTS.GET_SEARCH_GAMES}`,
    API_URL_DELETE_GAME: `${API_BASE_URL}${ENDPOINTS.DELETE_GAME}`,
}

const prod = {
    API_URL_GET_ALL_GAME : `${API_BASE_URL}/${ENDPOINTS.GET_ALL_GAME}`,
    API_URL_CREATE_GAME  : `${API_BASE_URL}/${ENDPOINTS.CREATE_GAME }`,
    API_URL_UPDATE_GAME : `${API_BASE_URL}/${ENDPOINTS.UPDATE_GAME}`,
    API_URL_GET_ALL_CATEGORI : `${API_BASE_URL}/${ENDPOINTS.GET_ALL_CATEGORI}`,
    API_URL_GET_GAME_BY_ID : `${API_BASE_URL}/${ENDPOINTS.GET_GAME_BY_ID}`,
    API_URL_GET_CATEGORI_BY_ID : `${API_BASE_URL}/${ENDPOINTS.GET_CATEGORI_BY_ID}`,
    API_URL_GET_NEW_GAME: `${API_BASE_URL}/${ENDPOINTS.GET_NEW_GAME}`,
    API_URL_GET_POPULAR_GAME  : `${API_BASE_URL}/${ENDPOINTS.GET_POPULAR_GAME}`,
    API_URL_GET_POPULAR_GAME_COUNT : `${API_BASE_URL}/${ENDPOINTS.GET_POPULAR_GAME_COUNT}`,
    API_URL_GET_SEARCH_GAMES : `${API_BASE_URL}/${ENDPOINTS.GET_SEARCH_GAMES}`,
    API_URL_DELETE_GAME: `${API_BASE_URL}${ENDPOINTS.DELETE_GAME}`,
}

const MyLink = process.env.NODE_ENV === 'development' ? dev : prod;

export default MyLink;