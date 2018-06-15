// @flow

export const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST';
export const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS';
export const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL';

const SIGNIN_API = `/api/v1/users/signin`;



export const doLogin = (email: string, password: string, csrf: string) => {
    return dispatch => {
        dispatch({
            type: USER_SIGNIN_REQUEST
        });

        fetch(`${SIGNIN_API}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
            .then(r => {
                if (r.ok) {
                    r.json()
                        .then(r => {
                            console.log(r);

                            if (r.ok) {
                                dispatch({
                                    type: USER_SIGNIN_SUCCESS,
                                    payload: r
                                });

                                window.location.href = r.path;

                            } else {
                                dispatch({
                                    type: USER_SIGNIN_FAIL,
                                    payload: Error(r.error)
                                });
                            }

                        })
                        .catch(err => {
                            console.error(err);
                            dispatch({
                                type: USER_SIGNIN_FAIL,
                                payload: err
                            });
                        })
                }
            })
            .catch(err => {
                cosole.error(err);
                dispatch({
                    type: USER_SIGNIN_FAIL,
                    payload: err
                });
            })
    }
};