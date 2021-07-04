import { createAction, handleActions } from "redux-actions";

const INITIALIZE = 'write/INITIALIZE'; //모든 내용을 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //특정 key값 바꾸기

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value}) => ({
    key,
    value
}));

const initialState = {
    title: '',
    body: '',
    tags: [],
};

const write = handleActions(
    {
        [INITIALIZE]: state => initialState, //초기 상태로 돌아감
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value
        }),
    },
    initialState
);

export default write;