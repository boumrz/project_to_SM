export const SET_CATEGORY_EVENTS = 'SET_CATEGORY_EVENTS'
export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_SUCCESS = ' GET_EVENTS_SUCCESS'
export const CHOOSE_EVENT = 'CHOOSE_EVENT'

export function setCategoryEvents (category) {
  return dispatch => {
    dispatch({
      type: SET_CATEGORY_EVENTS,
      payload: category
    })
  }
}

export function chooseEvent (event) {
  return dispatch => {
    dispatch({
      type: CHOOSE_EVENT,
      payload: event
    })
  }
}

export function getEvents () {
  return dispatch => {
    dispatch({
      type: GET_EVENTS_REQUEST,
      payload: []
    })
    fetch('/events')
      .then(res => res.json())
      .then(function (json) {
        dispatch({
          type: GET_EVENTS_SUCCESS,
          payload: json
        })
      })
  }
}
