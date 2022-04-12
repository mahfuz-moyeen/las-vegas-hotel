import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Menubar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    
    return (
        <div className='bg-indigo-600 text-white p-5'>
            <nav className='flex flex-col md:flex-row gap-5 items-center font-semibold'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/checkout'>Check Out</CustomLink>
                { user?.uid ? 
               <div className='flex flex-col md:flex-row gap-5 items-center font-semibold'>
                    <CustomLink to='/user'>{user.displayName}</CustomLink>
                    <button
                    onClick={handleSignOut}
                     className='font-semibold'
                     >Logout</button>
                </div>
                 :
                    <div className='flex flex-col md:flex-row gap-5 items-center font-semibold'>
                        <CustomLink to='/login'>Login</CustomLink>
                        <CustomLink to='/signup'>Sign Up</CustomLink>
                    </div>
                }
            </nav>
        </div>
    );
};

export default Menubar;