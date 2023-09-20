import useInputState from "../../Hooks/useInputState";


const HookForm = () => {

    // for array
    // const [name, handleNameChange] = useInputState('sadia hooked')

    // for obj
    const emailState = useInputState('sadia@gog')

    const handleSubmit = e => {
        e.preventDefault()

        // for array
        // console.log('from data', name)

        // for obj
        console.log('form data', emailState.value)
    }

    return (
        <div>
           <form  onSubmit={handleSubmit}>
            {/* for array */}
            {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" /> */}
            <br />
            <input {...emailState} type="email" name="email" id="" />
            <br />
            <input type="password" name="password" id="" />
            <br />
            <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default HookForm;