import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaUserFriends } from "react-icons/fa";
import { toggleUserView } from '../actions/showAllUsersaActions';


const Navbar = () => {
  const dispatch = useDispatch();
  const { following } = useSelector(state => state.following)
  const { showAllUsers } = useSelector(state => state.showAllUsers);
  let followingNumber = following.length;

  // 
  const handleView = () => {
    dispatch(toggleUserView(showAllUsers));
  }

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <ul className='nav-links'>
          <li onClick={() => handleView()} >
            <Link to='/'> Users </Link>
          </li>
          <li onClick={() => handleView()}>
            <Link to=''>Following</Link>
          </li>
          <li style={{}}>
            {followingNumber > 0 && <div><FaUserFriends /> {followingNumber}</div>}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar


