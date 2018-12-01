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
        body: this.props.post.body,
        edit: false,
        editButtonText: 'Edit',
        hasChanges: false,
        edittingStyles: {}
      }
    }

    checkForChanges = () => {
      return this.state.title !== this.props.post.title || this.state.body !== this.props.post.body
    }
    onTitleInput = (e) => {
      const title = e.target.innerHTML
      this.setState(() => ({ title }))

      
      if(title !== this.props.post.title) {
        this.setState({ hasChanges: true })
      }else {
        this.setState({ hasChanges: false })
      }
    }
    onBodyInput = (e) => {
      const body = e.target.innerHTML
      this.setState(() => ({ body }))

      if(body !== this.props.post.body) {
        this.setState({ hasChanges: true })
      }else {
        this.setState({ hasChanges: false })
      }
    }

    beginEdit = (e) => {
      if(this.state.edit){
        return this.endEdit()
      }

      this.setState({
        edit: true,
        editButtonText: 'Cancel'
      })

      this.setState({
        edittingStyles: {
          border: '5px solid blue'
        }
      })
    }
    endEdit = (e) => {
      this.setState({
        edit: false,
        editButtonText: 'Edit',
        title: this.props.post.title,
        body: this.props.post.body,
        hasChanges: false,
        edittingStyles: {
          border: 'none'
        }
      })
    }
      onSubmit = (e) => {
      this.props.onSubmit({
        id: this.props.post.id,
        title: this.state.title,
        body: this.state.body
      })

      this.endEdit()
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
                  onClick={this.beginEdit}>
                  {this.state.editButtonText}
                </button>

                {
                  this.state.hasChanges &&
                  <button
                    style={{margin: '5px'}}
                    onClick={this.onSubmit}>
                    Update
                  </button>
                }

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
              style={{...style, ...this.state.edittingStyles, paddingLeft: '1vw'}}
              contentEditable={this.props.isAuthenticated}
              suppressContentEditableWarning="true"
              onInput={this.onTitleInput}
            >{this.props.post.title}</h2>

            <br/>

            {
              !this.state.edit && <Markdown>{this.props.post.body}</Markdown>
            }

            {
              this.state.edit &&
              <p
                style={this.state.edittingStyles}
                contentEditable={this.props.isAuthenticated}
                suppressContentEditableWarning="true"
                onInput={this.onBodyInput}
              >{this.props.post.body}</p>
            }


          </Paper>
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(BlogPost)
