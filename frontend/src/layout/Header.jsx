import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='bg-lime-500'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/Home'>
            <li>Home</li>
          </Link>
           <Link to='/Login'>
            <li>Login</li>
          </Link>
           <Link to='/Notification'>
            <li>Notification</li>
          </Link>
          
          <Link to='/About'>
            <li>About</li>
          </Link>
          <Link to='/Profile'>
           <li>Profile</li>
            {/* {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )} */}
          </Link>
        </ul>
      </div>
    </div>
  );
}