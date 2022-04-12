import React from 'react';
import { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    if (user) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-xl md:text-4xl my-10 font-semibold'>Log<span className='text-indigo-600 '>in</span></h1>

            <div className='md:w-1/3 mx-auto p-5 rounded-lg bg-indigo-600'>

                <form className='flex flex-col gap-5' onSubmit={handleFormSubmit}>
                    <div className='flex flex-col text-white text-xl'>
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailBlur}
                            className='rounded text-black text-lg p-1'
                            type="email"
                            name="email"
                            placeholder='Your Email'
                            required />
                    </div>
                    <div className='flex flex-col text-white text-xl'>
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordBlur}
                            className='rounded text-black text-lg p-1'
                            type="password"
                            name="password"
                            placeholder='Your Password'
                            required />
                    </div>
                    <input
                        className='bg-white text-indigo-600 font-semibold p-2 rounded hover:bg-orange-500 hover:text-white' type="submit"
                        value="Login" />
                </form>
                <button
                    className=' my-10 font-semibold p-2 rounded bg-orange-500 text-white
                 hover:bg-indigo-300 hover:text-black'
                    onClick={() => signInWithGoogle()}
                >Google login</button>
            </div>

        </div>
    );
};

export default Login;