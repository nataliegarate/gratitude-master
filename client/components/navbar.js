import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login, Signup} from './auth-form'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="navBar">
    <h1 id="headline">
      {' '}
      <Link to="/">
        Gratitude Master<i className="fas fa-spa" />{' '}
      </Link>
    </h1>
    <nav id="nav-links">
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link> */}
          <a href="/" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>{/* The navbar will show these links before you log in */}</div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
