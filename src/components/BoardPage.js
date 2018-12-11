import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './BlogPost'
import BlogPostForm from './BlogPostForm'
import FadeIn from './FadeIn'
import moment from 'moment'
import Particles from 'react-particles-js';
import { startAddBlogPost, startUpdateBlogPost, startRemoveBlogPost } from '../actions/blogPosts'

const particleParams = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const BoardPage = (props) => (
  <div style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)", height: "110%"}}>
    <Particles params={particleParams} style={{position: "absolute", display: "inline-block"}} />
    <div style={{height: "30px"}}></div>

    <h1 style={{textAlign: "center", fontSize: "90px", color: "white"}}>Club Updates</h1>
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
        <FadeIn groupSize={1} maxGroups={3}>
        {
          props.blogPosts.slice(0).reverse().map((post) =>
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
        </FadeIn>
      }
    </div>
)

const mapStateToProps = (state) => ({
  blogPosts: state.blogPosts,
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(BoardPage)
