import React, {Component} from 'react'
import { compose } from 'redux';
import {connect} from 'react-redux'
import {SignIn} from '../../actions'
import {withFirebase} from '../../services/index'
import ResetPassword from '../../pages/ResetPassword';
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'



class ResetPasswordContainer extends Component{
    state = {
        email: '',
        error: ''
    }

   

    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = async (e) =>{
        e.preventDefault() 

        const {email} = this.state
        console.log(email)
        
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
           console.log('send')
          } catch (error) {
            console.log(error)
          }
    }

    render(){
        return <ResetPassword onChange={this.handleChange} onSubmit={this.handleSubmit} />
    }
}

export default compose(
    connect(
        null, {SignIn}
    ), withFirebase
)(ResetPasswordContainer)