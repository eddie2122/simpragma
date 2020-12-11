import { createStore, combineReducers } from 'redux'
import { LoginReducer } from './LoginReducer'

export const rootReducer = combineReducers({
  data: LoginReducer,
  
});

const store = createStore(LoginReducer)


export default store