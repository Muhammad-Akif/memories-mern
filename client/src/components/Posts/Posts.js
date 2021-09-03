import React from 'react'
import Post from './Post/Post'
import makeStyles from './styles'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

const Posts = ({ currentId }) => {
    
    const classes = makeStyles();
    const posts = useSelector(state => state.posts)
    console.log("posts ===> ",posts)

    return (
        !posts.length ? <CircularProgress/> : (
            <Grid container className={classes.container} alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                                <Post post={post} currentId={currentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts;
