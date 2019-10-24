import React from 'react'
import {connect} from 'react-redux'
import {requestViewPosts} from '../store/post'
import {requestDeletePost} from '../store/post'

class viewPosts extends React.Component {
  componentDidMount() {
    this.props.requestViewPosts()
  }
  handleClick(campusId) {
    this.props.requestDeletePost(postId)
  }

  render() {
    const allPosts = this.props.posts.all.reverse()
    return (
      <div>
        <h4> Your Posts </h4>
        <div id="posts">
          {allPosts.map(post => {
            return (
              <div className="singlePost" key={post.id}>
                <p>
                  {post.content} <br />Created at: {post.createdAt.slice(0, 10)}
                  <button onClick={() => this.handleClick(post.id)}> X </button>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    requestViewPosts: () => dispatch(requestViewPosts()),
    requestDeletePost: id => dispatch(requestDeletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(viewPosts)