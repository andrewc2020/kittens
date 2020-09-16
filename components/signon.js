import React from 'react';

import useSignUpForm from './CustomHooks';

export default function Signup(){
  
  const {inputs, handleInputChange, handleSubmit, Submitted} = useSignUpForm(Signup);
  
   
          
  
  
  
  return <form  onSubmit={handleSubmit} >
  <div className="form-group">
    <label for="firstName" >First Name</label>
    <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required className="form-control"/>
    <label for="lastName">Last Name</label>
    <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required className="form-control"/>
  </div>
  <div>
    <label for="email">Email Address</label>
    <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required className="form-control"/>
  </div>
  <div>
    <label for="password1">Password</label>
    <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1} className="form-control" required/>
  </div>
  <div>
    <label for="password2">Re-enter Password</label>
    <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2} className="form-control" required/>
  </div>
  <button type="submit" className="btn btn-primary" >Sign Up</button>
<div><label className="alert alert-primary" role="alert">{Submitted?"Welcome Aboard!":""}</label></div>

</form>
}
 