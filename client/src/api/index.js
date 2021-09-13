import axios from 'axios';

// const url = 'http://localhost:5000/posts';
const API = axios.create({baseURL: 'http://localhost:5000'});

export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost) => axios.post('/posts', newPost);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const signIn = (formData) => axios.patch('/user/signin',formData);
export const signUp = (formData) => axios.patch('/user/signup',formData);