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
            <h2>
              "I would maintain that thanks are the highest form of thought, and
              that gratitude is happiness doubled by words"
            </h2>

            <div id="quote-author">-Gilbert Keith Chesterton</div>
          </div>
        </div>
        <div id="form-container">
          {this.state.form === 'signUp' ? (
            <div id="total-form">
              <Signup />
              <div className="toggle-form">
                <br />
                Already a member?{' '}
                <a onClick={() => this.setState({form: 'login'})}>Login. </a>
              </div>
            </div>
          ) : (
            <div>
              <Login />
              <br />

              <div className="toggle-form">
                Haven't Signed up?
                <a onClick={() => this.setState({form: 'signUp'})}> Signup. </a>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default LandingPage
