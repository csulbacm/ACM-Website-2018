import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Markdown from 'markdown-to-jsx'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const style = {display: 'inline-block', color: 'Blue'}

class BlogPost extends React.Component {
    constructor(props) {
      super(props)

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
          <Paper style={{width: "95%", margin: "20px"}}>
            
            {
              this.props.isAuthenticated && <div style={{display: 'inline-block', float: 'right', margin: '5px'}}>
                <button
                  style={{margin: '5px'}}
                  onClick={this.onSubmit}>
                  Update
                </button>

                <IconButton
                  aria-label="Delete"
                  onClick={this.onDelete}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </div>
            }

            <h3 style={style}>{moment(this.props.post.date).format('MMM Do')}</h3>
            <h2
              style={{...style, paddingLeft: '1vw'}}
              contentEditable={this.props.isAuthenticated}
              suppressContentEditableWarning="true"
              onInput={this.onTitleInput}
            >{this.state.title}</h2>

            <br/>
            <Markdown
              contentEditable={this.props.isAuthenticated}
              suppressContentEditableWarning="true"
              onInput={this.onBodyInput}
            >{this.state.body}</Markdown>
          </Paper>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(BlogPost)
