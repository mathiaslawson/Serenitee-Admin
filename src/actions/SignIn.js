import {SIGN_IN} from '../constants/actionTypes'

const SignIn = paylaod =>{
    return {
        type: SIGN_IN,
        payload
    };
}

export default SignIn