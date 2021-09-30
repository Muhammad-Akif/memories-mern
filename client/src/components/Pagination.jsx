import React, {useEffect} from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/posts'

function Paginate({page}) {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(page) dispatch(getPosts(page))
    }, [page])

    return (
        <Pagination
        classes ={{ ul: classes.ul}}
        count={5} //no. pages
        page={1} //current page
        variant="outlined"
        color="primary"
        renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
        )
        }
        />
    )
}

export default Paginate;
