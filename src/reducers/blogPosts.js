const defaultState = []
export default (state=defaultState, action) => {
  switch(action.type) {

    case 'ADD_BLOG_POST':
      return [
        ...state,
        action.blogPost
      ]
      break

    case 'REMOVE_BLOG_POST':
      return state.filter(({ id }) => id !== action.id)
      break

    case 'UPDATE_BLOG_POST':
      return state.map((blogPost) => blogPost.id === action.id ? { ...blogPost, ...action.updates } : blogPost)
      break

    case 'SET_BLOG_POSTS':
      return action.blogPosts
      break

    default:
      return state
      break
  }
}
