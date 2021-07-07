import React from "react";
import { Link } from "react-router-dom";
import styled, {css} from "styled-components";
import palette from "../../lib/styles/palette";

const SubInfoBlock = styled.div`
    ${props =>
        props.hasMarginTop &&
        css`
            margin-top: 1rem;
        `
    }
    color: ${palette.gray[6]};

    /* span 사이에 가운뎃점 */
    span + span:before {
        color: ${palette.gray[6]};
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        content: '\\B7' //가운뎃점 문자
    }
`;

const SubInfo = ({username, publishedDate, hasMarginTop}) => {
    return (
        <SubInfoBlock hasMarginTop={hasMarginTop}>
            <span>
                <b>
                    <Link to={`/@${username}`}>{username}</Link>
                </b>
            </span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
        </SubInfoBlock>
    );
}

export default SubInfo;