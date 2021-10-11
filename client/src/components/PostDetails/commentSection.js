import React, { useState, useRef} from 'react';
import { Typography, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles'

const CommentSection = ({post}) => {
    console.log("post --> ",post)
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comments, setComments] = useState([1,2,3,4,5]) 
    const [comment, setComment] = useState() 
    const handleClick = () => {

    }

    return (
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant="h6">Comments</Typography>
                {
                    comments.map((c, i) => (
                        <Typography gutterBottom variant="subtitle1">
                            Comments {c} 
                        </Typography>
                    ))
                }
            </div>
            <div style={{ width: "70%" }}>
                <Typography gutterBottom variant="h6">Write a Comment</Typography>
                <TextField
                    fullWidth 
                    variant="outlined"
                    rows={4}
                    label="Comment"
                    multiline
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Button style={{ marginTop: '10px'}} color="primary" fullwidth disabled={!comment} variant="contained"onClick={handleClick}>
                    Comment
                </Button>
            </div>
        </div>
    )
}

export default CommentSection;
