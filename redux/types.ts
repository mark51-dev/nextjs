import {IPost} from "../interfaces/IPost";



export enum PostActionTypes {
    ADD_POST = 'ADD_POST',
    REMOVE_POST = 'REMOVE_POST',
    FETCH_ALL_POSTS = 'FETCH_ALL_POSTS'
}

interface GetAllPosts {
    type: PostActionTypes.FETCH_ALL_POSTS,
    payload: Array<IPost>
}


export type PostAction =  GetAllPosts
