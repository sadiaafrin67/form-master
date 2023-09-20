import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)

    const [error, setError] = useState('')

    useEffect(() => {
        nameRef.current.focus()
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        if(passRef.current.value.length < 6){
            setError('pass must have six character')
        }
        else{
            setError('')
            console.log(passRef.current.value)
        }

        console.log(nameRef.current.value)
        console.log(emailRef.current.value)   
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
            <input ref={nameRef}
            type="text" name="name" id="" />
            <br />
            <input ref={emailRef} defaultValue={'sadia@cv.com'}
            type="email" name="email" id="" />
            <br />
            <input ref={passRef}
            type="password" name="password" id="" />
            <br />
            <input type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
            </form>
        </div>
    );
};

export default RefForm;