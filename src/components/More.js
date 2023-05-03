import React from 'react'
import { FaPlane,FaWifi,FaMoon,FaBluetoothB,FaBatteryThreeQuarters,FaCog,FaComments,FaPaintRoller,FaSmileWink,FaPlusCircle,FaUserCircle,FaInfoCircle,FaUtensils,FaHouseUser,FaTv,FaPencilAlt,FaGraduationCap,FaBuilding,FaWonSign,FaVideo,FaUserAlt,FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/more.scss';

function More() {
  return (
    <div>
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
      <h1>More</h1>
      <div className='left_item'></div>
      <div className='right_item'><Link to={"/"}><FaCog/></Link></div>
      </div>
    </div>
    <div className='main'>
      <section className='user_info'>
        <h2 className='blind'>사용자 정보</h2>
        <span className='profile_img empty'></span>
        <span className='profile_info'>
          <span className='profile_name'>My Name</span>
          <span className='profile_email'>Userid@gmail.com</span>
        </span>
        <span className='chat_img'><Link to={"/"}><FaComments/></Link></span>
      </section>
      <section className='user_menu'>
        <h2 className='blind'>사용자 메뉴</h2>
        <ul>
          <li>
            <Link to={"/"}>
              <FaSmileWink/>Emoticons
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaPaintRoller/>Themes
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaPlusCircle/>Plus Friends
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaUserCircle/>Account
            </Link>
          </li>
        </ul>
      </section>
      <section className='plus_friends'>
        <header>
        <h2>Plus Friends</h2>
        <span><FaInfoCircle/> Learn More</span>
        </header>
        <ul className='plus_list'>
          <li>
            <Link to={"/"}>
              <FaUtensils/>Order
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaHouseUser/>Store
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaTv/>Channel/Radio
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaPencilAlt/>Creation
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaGraduationCap/>Education
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaBuilding/>Politics/Society
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaWonSign/>Finance
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <FaVideo/>Movies/Music
            </Link>
          </li>
        </ul>
      </section>
      <section className='more_app'>
        <h2 className='blind'>앱 더보기</h2>
        <ul>
          <li>
            <Link to={"/"}>
            
              <span className='app_icon'>Kakao Story</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
            
              <span className='app_icon'>Path</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
           
              <span className='app_icon'>Kakao Friends</span>
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
    </div>
  )
}

export default More