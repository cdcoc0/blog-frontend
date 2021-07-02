import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { changeField, initializeForm, login } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";
import {check} from '../../modules/user';

const LoginForm = ({history}) => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    //인풋 변경 이벤트 핸들러
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    //폼 등록 이벤트
    const onSubmit = e => {
        e.preventDefault();
        const {username, password} = form;
        dispatch(login({username, password}));
    };

    //컴포넌트가 처음 렌더링될 때 form 초기화
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(authError) {
            console.log('error occured!');
            console.log(authError);
            setError('login failed');
            return;
        }
        if(auth) {
            console.log('login succeeded');
            console.log(auth);
            dispatch(check());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if(user) {
            history.push('/');
        }
    }, [history, user])

    return (
        <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
    );
}

export default withRouter(LoginForm);