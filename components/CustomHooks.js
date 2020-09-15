
import React, {useState} from 'react';
const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
   
    
  const handleSubmit = (event) => {
    if (event) {

      event.preventDefault();
      const data = { "first_name": inputs.firstName, "last_name": inputs.lastName, "email": inputs.email, "password": inputs.password1 };
      fetch('api/contact', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      ).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
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
      inputs
    };
  }
export default useSignUpForm;