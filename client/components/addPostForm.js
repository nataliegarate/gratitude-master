import React from 'react'
// import { connect } from "react-redux"
// import thunk here

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
      <div className="formContainer">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="post"> Today, I am thankful for... </label>
            <br />

            <input
              name="post"
              value={this.state.post}
              onChange={this.handleChange}
              className="post"
              required
            />
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPostForm

// const mapStateToProps = state => {
//   return {
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     requestAddPost: post => dispatch(requestAddPost(post))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AddPostForm);
