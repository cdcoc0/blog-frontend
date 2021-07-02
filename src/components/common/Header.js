import React from "react";
import styled from "styled-components";
import Responsive from "./Responsive";
import Button from './Button';
import { Link } from "react-router-dom";

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/* Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 커뫂넌트 생성 */
const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between; //자식 요소 사이의 여백을 최대로 설정
    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">KIRRI BLOG</Link>
                    <div className="right">
                        <Button to="/login">로그인</Button>
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
}

export default Header;