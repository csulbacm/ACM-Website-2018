import React from 'react'
import moment from 'moment'

const style = {display: 'inline-block', color: 'Blue'}

export default class BlogPost extends React.Component {
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
        <div>
            <h3 style={style}>{moment(this.props.post.date).format('MMM Do')}</h3>
            <h2
              style={{...style, paddingLeft: '1vw'}}
              contentEditable={this.props.isAuthenticated}
              suppressContentEditableWarning="true"
              onInput={this.onTitleInput}
            >{this.state.title}</h2>

            <button
              style={{...style, position: 'absolute', right: '15vw'}}
              onClick={this.onSubmit}>
              Update
            </button>

            <button
              style={{...style, position: 'absolute', right: '5vw'}}
              onClick={this.onDelete}>
              X
            </button>

            <p
              contentEditable={this.props.isAuthenticated}
              suppressContentEditableWarning="true"
              onInput={this.onBodyInput}
            >{this.state.body}</p>
        </div>
      )
    }
}
