import React from 'react';
import { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    };

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-xl md:text-4xl my-10 font-semibold'>Sign<span className='text-indigo-600 '>up</span></h1>

            <div className='md:w-1/3 mx-auto p-5 rounded-lg bg-indigo-600'>
                <form className='flex flex-col gap-5' onSubmit={handleFormSubmit}>
                    <div className='flex flex-col text-white text-xl'>
                        <label htmlFor="name">Name</label>
                        <input
                            onBlur={handleNameBlur}
                            className='rounded text-black text-lg p-1'
                            type="text"
                            name="name"
                            placeholder='Your Name'
                            required />
                    </div>
                    <div className='flex flex-col text-white text-xl'>
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailBlur}
                            className='rounded text-black text-lg p-1'
                            type="email"
                            name="email"
                            placeholder='Enter Email'
                            required />
                    </div>
                    <div className='flex flex-col text-white text-xl'>
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordBlur}
                            className='rounded text-black text-lg p-1'
                            type="password"
                            name="password"
                            placeholder='Password'
                            required />
                    </div>
                    <div className='flex flex-col text-white text-xl'>
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            onBlur={handleConfirmPasswordBlur}
                            className='rounded text-black text-lg p-1'
                            type="password"
                            name="password"
                            placeholder='Password'
                            required />
                    </div>
                    <input
                        className='bg-white text-indigo-600 font-semibold p-2 rounded hover:bg-orange-500 hover:text-white' type="submit"
                        value="Login" />
                </form>
            </div>

        </div>
    );
};

export default SignUp;