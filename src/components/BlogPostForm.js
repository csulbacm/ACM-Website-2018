import React from 'react'
import moment from 'moment'

export default class BlogPostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onBodyChange = (e) => {
    const body = e.target.value
    this.setState(() => ({ body }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    if(!this.state.title){
      this.setState(() => ({ error: 'Please inlude a Title for the event!' }))
    }else{
      this.setState(() => ({ error: '' }))
      const val = {
        title: this.state.title,
        body: this.state.body,
        date: moment().valueOf(),
      }
      this.props.onSubmit(val)

      console.log('Blog post submitted')
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.onSubmit}>
          <input
          type="text"
          placeholder="Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
          />
          <input
          type="text"
          placeholder="Body"
          autoFocus
          value={this.state.body}
          onChange={this.onBodyChange}
          />

          <input type="submit"/>
        </form>
      </div>
    )
  }
}
