import { ADD_SEARCH_TEXT, HANDLE_ROUTE } from './../Constant';
const initialState = {
    movieName:[],
}
export function addMovieReducer(state=initialState.movieName,action){
    
    console.log('Action Data',action.data);
    switch(action.type){
        case ADD_SEARCH_TEXT:
            return action.data
            break;
        default:
            return state
    }

}