import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_POST = 'ADD_POST'

/**
 * INITIAL STATE
 */
const initalPostState = {
  single: {},
  all: []
}

/**
 * ACTION CREATORS
 */
const addPost = post => ({type: ADD_POST, post})

/**
 * THUNK CREATORS
 */
export const requestAddPost = post => async dispatch => {
  try {
    console.log('NATALIE', post)
    console.log('i made it here')
    const res = await axios.post('/api/posts', post)
    dispatch(addPost(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initalPostState, action) {
  switch (action.type) {
    case ADD_POST:
      return action.post
    default:
      return state
  }
}
