import axios from 'axios'

const prefix = '/post'

const baseURL = process.env.NODE_ENV === 'development' ?
  'http://localhost:3000/post' :
  '/post'

const postService = axios.create({
  baseURL,
  withCredentials: true
})
// export service-functions to target page

// get all
export const getPost = () => postService.get()

// details
export const getPostDetails = id => postService.get(`/${id}`)

// create
export const Postcreate = post => postService.post('', post)

// edit-update
export const postUpdate = (id, post) => postService.put(`/${id}`, post)

//delete
export const postDelete = id => postService.delete(`/${id}`)