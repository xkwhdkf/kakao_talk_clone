/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import '../styles/main.scss';
import Friends_list from '../components/Friends_list';
import Search_box from '../components/Search_box'
import User_info from '../components/User_info';
import axios from 'axios';
import Header from '../components/Header';
import Tab from '../components/Tab';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import profiles from '../json/chat.json';
import defaultProfile from '../json/default.json';
import { mergeData } from '../components/Function';
import { authService, db } from '../fbase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';

function Home({user}) { // 로그인 정보를 state로 받아서 유저 정보를 설정.
  const [userInfo, setUserInfo] = useState({}); //초기값 설정
  const [isLoading, setIsLoading] = useState(true);
  const [friends, setFriends] = useState([]);
  const [defaultFace, setDefaultFace] = useState(defaultProfile.profileURL);
  const [defaultComment, setDefaultComment] = useState(defaultProfile.comment);

  useEffect(() =>{
    getFriends();
    setProfile();
  }, [defaultFace, defaultComment]);
  
  const setProfile = async () => {
    if(authService.currentUser.displayName === null){ // 이름이 없는 경우 = 처음 실행.
      await updateProfile(authService.currentUser, {
        displayName: `Click to change`,
        photoURL: defaultProfile.photoURL
      })
      try {
        await setDoc(doc(db, `${authService.currentUser.uid}`, `profile`),{
          displayName: user.displayName, // 사용자이름
          id: user.uid, // 사용자 uid
          photoURL: user.photoURL, // 프로필 백그라운드
          profileURL: defaultFace, // 프로필 사진
          fileName:"", // 프로필 사진 파일이름
          comment: defaultComment, // 상태메시지
          date: Date.now() // 업로드 시간
        })
        console.log(`초기 프로필 문서 업로드`)
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const docRef = doc(db, `${authService.currentUser.uid}`,`profile`);
      const docSnap = await getDoc(docRef); // 문서 정보를 읽음
      await setDefaultComment(docSnap.data().comment);
      await setDefaultFace(docSnap.data().profileURL);
    } catch (error) {
      console.log(error)
    }
    await setUserInfo({
      displayName: user.displayName,
      id: user.uid,
      photoURL: user.photoURL,
      profileURL: defaultFace,
      comment: defaultComment,
      email: user.email
    })
    console.log(`프로필설정완료`);
    setIsLoading(false);
  }
  
  const getFriends = async() =>{
    const {data:friends} = await axios.get('https://jsonplaceholder.typicode.com/users');
    let data = mergeData(friends, profiles);
    await setFriends(data);
  }
  
  return (
    <>
    <Header left={'Manage'} center={'Friends'} num={'1'} right={faGear} />
    <main className='main'>
      <Search_box searchBoxToggle={true}/>
      {isLoading === true ? <p></p> :
      <>
      <section className='section__user'>
      <header><h2>My Profile</h2></header>
        <User_info name={userInfo.displayName} profileURL={userInfo.profileURL} id={userInfo.id} photoURL={userInfo.photoURL} comment={userInfo.comment} />
      </section>
      <section className='section__friends'>
        <header className='blind'><h2>Friends</h2></header>
        <ul className='friend_list'>
        {friends.map((friend,index) => <Friends_list
                key={index}
                id={friend.id}
                name={friend.name}
                comment={friend.company.catchPhrase}
                profileURL={friend.images}
                photoURL={friend.background}
        />
         )}
        </ul>
      </section>
      </>
      }
    </main>
    <Tab main={`on`} userInfo={userInfo} />
    </>
  )
}

export default Home