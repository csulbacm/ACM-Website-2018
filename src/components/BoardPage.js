import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './BlogPost'
import BlogPostForm from './BlogPostForm'
import { startAddBlogPost, startUpdateBlogPost, startRemoveBlogPost } from '../actions/blogPosts'

const BoardPage = (props) => (
    <div style={{marginTop: '5vh'}}>
      This is the Board page
      <p>{props.isAuthenticated}</p>
      {
        props.isAuthenticated &&
          <BlogPostForm
          onSubmit={(blogPost) => {
            props.dispatch(startAddBlogPost(blogPost))
          }}/>
      }
      {
        props.blogPosts &&
          props.blogPosts.map((post) =>
            <BlogPost
              key={post.id}
              post={post}
              isAuthenticated={props.isAuthenticated}
              onSubmit={({ id, ...updates } = {}) => {
                props.dispatch(startUpdateBlogPost(id, updates))
              }}
              onDelete={(id) => {
                props.dispatch(startRemoveBlogPost(id))
              }}
            />
          )
      }
    </div>
)

const mapStateToProps = (state) => ({
  blogPosts: state.blogPosts,
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(BoardPage)
