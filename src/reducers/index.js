import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { userReducer } from './User'
import { registrationReducer } from './registration.js'
import { eventsReducer } from './events.js'
import { eventReducer } from './event.js'

export const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  category: registrationReducer,
  events: eventsReducer,
  event: eventReducer
})
