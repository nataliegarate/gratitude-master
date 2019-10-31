import React from 'react'
import {Login, Signup} from './auth-form'

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {form: 'signUp'}
  }
  render() {
    return (
      <div id="landing-page">
        <div id="paragraph-container">
          <div id="paragraph-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div id="form-container">
          <div id="form">
            {this.state.form === 'signUp' ? (
              <div>
                <Signup />
                <a onClick={() => this.setState({form: 'Login'})}> Change</a>
              </div>
            ) : (
              <div>
                <Login />
                <a onClick={() => this.setState({form: 'signUp'})}> Change</a>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
