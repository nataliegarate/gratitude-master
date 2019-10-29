import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const ADD_POST = 'ADD_POST'
const VIEW_POSTS = 'VIEW_POSTS'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'

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

const viewPosts = posts => ({type: VIEW_POSTS, posts})

const deletePost = id => ({type: DELETE_POST, id})

const updatePost = (post, id) => ({type: UPDATE_POST, post, id})

/**
 * THUNK CREATORS
 */
export const requestAddPost = post => async dispatch => {
  try {
    const res = await axios.post('/api/posts', post)
    dispatch(addPost(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const requestViewPosts = () => async dispatch => {
  try {
    const res = await axios.get(`/api/posts`)
    dispatch(viewPosts(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const requestDeletePost = id => async dispatch => {
  try {
    await axios.delete(`/api/posts/${id}`)
    dispatch(deletePost(id))
  } catch (err) {
    console.error(err)
  }
}

export const requestUpdatePost = (post, id) => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/${id}`, post)
    dispatch(updatePost(res.data, id))
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
      return {all: [...state.all, action.post], single: action.post}
    case VIEW_POSTS:
      return {...state, all: [...action.posts]}
    case DELETE_POST:
      return {
        ...state,
        all: [...state.all].filter(post => {
          return post.id !== action.id
        })
      }
    case UPDATE_POST:
      return {
        ...state,
        all: [...state.all].map(post => {
          if (post.id !== action.id) {
            return post
          } else {
            return action.post
          }
        })
      }
    default:
      return state
  }
}
