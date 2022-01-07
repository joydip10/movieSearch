import { ADD_SEARCH_TEXT} from './../Constant';
export const addMovie=(data)=>{
    return {
        type:ADD_SEARCH_TEXT,
        data:data
    }
}