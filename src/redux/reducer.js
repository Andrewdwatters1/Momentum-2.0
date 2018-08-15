import axios from 'axios';


const GET_ALL_QUOTES = "GET_ALL_QUOTES";
const GET_ALL_QUOTES_FULFILLED = "GET_ALL_QUOTES_FULFILLED";
const GET_ALL_PHOTOS = "GET_ALL_PHOTOS";
const GET_ALL_PHOTOS_FULFILLED = "GET_ALL_PHOTOS_FULFILLED";

let initialState = {
  quotesList: {},
  photosList: {},
  userInfo: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_QUOTES_FULFILLED:
      return { ...state, quotesList: action.payload.data}
    case GET_ALL_PHOTOS_FULFILLED:
      return {...state, photosList: action.payload.data}
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