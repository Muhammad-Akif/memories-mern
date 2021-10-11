import React, { useState, useRef} from 'react';
import { Typography, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles'

const CommentSection = ({post}) => {
    console.log("post --> ",post)
    const classes = useStyles();
    const dispatch = useDispatch();
    const [comments, setComments] = useState([1,2,3,4,5]) 

    return (
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant="h6">Comments</Typography>
                {
                    comments.map((c, i) => {
                        <Typography>
                            Comments are {i}
                        </Typography>
                    })
                }
            </div>
        </div>
    )
}

export default CommentSection;
