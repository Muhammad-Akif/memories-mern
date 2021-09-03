import * as api from '../api'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: "FETCH_ALL", payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: "CREATE", payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (currentId, post) => async (dispatch) => {
    try {
        console.log(currentId, post)
        const { data } = await api.updatePost(currentId, post);
        console.log("updatedData ===> ",data)
        dispatch({type: "UPDATE", payload: data})
    } catch (error) {
        console.log(error);
    }
}

