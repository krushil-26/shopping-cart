import {createStore } from "redux"
import rootReducer from "../Redux/Reducers/HandleCart"

const Store = createStore(rootReducer)
console.log(Store)

export default Store;