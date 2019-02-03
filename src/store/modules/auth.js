//Duck pattern

import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthApi from 'lib/api/auth';

/*--------action type--------*/
const KAKAO_AUTH = 'auth/KAKAO_AUTH'; // kakao 로그인

/*--------create action--------*/
export const kakaoAuth = createAction(KAKAO_AUTH, AuthApi.redirectWithAuth);

/*--------state definition--------*/
const initialState = Map({
    userState: Map({
        isAuthenticated: false,
        user: null,
        token: ''
    }),
    
});

/*--------reducer--------*/
export default handleActions({

    ...pender({
        type: KAKAO_AUTH,
        onSuccess: (state, action) => {
            return state.set('userState', Map(
                {
                    isAuthenticated: true,
                    user: null,
                    token: ''
                }
            ));
        },
    }),

}, initialState);