import React from 'react'
import {connect} from 'react-redux'
import {requestViewPosts, requestDeletePost} from '../store/post'
import Post from './post'

class viewPosts extends React.Component {
  componentDidMount() {
    this.props.requestViewPosts()
  }

  // handleUpdate(id){
  //   document.getElementById(id).innerHTML='hello'
  // }

  render() {
    const allPosts = this.props.posts.all.reverse()
    return (
      <div>
        <h4> Your Posts </h4>
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
