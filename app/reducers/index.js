/**
 * Created by andy on 2017/9/9.
 */
import { combineReducers } from 'redux'
import userinfo from './userinfo'
import store from './store'

export default combineReducers({
    userinfo,
    store
})