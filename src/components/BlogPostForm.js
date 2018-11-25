import React from 'react'
import moment from 'moment'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';


const styles= {
  resize: {
    fontSize: '20px'
  }
}

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
    console.log('hi');
    
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
          {/* <input
          type="text"
          placeholder="Title"
          autoFocus
          value={this.state.title}
          onChange={this.onTitleChange}
          /> */}
          <TextField
            id="title"
            label="Title"
            style={{margin: 8, width: "50vw"}}
            value={this.state.title}
            onChange={this.onTitleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="body"
            style={{margin: 8, width: "60vw"}}
            label="Body"
            value={this.state.body}
            onChange={this.onBodyChange}
            multiline
            rows="6"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          {/* <input
          type="text"
          placeholder="Body"
          autoFocus
          value={this.state.body}
          onChange={this.onBodyChange}
          /> */}

          <Button
            variant="contained"
            color="inherit"
            type="submit"
            style={{fontSize: 1.5+'vw', backgroundColor: 'light gray', color: 'dark gray'}}
          >
            Post
            <Icon>send</Icon>
          </Button>
          

        </form>
      </div>
    )
  }
}
