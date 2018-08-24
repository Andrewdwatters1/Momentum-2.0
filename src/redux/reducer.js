import axios from 'axios';

const GET_USER = 'GET_USER';
const GET_USER_FULFILLED = 'GET_USER_FULFILLED';
const LOGOUT = 'LOGOUT';
const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';
const GET_LANDING_QUOTE = "GET_LANDING_QUOTE";
const GET_LANDING_QUOTE_FULFILLED = "GET_LANDING_QUOTE_FULFILLED";
const GET_ALL_COMBOS = "GET_ALL_COMBOS";
const GET_ALL_COMBOS_FULFILLED = "GET_ALL_COMBOS_FULFILLED";
const CHANGE_TIMEZONE = "CHANGE_TIMAEZONE";
const CHANGE_TIME_FORMAT = "CHANGE_TIME_FORMAT";

let initialState = {
  landingQuote: {},
  comboList: {},
  timezone: 'Mountain',
  timeformat: 'HH:mm:ss',
  userInfo: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_FULFILLED:
      return { ...state, userInfo: action.payload.data }
    case LOGOUT_FULFILLED:
      return { ...state, userInfo: null }
    case GET_LANDING_QUOTE_FULFILLED:
      return { ...state, landingQuote: action.payload.data }
    case GET_ALL_COMBOS_FULFILLED:
      return { ...state, comboList: action.payload.data }
    case CHANGE_TIMEZONE:
      return { ...state, timezone: action.payload }
    case CHANGE_TIME_FORMAT:
      return { ...state, timeformat: action.payload }
    default:
      return state;
  }
}


export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get('/api/currentUser')
  }
}
export function logout() {
  return {
    type: LOGOUT,
    payload: axios.get('/api/logout')
  }
}
export function getLandingQuote() {
  return {
    type: GET_LANDING_QUOTE,
    payload: axios.get('/api/quote')
  }
}
export function getAllCombos() {
  return {
    type: GET_ALL_COMBOS,
    payload: axios.get('/api/combo').then(result => {
      return result;
    })
  }
}
export function changeTimezone(val) {
  return {
    type: CHANGE_TIMEZONE,
    payload: val
  }
}
export function changeTimeformat(val) {
  return {
    type: CHANGE_TIME_FORMAT,
    payload: val
  }
}