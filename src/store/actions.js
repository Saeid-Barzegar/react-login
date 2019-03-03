import {
    SIGN_UP,
    LOGIN_TO_APP
} from './actionTypes'

export const SignUp = (userData) => ({
    type: SIGN_UP,
    userData
})

export const LoginToApp = (userData) => ({
    type: LOGIN_TO_APP,
    userData
})