import React from 'react'
import { connect } from 'react-redux'
import BlogPostForm from './BlogPostForm'
import { startAddBlogPost, startSetBlogPosts } from '../actions/blogPosts'
import moment from 'moment'

const style = {display: 'inline-block', color: 'Blue'}

const BoardPage = (props) => (
    <div style={{marginTop: '5vh'}}>
      This is the Board page
      <p>{props.isAuthenticated}</p>
      {
        props.isAuthenticated &&
          <BlogPostForm
          onSubmit={(blogPost) => {
            props.dispatch(startAddBlogPost(blogPost))
            // props.dispatch(startSetBlogPosts())
          }}/>
      }
      {
        props.blogPosts &&
          props.blogPosts.map((post) =>
            <div key={post.id}>
                <h3 style={style}>{moment(post.date).format('MMM Do')}</h3>
                <h2
                  style={{...style, paddingLeft: '1vw'}}
                  contentEditable={props.isAuthenticated}
                  suppressContentEditableWarning="true"
                >{post.title}</h2>

                <p
                  contentEditable={props.isAuthenticated}
                  suppressContentEditableWarning="true"
                >{post.body}</p>
            </div>
          )
      }
    </div>
)

const mapStateToProps = (state) => {
  return {
    blogPosts: state.blogPosts,
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(BoardPage)
