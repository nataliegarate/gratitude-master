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
      <div className="add-post-form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="post" id="prompt-add-post" />
          <textarea
            name="post"
            value={this.state.post}
            onChange={this.handleChange}
            className="add-post"
            required
          />
          <center>
            <button type="submit"> Submit </button>
          </center>
        </form>
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
