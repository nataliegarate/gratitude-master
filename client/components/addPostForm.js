import React from 'react'
import {connect} from 'react-redux'
import {requestAddPost} from '../store/post'

class AddPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.requestAddPost(this.state)
    this.setState({
      post: ''
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="half-notebook">
        <div className="add-post-form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="post" id="prompt-add-post">
              {' '}
              Today, I am thankful for...{' '}
            </label>
            <br />
            <textarea
              name="post"
              value={this.state.post}
              onChange={this.handleChange}
              className="post"
              required
            />
            <br />
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestAddPost: post => dispatch(requestAddPost(post))
  }
}

export default connect(null, mapDispatchToProps)(AddPostForm)
