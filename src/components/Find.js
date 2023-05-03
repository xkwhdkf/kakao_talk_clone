import React from 'react'
import { FaPlane,FaWifi,FaMoon,FaBluetoothB,FaBatteryThreeQuarters,FaAddressBook,FaQrcode,FaMobile,FaEnvelopeOpenText,FaUserCircle,FaComments,FaSearch,FaPlusCircle } from 'react-icons/fa';
import '../styles/find.scss';

function Find() {
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
      <h1>Find</h1>
      <div className='left_item'><a href='#'>Edits</a></div>
      <div className='right_item'></div>
      </div>
    </div>
    <div className='main'>
      <ul className='find_method'>
        <li><a href='#'><FaAddressBook/>Find</a></li>
        <li><a href='#'><FaQrcode/>QR code</a></li>
        <li><a href='#'><FaMobile/>Shake</a></li>
        <li><a href='#'><FaEnvelopeOpenText/>Invite via SNS</a></li>
      </ul>
      <section className='recommend_section'>
        <header><h2>Recommended Friends</h2></header>
          <ul>
            <li>You have no recommended friends.</li>
          </ul>
      </section>
    </div>
    <nav className='tab_bar'>
    <ul>
    <li><a href="index.html"><FaUserCircle />Frends</a></li>
    <li><a href="chats.html"><FaComments />Chats</a></li>
    <li><a href="find.html"><FaSearch />Find</a></li>
    <li><a href="more.html"><FaPlusCircle />More</a></li>
  </ul>
    </nav>
    </>
  )
}

export default Find