import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Markdown from 'markdown-to-jsx'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateBlog from './UpdateBlog.js';
import '../styles/css/Tables.css';

const style = {display: 'inline-block', margin: "10px"}

class BlogPost extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        title: this.props.post.title,
        body: this.props.post.body
      }

      this.handler = this.handler.bind(this)
    }

    handler(e) {
      e.preventDefault()
      this.setState({
        title: e.title,
        body: e.body
      })
    }

    onTitleInput = (e) => {
      const title = e.target.innerHTML
      this.setState(() => ({ title }))
    }
    onBodyInput = (e) => {
      const body = e.target.innerHTML
      this.setState(() => ({ body }))
    }

    onSubmit = (title, body) => {
      this.props.onSubmit({
        id: this.props.post.id,
        title,
        body
      })
    }

    onDelete = (e) => {
      this.props.onDelete(this.props.post.id)
    }

    render() {
      return (
        <div style={{margin: "0 auto", width: "80%"}}>
          <Paper style={{width: "95%", margin: "20px", paddingBottom: "25px"}}>
            
            {
              this.props.isAuthenticated && <div style={{display: 'inline-block', float: 'right', margin: '5px'}}>
                <UpdateBlog
                  title = {this.state.title}
                  body = {this.state.body}
                  id = {this.props.post.id}
                  onSubmit={this.onSubmit}
                  handler = {this.handler}
                />
                <IconButton
                aria-label="Delete"
                onClick={this.onDelete}>
                  <DeleteIcon fontSize="small"/>
                </IconButton>
              </div>
            }
            <h3 style={{position: "relative", top: "10px", left: "10px", fontSize: "14px"}}>{moment(this.props.post.date).format('MMM Do YYYY')}</h3>
            <p style={{textAlign: "center", fontSize: "65px"}}>{this.state.title}</p>
            
            <br/>
            <div style={{width: "75%", margin: "0 auto"}}>
              <Markdown
                onInput={this.onBodyInput}
                style={{margin: "20px"}}
              >{this.state.body}</Markdown>
            </div>
          </Paper>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(BlogPost)
