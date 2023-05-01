import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

    const history = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('user account creating...')
        const response = await axios.post(`http://localhost:4000/student/signup`, {
            name, email, password, confirmPassword
        });
        const { status, message, data = '' } = response.data;
        if (['success'].includes(status)) {
            const { name, email } = data;
            history("/home", { state: { name, email } })

            // success - redirect to home page
        }
        else {
            alert(`${message}`);
            // failed
        }
    }

    return (
        <div className='login'>
            <h2 style={{ marginLeft: '30px', marginBottom: '30px' }}>Sign-up/New user</h2>

            <form action="POST">
                <input type='text' name='name' placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }}></input> <br />
                <input type='email' name='email' placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }}></input> <br />
                <input type='password' name='password' placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }}></input> <br />
                <input type='password' name='confirmPassword' placeholder='Confirm Password' onChange={(e) => { setConfirmPassword(e.target.value) }}></input> <br />
                <button style={{ backgroundColor: '#04AA6D', color: 'white', width: '25%', marginLeft: '10px', marginTop: '15px' }} onClick={handleSubmit}>submit</button>
            </form>

            <br />

            <Link style={{fontSize: '20px'}} to='/login'> Login/ Existing User</Link>

        </div>
    )
}

export default Signup;
