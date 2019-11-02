import React from 'react'
import {connect} from 'react-redux'
import {requestViewPosts} from '../store/post'
import Post from './post'

class viewPosts extends React.Component {
  componentDidMount() {
    this.props.requestViewPosts()
  }

  render() {
    const allPosts = this.props.posts.all
      .sort(function(a, b) {
        a = a.id
        b = b.id
        return a - b
      })
      .reverse()
    return (
      <div className="half-notebook">
        <h3 id="your-post"> Your Posts </h3>
        <div id="posts">
          {allPosts.map(post => {
            return <Post post={post} key={post.id} />
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
    requestViewPosts: () => dispatch(requestViewPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(viewPosts)
