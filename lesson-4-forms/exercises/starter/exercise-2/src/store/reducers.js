import {combineReducers} from "redux"
import book from "./features/books/reducers"

const rootReducer = combineReducers({
  	book,
});

export default rootReducer