import {PostAction, PostActionTypes} from "../types";
import {IPost} from "../../interfaces/IPost";

export const fetchPosts = (payload: Array<IPost>): PostAction => {
    return {
      type: PostActionTypes.FETCH_ALL_POSTS,
      payload: payload
  }
};
