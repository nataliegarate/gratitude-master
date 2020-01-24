import React from 'react'
import {
  requestDeletePost,
  requestViewPost,
  requestUpdatePost,
  getSinglePost
} from '../store/post'
import {connect} from 'react-redux'

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, post: this.props.post.content}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSinglePost = this.handleSinglePost.bind(this)
  }

  handleDelete(id) {
    this.props.requestDeletePost(id)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.requestUpdatePost(this.state, this.props.post.id)
    this.setState({
      editing: false
    })
  }

  handleSinglePost(post) {
    this.props.getSinglePost(post)
  }

  renderEdit() {
    let date = this.props.post.createdAt.slice(0, 10).split('-')
    let formattedDate = `${date[1]}/${date[2]}/${date[0]}`
    return (
      <div className="view-Posts">
        <div className="view-post-buttons">
          <button onClick={() => this.setState({editing: false})}>
            Cancel
          </button>
        </div>
        <textarea
          name="post"
          value={this.state.post}
          onChange={this.handleChange}
          className="view-post-text"
          required
        />
        <button id="update-button" onClick={() => this.handleSubmit(event)}>
          {' '}
          Update{' '}
        </button>

        <small> Created on: {formattedDate} </small>
      </div>
    )
  }

  renderNormal() {
    let date = this.props.post.createdAt.slice(0, 10).split('-')
    let formattedDate = `${date[1]}/${date[2]}/${date[0]}`
    return (
      <div
        className="view-Posts"
        key={this.props.post.id}
        id={this.props.post.id}
        onClick={() => this.handleSinglePost(this.props.post)}
      >
        <div className="view-post-buttons">
          <button
            className="view-post-button"
            onClick={() => this.handleDelete(this.props.post.id)}
          >
            Delete
          </button>
          <button
            className="view-post-button"
            onClick={() => this.setState({editing: true})}
          >
            {' '}
            Edit
          </button>
        </div>
        <br />
        <div className="view-post-text">
          {this.props.post.content} <br />
          <br />
        </div>
        <small>Created on: {formattedDate}</small>
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

const mapStateToProps = state => {
  return {
    posts: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestViewPosts: () => dispatch(requestViewPost()),
    requestDeletePost: id => dispatch(requestDeletePost(id)),
    requestUpdatePost: (id, post) => dispatch(requestUpdatePost(id, post)),
    getSinglePost: post => dispatch(getSinglePost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
