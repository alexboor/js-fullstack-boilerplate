// @flow

import {
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL
} from '../actions/user';

const initialState = {
    error: null,
    isLoading: false

};

export default (state = initialState, action) => {
    switch (action.type) {

        case USER_SIGNIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case USER_SIGNIN_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case USER_SIGNIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };


        default:
            return state;
    }
}