import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import PostList from "../../components/posts/PostList";
import { listPosts } from "../../modules/posts";
import qs from 'qs';

const PostListContainer = ({match, location}) => {
    const dispatch = useDispatch();
    const {posts, error, loading, user} = useSelector(
        ({posts, loading, user}) => ({
            posts: posts.posts,
            error: posts.error,
            loading: loading.loading,
            user: user.user
        }),
    );

    useEffect(() => {
        const {username} = match.params;
        const {tag, page} = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(listPosts({tag, username, page}));
    }, [dispatch, location.search]);

    return (
        <PostList loading={loading} error={error} posts={posts} showWriteButton={user} />
    )
}

export default withRouter(PostListContainer);