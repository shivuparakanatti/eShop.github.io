import { useState } from 'react';
import React  from "react";
import {useDispatch} from 'react-redux'
import { register } from '../actions/userAction';
import {v4 as uuidv4} from 'uuid'
import useLocalStorage from 'react-use-localstorage';
const Register =()=>{
    const textInput = React.useRef();
    const emailInput = React.useRef();
    const NumberInput = React.useRef();
    const AdressInput = React.useRef();
    const passwordInput = React.useRef();
    const newpasswordInput = React.useRef();
    const resetInput = () => (
        textInput.current.value = ""  ,
        emailInput.current.value = ""  ,
        NumberInput.current.value = ""  ,
        AdressInput.current.value = ""  ,
        passwordInput.current.value = ""  ,
        newpasswordInput.current.value = ""  
        );

    const dispatch = useDispatch()

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [number , setnumber] = useState('')
    const [adress , setAdress] = useState('')
    const [Newpassword , setNewpassword] = useState('')
    const [confirmpassword , setConfirmPassword] = useState('')


    const handleForm =(e)=>{
        e.preventDefault()

    }

    const handleName =(e)=>{
        const name = e.target.value
        setName(name)

    }

    const handleEmail =(e)=>{
        const email = e.target.value
        setEmail(email)


    }

    const handleNumber =(e)=>{
        const number = e.target.value
        setnumber(number)

    }

    const handleAdress =(e)=>{
        const adress = e.target.value
        setAdress(adress)

    }

    const handleNewpassword =(e)=>{
        const Newpassword = e.target.value
        setNewpassword(Newpassword)


    }

    const handleconfirmpassword =(e)=>{
        const confirmpassword = e.target.value
        setConfirmPassword(confirmpassword)


    }

    const handleRegister =(e)=>{
        const userDetails = {
            id : uuidv4(),
            name : name,
            email:email,
            number:number,
            adress:adress,
            Newpassword:Newpassword,
            confirmpassword

        }
        resetInput()


        if(userDetails.Newpassword != userDetails.confirmpassword){
            alert('passwords are not matching')
        }
        else{
            alert('Your account has credated')
            dispatch(register(userDetails))
            localStorage.setItem('users' , JSON.stringify(userDetails))
        }

    }

    return (
        <div className="registerPage">

        <form className="registerForm" onClick={handleForm}>
            <h1>Register</h1>
            <input type="text" placeholder="Name" onChange={handleName} ref={textInput}/>
            <input type="email" placeholder="Email ID" onChange={handleEmail} ref={emailInput}/>
            <input type="number" placeholder="Number" onChange={handleNumber} ref={NumberInput}/>
            <input type="textarea" placeholder="Adress"  onChange={handleAdress} ref={AdressInput}/>
            <input type="password" placeholder='New-password' onChange={handleNewpassword} ref={passwordInput}/>
            <input type="password" placeholder='confirm-password' onChange={handleconfirmpassword} ref={newpasswordInput} />
            <input type="submit" value='Register' onClick={handleRegister}/>
        </form>
        </div>
    )
}

export default Register