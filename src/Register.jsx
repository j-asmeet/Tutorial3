import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export function Register() {
  const navigate = useNavigate();
     const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const   regExName = /^[A-Za-z]+$/;
  const   regEx = /[a-zA-Z0-9._-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const onregister = (e) => {
      if(!regExName.test(firstName))
      {
        alert("Only letters are allowed in first name");
        setFirstName('');
      }
      else if(!regExName.test(lastName))
      {
        alert("Only letters are allowed in last name");
        setLastName('');
      }
      else if(!regEx.test(email))
      {
              alert("Please enter a valid email address");
      }
      else if(password.length<8|| confirmPassword.length<8)
      alert("Please enter a valid password of minimum length 8 ");
      else if(password!=confirmPassword)
      alert("Confirm password does not match with the password ");
      else
      {
        e.preventDefault();
        navigate('/profile', { state: { firstName, lastName, email } });
      }
      
    };
    return (
        
      <div className="App">
        <header className="App-header">
        <div className='loginForm'>
        
        <form>
        <h1>Sign Up!</h1>
            <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <input type="text" placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value) } />
         
          <div>
            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } />
          </div>
        
            <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around" }}>
            <button type="button" onClick={onregister}>Register</button>
            </div>
            
        </form>
      </div>
        </header>
      </div>
    
    )
}