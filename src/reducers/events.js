import {
  SET_CATEGORY_EVENTS,
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS
} from '../actions/eventsAction'

export const initialState = {
  events: [],
  eventsCategory: 'all',
  isFetching: false
}

export function eventsReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_EVENTS:
      return { ...state, eventsCategory: action.payload }

    case GET_EVENTS_REQUEST:
      return { ...state, events: action.payload, isFetching: true }

    case GET_EVENTS_SUCCESS:
      return { ...state, events: action.payload, isFetching: false }

    default:
      return state
  }
}
