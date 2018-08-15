import axios from 'axios';

const GET_ALL_QUOTES = "GET_ALL_QUOTES";
const GET_ALL_QUOTES_FULFILLED = "GET_ALL_QUOTES_FULFILLED";
const GET_ALL_PHOTOS = "GET_ALL_PHOTOS";
const GET_ALL_PHOTOS_FULFILLED = "GET_ALL_PHOTOS_FULFILLED";
const GET_RANDOM_IDS = "GET_RANDOM_IDS";

let initialState = {
  quotesList: {},
  photosList: {},
  randomIds: {},
  userInfo: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_QUOTES_FULFILLED:
      return { ...state, quotesList: action.payload.data }
    case GET_ALL_PHOTOS_FULFILLED:
      return { ...state, photosList: action.payload.data }
    case GET_RANDOM_IDS:
      return { ...state, randomIds: [...action.payload] }
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
export function getRandomIds() {
  let randomIds = []
  for (let i = 0; i < 18; i++) { randomIds.push(Math.floor(Math.random() * (50 - 2)) + 1) };

  return {
    type: GET_RANDOM_IDS,
    payload: randomIds
  }
}