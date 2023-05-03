import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/main.scss';
import { FaPlane,FaWifi,FaMoon,FaBluetoothB,FaBatteryThreeQuarters,FaCog,FaSearch,FaComments,FaUserAlt,FaPlusCircle } from 'react-icons/fa';

function Index() {
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
    <h1>Friends <span>1</span></h1>
    <div className='left_item'><Link to={"/"}>Manage</Link></div>
    <div className='right_item'><Link to={"/"}><FaCog/></Link></div>
    </div>
     </div>
     <div className='main'>
      <form className='search_box'>
        <fieldset className='search_inner'>
          <legend className='blind'>검색창</legend>
          <FaSearch/>
          <input type="search" name='search' id='search' placeholder='Find Friends, chars Plus Friends' />
        </fieldset>
      </form>
      <section className='main_section'>
        <header><h2>My Profile</h2></header>
        <ul>
          <li>
            <Link to={"/profile.js"}>
            <img className='chats_img empty' alt='user' src='../images/user.jfif' />
              <span className='profile_img empty'></span>
              <span className='profile_name'>My Name</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
            <img className='chats_img empty' alt='user' src='../images/user1.jfif' />
              <span className='profile_img empty'></span>
              <span className='profile_name'>Friend Name</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className='main_section'>
      <header><h2>Friends</h2></header>
      <ul>
        <li>
          <Link to={"/"}>
          <img className='chats_img empty' alt='user' src='../images/user2.jfif' />
            <span className='profile_img empty'></span>
            <span className='profile_name'>Friend Names</span>
            <span className='profile_message'>Have a good day, See you soon.</span>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
          <img className='chats_img empty' alt='user' src='../images/user3.jfif' />
            <span className='profile_img empty'></span>
            <span className='profile_name'>Friend Names</span>
            <span className='profile_message'>Have a good day, See you soon.</span>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
          <img className='chats_img empty' alt='user' src='../images/user4.jfif' />
            <span className='profile_img empty'></span>
            <span className='profile_name'>Friend Names</span>
            <span className='profile_message'>Have a good day, See you soon.</span>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
          <img className='chats_img empty' alt='user' src='../images/user5.jfif' />
            <span className='profile_img empty'></span>
            <span className='profile_name'>Friend Names</span>
            <span className='profile_message'>Have a good day, See you soon.</span>
          </Link>
        </li>
      </ul>
      </section>
     </div>
     <nav className='tab_bar'>
      <ul>
        <li>
          <Link to={"/Index.js"}><FaUserAlt/>Friend</Link>
        </li>
        <li>
          <Link to={"/Index.js"}><FaComments/>Chats</Link>
        </li>
        <li>
          <Link to={"/Index.js"}><FaSearch/>Find</Link>
        </li>
        <li>
          <Link to={"/Index.js"}><FaPlusCircle/>More</Link>
        </li>
      </ul>
     </nav>
    </>
  )
}

export default Index