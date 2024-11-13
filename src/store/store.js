import { createStore } from 'redux'

const initialState = {
  allMovie: []
}

const doCounter = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "GET_DATA":
      return { ...state, allMovie: payload }
    default:
      return state
  }
}

let store =  createStore(doCounter)

export default store