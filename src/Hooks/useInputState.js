import { useState } from "react";

// for array return syestem
// const useInputState = (defaultValue = null) => {
//   const [value, setValue] = useState(defaultValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return [value, handleChange];
// };





// for obj return syestem
const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);
  
    const onChange = (e) => {
      setValue(e.target.value);
    };
  
    return {
        value,
        onChange
    };
  };

export default useInputState;
