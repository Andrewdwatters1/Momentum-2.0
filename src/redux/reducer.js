import axios from 'axios';

const GET_ALL_QUOTES = "GET_ALL_QUOTES";
const GET_ALL_QUOTES_FULFILLED = "GET_ALL_QUOTES_FULFILLED";
const GET_ALL_PHOTOS = "GET_ALL_PHOTOS";
const GET_ALL_PHOTOS_FULFILLED = "GET_ALL_PHOTOS_FULFILLED";
const GET_ALL_COMBOS = "GET_ALL_COMBOS";
const GET_ALL_COMBOS_FULFILLED = "GET_ALL_COMBOS_FULFILLED";
const CHANGE_TIMEZONE = "CHANGE_TIMAEZONE";
const CHANGE_TIME_FORMAT = "CHANGE_TIME_FORMAT";

let initialState = {
  quotesList: {},
  photosList: {},
  comboList: {},
  timezone: 'Mountain',
  timeformat: 'HH:mm:ss',
  userInfo: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_QUOTES_FULFILLED:
      return { ...state, quotesList: action.payload.data }
    case GET_ALL_PHOTOS_FULFILLED:
      return { ...state, photosList: action.payload.data }
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

export function getAllQuotes() {
  return {
    type: GET_ALL_QUOTES,
    payload: axios.get(`/api/quotes`).then(result => {
      return result;
    })
  }
}
export function getAllPhotos() {
  return {
    type: GET_ALL_PHOTOS,
    payload: axios.get(`/api/photos`).then(result => {
      return result;
    })
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