import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLeaf,faUserCircle ,faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  //const { currentUser } = useSelector(state => state.user);

  return (
    <div className='bg-lime-500'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4' >
        <Link to='/Sidebar'>
            <li><FontAwesomeIcon icon= {faBars} /></li>
          </Link> <Link to='/Home' >
          <h1 className='font-bold'><FontAwesomeIcon icon= {faLeaf} />AgriSmart</h1>
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
          <img src={<FontAwesomeIcon icon= {faUserCircle} />} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            {/* {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Login</li>
            )} */}
          </Link>
        </ul>
      </div>
    </div>
  );
}