import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Chip } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory,useLocation } from 'react-router';
import ChipInput from 'material-ui-chip-input'
import useStyles from './styles'
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';
import Paginate from '../Pagination';

function useQuery(){ //from react-router-dom
    return new URLSearchParams(useLocation().search)
}

function Home() {
    const [currentId, setCurrentId] = useState(0);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]); 

    const searchPost = () => {
        if (search.trim()) {
            //dispatch();
        }
        else {
            history.push("/");
        }
    }
    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            //search Post
        }
    }
    const handleAdd = (tag) => setTags([...tags,tag]) 
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag!==tagToDelete)) 

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField
                            name="search"
                            varient="outlined"
                            label="search Memories"
                            onKeyPress={handleKeyPress}
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            />
                            <ChipInput
                                style={{ margin: '10px 0'}}
                                value={tags}
                                onAdd={handleAdd}
                                onDelete={handleDelete}
                                label="Search Tags"
                                varient="outlined"
                            />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={6}> 
                            <Paginate />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
