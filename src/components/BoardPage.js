import React from 'react'
import { connect } from 'react-redux'
import BlogPostForm from './BlogPostForm'
import { startAddBlogPost, startSetBlogPosts } from '../actions/blogPosts'
import moment from 'moment'

const BoardPage = (props) => (
    <div style={{marginTop: '5vh'}}>
      This is the Board page
      <BlogPostForm
        onSubmit={(blogPost) => {
          props.dispatch(startAddBlogPost(blogPost))
          props.dispatch(startSetBlogPosts())
        }}/>
      {
        props.blogPosts &&
        props.blogPosts.map((post) =>
          <div key={post.id}>
            <h2>{moment(post.date).format('MMM Do')} | {post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      }
    </div>
)

const mapStateToProps = (state) => {
  console.log(state);
  return {
    blogPosts: state.blogPosts
  }
}

export default connect(mapStateToProps)(BoardPage)
