import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleWare from "redux-thunk"
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app_reducer";
import themeReducer from "./theme_reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  theme: themeReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
window.store = store;
export default store;
