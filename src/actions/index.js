import { 
    STORIES_FETCHED 
} from "./types";
import axios from 'axios';

const basesURL = "http://hn.algolia.com/api/v1/search";

export default function(value, isAuthor){
    const params = isAuthor 
                ? `tags=author_${value}`
                : `query=${value}`;
                    
    const response = axios.get(`${basesURL}?${params}`);
  
    return {
        type: STORIES_FETCHED,
        payload: response
    };
}