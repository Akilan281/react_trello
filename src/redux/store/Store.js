import {createStore, combineReducers} from 'redux'
import HomeReducer from '../reducer/HomeReducer'

const appReducer= combineReducers(
    {
        HomeReducer,       

    }
)
const rootReducer=(state,action)=>{
    return appReducer(state, action)

}


const Store = createStore( rootReducer,{})

export default Store;