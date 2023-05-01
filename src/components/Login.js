import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleLogin(e) {

        e.preventDefault();
        // const response = await axios.post(`https://tms-server.cyclic.app/user/signin`, {
        //     email,
        //     password
        // })
        const response = await axios.post(`http://localhost:4000/student/signin`, {
            email,
            password
        })

        console.log('wait for a min...')
        const { status, message, data = '' } = response.data;
        const { name } = data;
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
            <h1 style={{textAlign:'left', marginLeft:'50px', marginBottom: '100px'}}>E - Learning System |  - <i>Abhinav</i> &#128516;</h1>
            <h2 style={{ marginLeft: '50px', marginBottom: '30px' }}>Login - Existing User</h2>
            <div class="login1">
                <label for="uname"><b>Username</b></label>
                <input type="email" placeholder="Enter Email" name="email" required onChange={(e) => { setEmail(e.target.value) }} /> <br />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required onChange={(e) => { setPassword(e.target.value) }} /> <br />

                <button onClick={handleLogin} style={{ backgroundColor: '#04AA6D', color: 'white', width: '25%', marginLeft: '85px', marginTop: '15px' }} type="submit">Login</button>

            </div>
            <br />
            <Link style={{fontSize: '20px', marginLeft: '60px'}} to='/signup'> Signup / New User</Link>
            <br />
        </div>
    )
}

export default Login;