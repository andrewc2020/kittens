
import React, {useState} from 'react';
const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      setSubmitting(event.target.value.length > 0 );
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs,
      isSubmitting
    };
  }
export default useSignUpForm;