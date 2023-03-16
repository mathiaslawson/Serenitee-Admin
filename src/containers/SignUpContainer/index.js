import React, {Component} from 'react'
import { compose } from 'redux';
import {connect} from 'react-redux'
import {SignIn} from '../../actions'
import {withFirebase} from '../../services/index'
import Register from '../../pages/Register'



class SignUpContainer extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }


    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()


        const {firebase, SignIn} = this.props
        const {firstName, lastName, email, password} = this.state

        firebase 
        .signUp(email, password)
        .then(success =>{
            const user = success.user
console.log(user , 'signed up')
            const userData ={
                firstName,
                lastName,
                email
            }
           
            SignIn(userData)
           
            return firebase.addUser(user.uid, userData);
        })
        .then(()=> firebase.getUser(firebase.auth.currentUser.uid))
        .then(querySnapshot => {
            const userData = querySnapshot.data()
            SignIn(userData)
        })

        .catch(error => {
            const errorMessage = error.message          
        })
    }

    render(){
        return <Register onChange={this.handleChange} onSubmit={this.handleSubmit} />
    }
}

export default compose(
    connect(
        null, {SignIn}
    ), withFirebase
)(SignUpContainer)