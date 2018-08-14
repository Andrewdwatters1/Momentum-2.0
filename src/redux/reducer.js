import axios from 'axios';

const GET_ALL_QUOTES = "GET_ALL_QUOTES";
const GET_ALL_QUOTES_FULFILLED = "GET_ALL_QUOTES_FULFILLED";
const GET_ALL_IMAGES = "GET_ALL_IMAGES";
const GET_ALL_IMAGES_FULFILLED = "GET_ALL_IMAGES_FULFILLED";

let initialState = {
  quotesList: {},
  imagesList: {},
  userInfo: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_ALL_QUOTES_FULFILLED:
      return { ...state, quotesList: action.payload.data}
    case GET_ALL_IMAGES_FULFILLED:
      return {...state, imagesList: action.payload.data}
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
export function getAllImages() {
  return {
    type: GET_ALL_IMAGES,
    payload: axios.get(`/api/images`).then(result => {
      return result;
    })
  }
}
