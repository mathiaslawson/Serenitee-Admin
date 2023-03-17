import {RESET_PASSWORD} from '../constants/actionTypes'

const ResetPassword = payload =>{
    return {
        type: RESET_PASSWORD,
        payload
    };
}

export default ResetPassword