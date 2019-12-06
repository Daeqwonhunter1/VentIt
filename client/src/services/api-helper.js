import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000/"
})

///===========================================Auth===========================================///
export const loginUser = async (loginData) => {
  const resp = await api.post('/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}
export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}
export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/verify');
    return resp.data
  }
  return false
}
///===========================================Show===========================================///
export const showAllSubvents = async () => {
  const resp = await api.get('/subvents')
  return resp.data
}

export const showOneSubvent = async (subventId) => {
  const resp = await api.get(`/subvents/${subventId}`)
  return resp.data.user_id
}



export const showAllPostsInSubvent = async (subventId) => {
  const resp = await api.get(`/subvents/${subventId}/posts`)
  return resp.data
}

export const showOnePostInSubvent = async (subventId, postId) => {
  const resp = await api.get(`/subvents/${subventId}/posts/${postId}`)
  return resp.data
}

export const showAllCommentsInPost = async (subventId, postId) => {
  const resp = await api.get(`/subvents/${subventId}/posts/${postId}/comments`)
  return resp.data
}

export const showOneCommentInPost = async (subventId, postId, commentId) => {
  const resp = await api.get(`/subvents/${subventId}/posts/${postId}/comments/${commentId}`)
  return resp.data
}

///===========================================Post===========================================///

export const postSubvent = async (subventData) => {
  const resp = await api.post(`/subvents`, subventData);
  return resp.data
}

export const postNewPostInSubvent = async (subventId, postData) => {
  const resp = await api.post(`/subvents/${subventId}/posts`, postData)
  return resp.data
}


export const postNewCommentInPost = async (subventId,postId,postData) => {
  const resp = await api.post(`/subvents/${subventId}/posts/${postId}/comments`, postData)
  return resp.data
}

export const replyToComment = async (subventId, postId,commentId, commentData) => {
  const resp = await api.post(`/subvents/${subventId}/posts/${postId}/comments/${commentId}`, commentData)
  return resp.data
}
///===========================================Update===========================================///

export const updateSubvent = async (subventId,subventData) => {
  const resp = await api.put(`/subvents/${subventId}`, subventData)
  return resp.data
}

export const updatePostInSubvent = async (subventId, postId, postData) => {
  const resp = await api.put(`/subvents/${subventId}/posts/${postId}`, postData)
  return resp.data
}

export const updateCommentInPost = async (subventId, postId, commentId, commentData) => {
  const resp = await api.put(`/subvents/${subventId}/posts/${postId}/comments/${commentId}`, commentData)
  return resp.data
}

///===========================================Delete===========================================///

export const destroySubvent = async (subventId) => {
  const resp = await api.delete(`/subvents/${subventId}`)
  return resp.data
}

export const destroyPostInSubvent = async (subventId, postId) => {
  const resp = await api.delete(`/subvents/${subventId}/posts/${postId}`)
  return resp.data
}

export const destroyCommentInPost = async (subventId, postId, commentId) => {
  const resp = await api.delete(`/subvents/${subventId}/posts/${postId}/comments/${commentId}`)
  return resp.data
}