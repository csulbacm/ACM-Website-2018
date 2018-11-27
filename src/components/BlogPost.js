import React from 'react'
import moment from 'moment'
import Markdown from 'markdown-to-jsx'
import Paper from '@material-ui/core/Paper'

const style = {display: 'inline-block', margin: "10px"}

export default class BlogPost extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        title: this.props.post.title,
        body: this.props.post.body
      }
    }

    onTitleInput = (e) => {
      const title = e.target.innerHTML
      this.setState(() => ({ title }))
    }
    onBodyInput = (e) => {
      const body = e.target.innerHTML
      this.setState(() => ({ body }))
    }

    onSubmit = (e) => {
      this.props.onSubmit({
        id: this.props.post.id,
        ...this.state
      })
    }
    onDelete = (e) => {
      this.props.onDelete(this.props.post.id)
    }

    render() {
      return (
        <div style={{margin: "0 auto", width: "80%"}}>
          <Paper style={{width: "95%", margin: "20px", padding: "15px"}}>
            <div style={{display: 'inline-block', float: 'right', margin: '5px'}}>
              {
                this.props.isAuthenticated &&
                <button
                  style={{margin: '5px'}}
                  onClick={this.onSubmit}>
                  Update
                </button>
              }

              {
                this.props.isAuthenticated &&
                <button
                  style={{margin: '5px'}}
                  onClick={this.onDelete}>
                  X
                </button>
              }
            </div>

            <h2
              style={{...style, paddingLeft: '1vw'}}
              contentEditable={this.props.isAuthenticated}
              suppressContentEditableWarning="true"
              onInput={this.onTitleInput}
            >{this.state.title}</h2>

            <h3 style={{...style, fontSize: "15px"}}>{moment(this.props.post.date).format('MMM Do YYYY')}</h3>
            
            <br/>
            <Markdown
              contentEditable={this.props.isAuthenticated}
              suppressContentEditableWarning="true"
              onInput={this.onBodyInput}
              style={{margin: "20px"}}
            >{this.state.body}</Markdown>
          </Paper>
        </div>
      )
    }
}
