import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AddPostForm from './addPostForm'
import DisplayPosts from './viewPosts'
/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <AddPostForm />
      <DisplayPosts />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
