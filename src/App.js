import React from "react";
import { Helmet } from "react-helmet-async";
import {Route} from 'react-router-dom';
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
import loadable from '@loadable/component';

const PostListPage = loadable(() => import('./pages/PostListPage'));
const WritePage = loadable(() => import('./pages/WritePage'));
const PostPage = loadable(() => import('./pages/PostPage'));
const LoginPage = loadable(() => import('./pages/LoginPage'));
const RegisterPage = loadable(() => import('./pages/RegisterPage'));

function App() {
  return (
    <>
      <Helmet>
        <title>Kirri Blog</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
}

export default App;
