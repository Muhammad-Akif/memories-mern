import React from 'react'
import Post from './Post/Post'
import makeStyles from './styles'
import { useSelector } from 'react-redux'

const Posts = () => {
    const classes = makeStyles()
    const posts = useSelector(state => state.posts)

    console.log("posts ===> ",posts);

    return (
        <>
            <h1>Posts</h1>
            <Post />
        </>
    )
}

export default Posts;
