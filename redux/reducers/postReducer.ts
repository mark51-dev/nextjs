import {PostAction, PostActionTypes} from '../types';
import {IPost} from "../../interfaces/IPost";

export interface IInitialStorePost {
    posts: Array<IPost>
}

const initialState: IInitialStorePost = {
    posts: []
};

const postReducer = (state = initialState, action: PostAction)  => {
    switch(action.type) {
        case PostActionTypes.FETCH_ALL_POSTS:
            return {
              ...state,
              posts: [...action.payload]
            };
        case PostActionTypes.REMOVE_POST:
            return {
                ...state,
                posts: [...action.payload]
            };
        case PostActionTypes.ADD_POST:
            return {
                ...state,
                posts: [...action.payload]
            };
        default:
            return state;
    }
};

export default postReducer;
