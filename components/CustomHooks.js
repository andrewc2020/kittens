
import React, {useState} from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const [Submitted, setSubmitted] = useState(false);
   
    
  const handleSubmit = (event) => {
    if (event) {

      event.preventDefault();
      const data = { "first_name": inputs.firstName, "last_name": inputs.lastName, "email": inputs.email, "password": inputs.password1 };
      fetch('api/contact', {
        method: 'POST', // or 'PUT'
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      ).then((res) => {
        res.status === 200 ? setSubmitted(true) : ''
      })
    }

  }
    const handleInputChange = (event) => {
      event.persist();
      
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      
      
      
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs,
      Submitted
    };
  }
export default useSignUpForm;