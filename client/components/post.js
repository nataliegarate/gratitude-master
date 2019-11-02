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
  renderNormal() {
    return (
      <div
        className="view-Posts"
        key={this.props.post.id}
        id={this.props.post.id}
        onClick={() => this.handleSinglePost(this.props.post)}
      >
        <p>
          {this.props.post.content} <br />Created at:{' '}
          {this.props.post.createdAt.slice(0, 10)}
          <button onClick={() => this.handleDelete(this.props.post.id)}>
            {' '}
            X{' '}
          </button>
          <button onClick={() => this.setState({editing: true})}> Edit </button>
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
    return (
      <div className="view-Posts">
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
