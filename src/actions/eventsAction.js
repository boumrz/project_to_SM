export const SET_CATEGORY_EVENTS = 'SET_CATEGORY_EVENTS'
export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_SUCCESS = ' GET_EVENTS_SUCCESS'

export function setCategoryEvents (category) {
  return dispatch => {
    dispatch({
      type: SET_CATEGORY_EVENTS,
      payload: category
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
