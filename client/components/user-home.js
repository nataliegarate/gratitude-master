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
      <h3 id="welcome-message">Welcome, {email}</h3>
      <div id="user-home">
        <div className="half-user-home">
          <AddPostForm />
        </div>
        <div id="notebook" className="half-user-home">
          <DisplayPosts />
        </div>
      </div>
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
