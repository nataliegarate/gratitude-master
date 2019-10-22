import React from 'react'
import {connect} from 'react-redux'
import {requestViewPosts} from '../store/post'

class viewPosts extends React.Component {
  componentDidMount() {
    this.props.requestViewPosts()
  }
  render() {
    console.log(this.props)
    return <div id="postsBox">hello</div>
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
