import React from 'react'
import makeStyles from './styles'
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import { typography } from '@material-ui/system';

const Form = () => {

    const classes = makeStyles();
    const [postData, setPostData] = useState({ creator:'', title: '', message= '', tags: '', selectedFile: '' })
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={` ${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={ (e) => setPostData({...postData, creator: e.target.value})} />
            </form>
        </Paper>
    )
}

export default Form;



