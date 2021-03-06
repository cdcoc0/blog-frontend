import React, {useEffect} from "react";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import {withRouter} from 'react-router-dom';
import { writePost, updatePost } from "../../modules/write";

const WriteActionButtonsContainer = ({history}) => {
    const dispatch = useDispatch();
    const {title, body, tags, post, postError, originalPostId} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
        originalPostId: write.originalPostId,
    }));

    //포스트 등록
    const onPublish = () => {
        if(originalPostId) {
            dispatch(updatePost({
                title, body, tags, id: originalPostId
            }));
        }
        dispatch(writePost({
            title,
            body,
            tags,
        }),)
    };

    //취소
    const onCancel = () => {
        history.goBack();
    };

    //성공 혹은 실패 시 할 작업
    useEffect(() => {
        if(post) {
            const {_id, user} = post;
            history.push(`/@${user.username}/${_id}`);
        };
        if(postError) {
            console.log(postError);
        }
    }, [history, post, postError]);

    return (
        <WriteActionButtons onPublish={onPublish} onCancel={onCancel} isEdit={!!originalPostId} /> //originalPostId 초깃값이 null이니까
                                                                                                    //false가 되려면 느낌표 두 개...
    );
}

export default withRouter(WriteActionButtonsContainer);