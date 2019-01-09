import database from '../firebase/firebase'

const dbRef = database.ref('data/blogPosts')

const addBlogPost = (blogPost) => ({
  type: 'ADD_BLOG_POST',
  blogPost
})
export const startAddBlogPost = (data = {}) => {
  return (dispatch) => {
    const {
      title,
      body,
      date
    } = data
    const blogPost = { title, body, date }

    dbRef.push(blogPost)
      .then((ref) => {
        dispatch(addBlogPost({
          id: ref.key,
          ...blogPost
        }))
      })
  }
}

const removeBlogPost = (id) => ({
  type: 'REMOVE_BLOG_POST',
  id
})
export const startRemoveBlogPost = (id) => {
  return (dispatch) => {
    dbRef.child(id).remove()
      .then(() => {
        dispatch(removeBlogPost(id))
      })
  }
}

const updateBlogPost = (id, updates) => ({
  type: 'UPDATE_BLOG_POST',
  id,
  updates
})

export const startUpdateBlogPost = (id, updates) => {
  return (dispatch) => {
    dbRef.child(id).update(updates)
      .then(dispatch(updateBlogPost(id, updates)))
  }
}

const setBlogPosts = (blogPosts) => ({
  type: 'SET_BLOG_POSTS',
  blogPosts
})
export const startSetBlogPosts = () => {
  return (dispatch) => {
    return dbRef.once('value')
      .then((snapshot) => {
        const blogPosts = []

        snapshot.forEach((childSnapshot) => {
          blogPosts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setBlogPosts(blogPosts))
      })
      .catch((e) => {
        console.log('Error: ', e);
      })
  }
}
