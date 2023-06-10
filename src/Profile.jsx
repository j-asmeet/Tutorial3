import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Register.css';

export function Profile() {
const location = useLocation();
const { firstName, lastName, email } = location.state;

return( <div className='loginForm'>      
<form>
    <div className='profile'>
<div style={{display:"flex",justifyContent:"center"}}>
  <img src="loginimg.png" width="100" height="100" />
  </div>
<h3>Profile Details</h3>
<label>First Name: </label><input type="text" value={firstName} disabled/>
<label>Last Name: </label><input type="text" value={lastName} disabled />
<label className='email'>Email: </label><input type="text" value={email} disabled/>
</div>
</form>
</div>);
}