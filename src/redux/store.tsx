import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
