import React from 'react'
import {
  requestDeletePost,
  requestViewPost,
  requestUpdatePost
} from '../store/post'
import {connect} from 'react-redux'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, post: this.props.post.content}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDelete(id) {
    this.props.requestDeletePost(id)
  }
  renderNormal() {
    return (
      <div
        className="singlePost"
        key={this.props.post.id}
        id={this.props.post.id}
      >
        <p>
          {this.props.post.content} <br />Created at:{' '}
          {this.props.post.createdAt.slice(0, 10)}
          <button onClick={() => this.handleDelete(this.props.post.id)}>
            {' '}
            X{' '}
          </button>
          <button onClick={() => this.setState({editing: true})}> Edit </button>
          <hr />
        </p>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.props)
    event.preventDefault()
    this.props.requestUpdatePost(this.state, this.props.post.id)
    this.setState({
      editing: false
    })
  }

  renderEdit() {
    return (
      <div className="formContainer">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              name="post"
              value={this.state.post}
              onChange={this.handleChange}
              className="post"
              required
            />
            <button type="submit"> Submit </button>
            <button onClick={() => this.setState({editing: false})}>
              {' '}
              Cancel{' '}
            </button>
          </form>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.editing) {
      return this.renderEdit()
    } else {
      return this.renderNormal()
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestViewPosts: () => dispatch(requestViewPost()),
    requestDeletePost: id => dispatch(requestDeletePost(id)),
    requestUpdatePost: (id, post) => dispatch(requestUpdatePost(id, post))
  }
}

export default connect(null, mapDispatchToProps)(Post)
