import React from 'react'
import '../styles/header.scss';
import '../styles/tab.scss';
import '../styles/chats.scss';
import { FaPlane,FaWifi,FaMoon,FaBluetoothB,FaBatteryThreeQuarters,FaSearch,FaComments,FaUserCircle,FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Chats() {
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
      <h1>Chats <span>1</span></h1>
      <div className='left_item'></div>
      <div className='right_item'></div>
      </div>
    </div>
    <div className='main'>
      <form className='search_box'>
        <fieldset className='search_inner'>
          <legend className='blind'>검색창</legend>
          <FaSearch/>
          <input type="search" name="search" id="search" placeholder="Find Friends, chars Plus Friends" />
        </fieldset>
      </form>
      <section className='main_section one'>
        <header className='blind'><h2>Friends</h2></header>
        <ul>
          <li>
            <Link to={"/Chatting"}>
                <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                     <span className='chats_cont'>
                       <span className='chats_name'>Friend Name</span>
                       <span className='chats_latest'>Hello! This is a test message!</span>
                     </span>
                     <span className='chats_time'><span>03</span>:<span>33</span></span>
              </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
              <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                   <span className='chats_cont'>
                     <span className='chats_name'>Friend Name</span>
                     <span className='chats_latest'>Hello! This is a test message!</span>
                   </span>
                   <span className='chats_time'><span>03</span>:<span>33</span></span>
            </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
                <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                     <span className='chats_cont'>
                       <span className='chats_name'>Friend Name</span>
                       <span className='chats_latest'>Hello! This is a test message!</span>
                     </span>
                     <span className='chats_time'><span>03</span>:<span>33</span></span>
              </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
                <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                     <span className='chats_cont'>
                       <span className='chats_name'>Friend Name</span>
                       <span className='chats_latest'>Hello! This is a test message!</span>
                     </span>
                     <span className='chats_time'><span>03</span>:<span>33</span></span>
            </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
              <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                   <span className='chats_cont'>
                     <span className='chats_name'>Friend Name</span>
                     <span className='chats_latest'>Hello! This is a test message!</span>
                   </span>
                   <span className='chats_time'><span>03</span>:<span>33</span></span>
            </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
              <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                   <span className='chats_cont'>
                     <span className='chats_name'>Friend Name</span>
                     <span className='chats_latest'>Hello! This is a test message!</span>
                   </span>
                   <span className='chats_time'><span>03</span>:<span>33</span></span>
            </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
              <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                   <span className='chats_cont'>
                     <span className='chats_name'>Friend Name</span>
                     <span className='chats_latest'>Hello! This is a test message!</span>
                   </span>
                   <span className='chats_time'><span>03</span>:<span>33</span></span>
            </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
              <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                   <span className='chats_cont'>
                     <span className='chats_name'>Friend Name</span>
                     <span className='chats_latest'>Hello! This is a test message!</span>
                   </span>
                   <span className='chats_time'><span>03</span>:<span>33</span></span>
            </Link>
          </li>
          <li>
            <Link to={"/Chatting"}>
              <img className='chats_img empty' alt='user' src='../images/user.jfif' />
                   <span className='chats_cont'>
                     <span className='chats_name'>Friend Name</span>
                     <span className='chats_latest'>Hello! This is a test message!</span>
                   </span>
                   <span className='chats_time'><span>03</span>:<span>33</span></span>
            </Link>
          </li>
        </ul>
      </section>
      <div className='chat_fa_btn'>
        <a href='#'>
          <FaComments/>
        </a>
      </div>
    </div>
    <nav className='tab_bar'>
      <ul>
        <li><Link to={"/Index.js"}><FaUserCircle/>Friends</Link></li>
        <li><Link to={"/Index.js"}><FaComments/>Chates</Link></li>
        <li><Link to={"/Index.js"}><FaSearch/>Find</Link></li>
        <li><Link to={"/Index.js"}><FaPlusCircle/>More</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Chats