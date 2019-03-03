import {
    SIGN_UP,
    LOGIN_TO_APP
} from "../actionTypes"

const initialState = {
    users: []
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return console.log(action.userData)
        // return {
        //     ...state,
        //     users: action.userData
        // }

        case LOGIN_TO_APP:

            return state

        default:
            return state
    }
}

export default users;