import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import{reducer, RootState} from "./reducers/rootReducer";

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
