import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const movieReducer = (state=initialState, action) => {
    console.log('action', action )
    console.log('action type', action.type )
    console.log('action payload', action.payload )
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default movieReducer;
