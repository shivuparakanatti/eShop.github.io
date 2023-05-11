import React,{useState} from "react";
import { useSelector } from "react-redux";

const Login =()=>{

    const localUser = localStorage.getItem('reduxuser')
    const user = JSON.parse(localUser)

    const[ email , setEmail ] = useState('')
    const[ pass , setPass ] = useState('')

    const userDetails = (state=>{
        return state.register
    })

    const handleEmail=(e)=>{
        const Email = e.target.value
        setEmail(Email)
        
    }
    const handleForm=(e)=>{
       e.preventDefault()
        

    }

    const handlePassword =(e)=>{
        setPass(e.target.value)

    }
    const handleLogin=(e)=>{
   
    const loginUser = user.filter(ele=>{
        return ele.email == email
    })  
    console.log(loginUser.map(ele=>{return ele.Newpassword})) 
    
    if(loginUser.Newpassword === pass){
        
        alert('you have login succesfully')
    }
    else{
        alert('wrong password')
    }

    }

   
    return (
        <div className="loginPage">

        <form className="loginForm" onClick={handleForm}>
            <h1>Sign in</h1>
            <input type="text " placeholder="Email ID" onChange={handleEmail}/>
            <input type="password " placeholder="Password"  onChange={handlePassword}/>
            <input type="submit" value="Login" onClick={handleLogin}/>
        </form>
        </div>
    )
}

export default Login