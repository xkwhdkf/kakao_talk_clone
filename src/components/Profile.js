import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlane,FaWifi,FaMoon,FaBluetoothB,FaBatteryThreeQuarters,FaArrowLeft,FaUserCircle,FaComments,FaPencilAlt } from 'react-icons/fa';
import '../styles/profile.scss';

function Profile() {
  return (
    <>
    
     <div className='header'>
      <div className='status_bar'>
        <div className='left_item'>
          <FaPlane/>
          <FaWifi/>
        </div>
        <div className='center_item'>
          <span>03</span>:<span>33</span>
        </div>
        <div className='right_item'>
          <FaMoon/>
          <FaBluetoothB/>
          <span><span>100</span>%</span>
          <FaBatteryThreeQuarters/>
        </div>
      </div>
      <div className='title_bar'>
      <h1 className='blind'>Profile</h1>
      <div className='left_item'><Link to={"/"}><FaArrowLeft/></Link></div>
      <div className='right_item'><Link to={"/"}><FaUserCircle/></Link></div>
      </div>
    </div>
    <div className='main'>
      <section className='background'>
        <h2 className='blind'>My Profile background image</h2>
      </section>
      <section className='profile'>
        <h2 className='blind'>My profile info</h2>
        <div className='profile_img empty'></div>
        <div className='profile_cont'>
          <span className='profile_image'></span>
          <span className='profile_name'>My Name</span>
          <input type="mail" className="profile_email" placeholder="Userid@gmail.com" />
          <ul className='profile_menu'>
            <li>
              <Link to={"/"}>
                <span className='icon'>
                  <FaComments/>
                </span>
                My Chatroom
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span className='icon'>
                  <FaPencilAlt/>
                </span>
                Edit Profile
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  )
}

export default Profile