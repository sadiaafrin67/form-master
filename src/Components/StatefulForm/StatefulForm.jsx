import { useState } from "react";


const StatefulForm = () => {

    const [name, setName] = useState('Sdaia')
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(pass.length < 6){
            setError('Pass should be must six character')
        }
        else{
            setError('')
            console.log(email, pass, name)
        }
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        console.log(e.target.value)
        setPass(e.target.value)
    }

    return (
        <div>
           <form  onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange}
            type="text" name="name" id="" />
            <br />
            <input onChange={handleEmailChange}
            type="email" name="email" id="" />
            <br />
            <input onChange={handlePassChange}
            type="password" name="password" id="" required/>
            <br />
            <input type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
            </form>  
        </div>
    );
};

export default StatefulForm;