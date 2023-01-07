import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "../reducer/movieReducer";

export const movieStore = createStore(movieReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof movieStore.getState>;
export type AppDispatch = typeof movieStore.dispatch;
