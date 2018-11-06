import React from 'react'
import { connect } from 'react-redux'
import BlogPost from './BlogPost'
import BlogPostForm from './BlogPostForm'
import { startAddBlogPost, startSetBlogPosts } from '../actions/blogPosts'
import moment from 'moment'
import Markdown from 'markdown-to-jsx'
import Particles from 'react-particles-js';

const style = {display: 'inline-block', color: 'Blue'}
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
  <div style={{background: "linear-gradient(to bottom, #2196f3, #00a5f7, #00b4f8, #00c1f7, #30cef4)", height: "100vh"}}>
      <Particles params={particleParams} style={{position: "absolute", display: "inline-block"}} />
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
<<<<<<< HEAD
            <div key={post.id}>
                <h3 style={style}>{moment(post.date).format('MMM Do')}</h3>
                <h2
                  style={{...style, paddingLeft: '1vw'}}
                  contentEditable={props.isAuthenticated}
                  suppressContentEditableWarning="true"
                >{post.title}</h2>
                <br/>

                <Markdown
                  contentEditable={props.isAuthenticated}
                  suppressContentEditableWarning="true"
                >{post.body}</Markdown>
            </div>
=======
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
>>>>>>> e6fa85f423b00939b4e67ce1d854563d1a9c4de9
          )
      }
    </div>
)

const mapStateToProps = (state) => ({
  blogPosts: state.blogPosts,
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(BoardPage)
