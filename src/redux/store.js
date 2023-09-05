import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const reduxStore = createStore(reducer, applyMiddleware(logger, thunk));

export default reduxStore;
