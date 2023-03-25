import React, {Component} from 'react'
import { compose } from 'redux';
import {connect} from 'react-redux'
import {SignIn} from '../../actions'
import {withFirebase} from '../../services/index'
import Register from '../../pages/Register'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {doc, setDoc, getDoc, serverTimestamp, getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup} from 'firebase/auth'
import { useHistory } from 'react-router-dom';



class SignUpContainer extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: null
    }


    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()


        const {firebase, SignIn} = this.props
        const {firstName, lastName, email, password} = this.state

        const showToastMessage = () => {
            toast.success('Creating your account.', {
                position: toast.POSITION.TOP_RIGHT
            });
        };

        firebase 
        .signUp(email, password)
        .then(success =>{
            const user = success.user
            showToastMessage()
            const userData ={
                firstName,
                lastName,
                email
            }      
            return firebase.addUser(user.uid, userData);
        })
        .then(()=> firebase.getUser(firebase.auth.currentUser.uid))
        .then(querySnapshot => {
            const userData = querySnapshot.data()
            console.log(userData)
           SignIn(userData)
        })



        .catch(error => {
            const errorMessage = error.message;  
  
            this.setState({
              loading: false,
              error: (
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert variant="filled" severity="error">
                    {errorMessage}
                  </Alert>
                </Stack>
              )
            });          
        })
    }

     // Google OAuth

     handleOAuth = async (e) =>{
       console.log('click')

        try{
          const auth = getAuth()
          const db = getFirestore()
          const provider = new GoogleAuthProvider()
          const result = await signInWithPopup(auth, provider)
          const user = result.user
          //check for user
          const docRef = doc(db, 'users', user.id)
          const docSnap = await getDoc(docRef)

        
          console.log('callrd')
          //if user does not exist 
          if(!docSnap.exists()){
            await setDoc(doc(db, 'users', user.uid), {
               firstName: user.firstName,
               lastName: user.lastName,
               email: user.email,
            })
       }      

       const history = useHistory()
       history.push('/')

    }catch(error){
        console.log(error)
        
    }

     }

    render(){
        return<><Register onChange={this.handleChange} onSubmit={this.handleSubmit} error={this.state.error} onClick={this.handleOAuth}/>
        <ToastContainer />
        </>
    }
}

export default compose(
    connect(
        null, {SignIn}
    ), withFirebase
)(SignUpContainer)