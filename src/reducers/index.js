import { 
    STORIES_FETCHED 
} from '../actions/types';

const initialState = {
    stories : []
}

export default function(state = initialState, action){    
    return  action.type === STORIES_FETCHED
            ? { stories: action.payload.data.hits } 
            : state ;
}