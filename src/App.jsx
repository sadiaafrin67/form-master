
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HookForm from './Components/HookForm/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'

function App() {
 

//   const handleSignUpSubmit = data => {
//    console.log('sign up data', data)
// }


//   const handleUpadteProfile = data => {
//     console.log('update profile', data)
// }
  return (
    <>
      
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={"Profile Uodate"} submitBtnText='Update' handleSubmit={handleUpadteProfile}>
        <div>
          <h2>Update profile</h2>
          <p>Always update ur profile</p>
        </div>
      </ReusableForm> */}
     
    </>
  )
}

export default App
