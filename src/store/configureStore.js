import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "../reducers/entries.reducers";
import modalsReducers from "../reducers/modals.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducers,
    }),
    composeWithDevTools()
  );
};
export default configureStore;
