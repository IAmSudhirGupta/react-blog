import blogApi from '../api/blogApi'; 

export const fetchPosts = () => async dispatch =>{
        const posts = blogApi.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: posts
        });
};
