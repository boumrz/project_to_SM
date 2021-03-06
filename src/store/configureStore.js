import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import thunkMiddleware from 'redux-thunk'

 let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
 
 window.store = store;
 
 export default store;