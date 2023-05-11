import React,{useState} from "react";

const Contact = (props)=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const handleForm=(e)=>{
        e.preventDefault()
    }

    const handleName=(e)=>{
        setName(e.target.value)

    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)

        
    }

    const handlePh=(e)=>{
        setNumber(e.target.value)
    }

    const handleSubmit=(e)=>{
        console.log(name,email,number)
        alert(`Thank you ${name}, for contacting US`)
        
    }
    return (
        <form className="contactPage" onSubmit={handleForm}>
            <h2>Contact US</h2>
            <input type="text" placeholder="Name" onChange={handleName}/>
            <input type="Email" placeholder="Email ID" onChange={handleEmail} />
            <input type="phone" placeholder="Phone NO" onChange={handlePh} />
            <input type="submit"  onClick={handleSubmit} />
        </form>
    )
}

export default Contact