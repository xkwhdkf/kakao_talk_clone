import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faCheck, faComment, faImage, faPencil, faPhoneVolume, faUser, faVideo, faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import '../styles/profile.scss';
import { undefinedFix } from '../components/Function';
import { authService, db, storage } from '../fbase';
import { updateProfile } from 'firebase/auth';
import { deleteObject, getDownloadURL, ref, uploadString } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { doc, updateDoc } from "firebase/firestore";
import defaultProfile from '../json/default.json';

function Profile() {
  const location = useLocation();
  const {id, name, profileURL,  photoURL, comment} = location.state;
  undefinedFix(name, profileURL, comment);
  // console.log(location.state)
  const [toggleEditing, setToggleEdit] = useState(false);
  const [newDisplayName, setNewDisplayName] = useState(name);
  const [newComment, setNewComment] = useState(comment);
  const [oldComment, setOldComment] = useState(newComment);

  const [toggleBG, setToggleBG] = useState(false);
  const [newBG, setNewBG] = useState(photoURL);
  const [oldBG, setOldBG] = useState("");
  
  const [newFace, setNewFace] = useState(profileURL);
  const [oldFace, setOldFace] = useState("");
  const [toggleFace, setToggleFace] = useState(false);
  
  useEffect(() => {
    axios.get(photoURL)
    .catch(function (error) {
      if (error.response) {
        setNewBG(defaultProfile.photoURL)
        console.log('이미지 다운로드 오류')
        }
      }
    );
  },[])

  const onChangeProfile = async(e) => {
    setOldFace(newFace);
    const {target:{files}} = e;
    const theFile = files[0];

    const reader = new FileReader();
    reader.onloadend = async(e) =>{
      const {currentTarget:{result}} = e;
      setNewFace(result);
    }
    reader.readAsDataURL(theFile);
    // 첨부된 파일을 미리보기. 즉, 업로드 파일을 불러옴. 
    setToggleFace(prev => !prev);
  }
  
  const onChange = (e) => {
    const {target:{value}} = e;
    e.target.name === "profile_name" && setNewDisplayName(value);
    if(e.target.name === "profile_comment"){
      setNewComment(value);
    }
  }

  const onSubmitName = async(e) => {
    e.preventDefault();
    if (newDisplayName !== authService.currentUser.displayName) {
      try {
        await updateProfile(authService.currentUser,{
          displayName: newDisplayName
        })
        await updateDoc(doc(db, `${authService.currentUser.uid}`, `profile`),{
          displayName: `${newDisplayName}`,
          date: Date.now()
        })
      } catch (error) {
        console.log('error');
      }
    }
    if (newComment !== authService.currentUser.email) {
      try {
        await updateDoc(doc(db, `${authService.currentUser.uid}`, `profile`),{
          comment: `${newComment}`,
          date: Date.now()
        })
      } catch (error) {
        console.log(error);
      }
    }
    setToggleEdit(false);
    console.log(`submit 동작`)
  }

  const onChangeBG = (e) => {
    setOldBG(newBG);

    const {target:{files}} = e;
    const theFile = files[0];
    console.log(e)
    const reader = new FileReader();
    reader.onloadend = async(e) =>{
      const {currentTarget:{result}} = e;
      await setNewBG(result);
      setToggleBG(prev => !prev); // bg편집을 온
    }
    reader.readAsDataURL(theFile);
  }

  const onSubmitBG = async(e) => {
    e.preventDefault();
    let bgUrl='';
    try {
      if(photoURL !== defaultProfile.photoURL){
        try {
          await deleteObject(ref(storage, photoURL));
          console.log('기존사진삭제')
        } catch (error) {
          console.log('삭제오류')
          console.log(photoURL)
          console.log(error)
        }
      }
      const storageRef = await ref(storage, `${authService.currentUser.uid}/${uuidv4()}`);
      const response = await uploadString(storageRef, newBG, 'data_url');
      bgUrl = await getDownloadURL(ref(storage, response.ref));
      if (bgUrl !== authService.currentUser.photoURL) {
        await updateProfile(authService.currentUser,{
          photoURL: bgUrl
        })
      }
    } catch (error) {
      console.log('error');
    }
    setToggleBG(false)
    setNewBG(bgUrl)
    console.log(authService.currentUser)
  }
  
  const onSubmitFace = async(e) =>{
    e.preventDefault();
    if(profileURL !== defaultProfile.profileURL){
      try {
        await deleteObject(ref(storage, profileURL));
        console.log('기존사진삭제')
      } catch (error) {
        console.log(profileURL)
        console.log(error)
      }
    }
    let faceUrl = '';
    
    const profileName = uuidv4();
    const storageRef = await ref(storage, `${authService.currentUser.uid}/profile/${profileName}`);
    const upload = await uploadString(storageRef, newFace, 'data_url');

    faceUrl = await getDownloadURL(ref(storage, upload.ref));
    if(faceUrl !== authService.currentUser.profileURL){
      console.log(faceUrl);
    }
    await updateDoc(doc(db, `${authService.currentUser.uid}`, `profile`), {
      owner: `${authService.currentUser.uid}`,
      fileName: profileName,
      profileURL: `${faceUrl}`,// 문서를 추가함.
      date: Date.now() 
    });
    console.log(authService.currentUser);
    setToggleFace(false);
  }

  const onClick = () =>{ // 토글 스위치
    setToggleEdit(prev=>!prev)
  }
  const onCancelEdit = (e) =>{ // 취소 시 이전 값 복원
    e.preventDefault()
    switch (e.currentTarget.name) {
      case "bg":
        setToggleBG(false);
        setNewBG(oldBG);
        break;
      case "face":
        setToggleFace(false);
        setNewFace(oldFace);
        break;
      case "profile":
        setNewComment(oldComment);
        setNewDisplayName(authService.currentUser.displayName);
        setToggleEdit(false)
        break;
      default:
        break;
    }
  }

  return (
    <>
    <Header left_icon={faXmark} right={faUser} bg={'off'} />
    <main style={{paddingTop:0}} className='profile'>
    <div className='container'>
      <section className='background' style={{backgroundImage: `url(${newBG})`, backgroundPosition: `center center`}}>
        <h2 className='blind'>{newDisplayName}'s Profile backgroud image</h2>
        { id === authService.currentUser.uid && (
        <form onSubmit={onSubmitBG}>
          <legend className='blind'>프로필 배경 설정</legend>
          <fieldset className='profile__bg-wrap'>
          { toggleBG ? ( // 파일 첨부 시 
            <>
            <button type='submit' className='edit_bg_btn confirm'>Confirm</button>
            <button type='button' onClick={onCancelEdit} className='edit_bg_btn cancel' name='bg'>Cancel</button>
            </>
          ):( 
            <>
            <label htmlFor='edit_bg' className='edit_btn'><FontAwesomeIcon icon={faImage} /></label>
            <input type='file' onChange={onChangeBG} accept="image/*" id='edit_bg' className='edit_btn' name='profile'></input>
            </>
          )}
          </fieldset>
        </form>
        ) }
      </section>
      <section className='profile'>
        <h2 className='blind'>{newDisplayName}'s Profile</h2>
        <div className='profile_img empty' style={{backgroundImage: `url(${newFace})`, backgroundPosition: `center center`}}>
          { id === authService.currentUser.uid && (
          <form onSubmit={onSubmitFace} className='form_face'>
            <legend className='blind'>프로필 사진 설정</legend>
            <fieldset className='profile__face-wrap'>
            {toggleFace ? (
            <div className='btn_wrap face'>
              <button type='button' onClick={onCancelEdit} name='face' className='btn_face cancel'><FontAwesomeIcon icon={faXmark} size='lg'></FontAwesomeIcon></button>
              <button type='submit' className='btn_face'><FontAwesomeIcon icon={faCheck} size='lg'></FontAwesomeIcon></button>
            </div>
             ): (
              <>
              <label htmlFor='edit_profile' className='edit_btn'><FontAwesomeIcon icon={faCamera} /></label>
              <input type='file' onChange={onChangeProfile} id='edit_profile' accept="image/*" />
              </>
             )}
             </fieldset>
            </form>
          ) }
        </div>
        <div className='profile_cont'>
          {id === authService.currentUser.uid ? (
            <form onSubmit={onSubmitName} className='profile__wrap'>
              <legend className='blind'>프로필 이름 설정</legend>
              <fieldset className='profile__text-wrap'>
              {toggleEditing ? ( // 이름, 코멘트 수정 토글
                <>
                <span className='profile_name'>
                  <input type='text' value={newDisplayName} name='profile_name' onChange={onChange} className='user_profile_name' autoFocus maxLength={8} required></input>
                </span>
                <input type='text' className='profile_comment' name='profile_comment' value={newComment} onChange={onChange}/>
                </>
                ):(
                <>
                <span className='profile_name'>
                  <label onClick={onClick} name='editName' className='user_profile_name'>{newDisplayName}</label>
                </span>
                <label onClick={onClick} name='editComment' className='profile_comment'>{newComment}</label>
                </>
                )
              }
              <ul className='profile_menu'>
                {toggleEditing ? ( // 편집 토글 버튼
                  <>
                  <li>
                  <div className='profile__btn-wrap'>
                    <button type='button' name='profile' className='icon cancel' onClick={onCancelEdit}>
                    <i><FontAwesomeIcon icon={faXmark} /></i>
                    </button>
                    Cancel
                  </div>
                </li>
                <li>
                  <div className='profile__btn-wrap'>
                    <button type='submit' id='profileEdit' className='icon confirm'>
                    <i><FontAwesomeIcon icon={faCheck} /></i>
                    </button>
                    <label htmlFor='profileEdit'>Confirm</label> 
                  </div>
                </li>
                  </>
                ) : (
                <>
                <li>
                  <div className='profile__btn-wrap'>
                    <span className='icon'>
                    <i><FontAwesomeIcon icon={faComment} /></i>
                    </span>
                    My Chatroom
                  </div>
                </li>
                <li>
                  <div className='profile__btn-wrap' onClick={onClick}>
                    <span className='icon' >
                    <i><FontAwesomeIcon icon={faPencil} /></i>
                    </span>
                    Edit Profile
                  </div>
                </li>
                </>
                )}
              </ul>
              </fieldset>
            </form> ) :  ( // 친구프로필
            <>
            <div className='profile__wrap'>
            <span className='profile_name'>{name}</span>
            <p className='comment'>{comment}</p>
            <ul className='friend_profile_menu'>
            <li>
              <div className='profile__btn-wrap'>
                <span className='icon'>
                <i><FontAwesomeIcon icon={faComment} /></i>
                </span>
                Chatroom
              </div>
            </li>
            <li>
              <div className='profile__btn-wrap'>
                <span className='icon'>
                <i><FontAwesomeIcon icon={faPhoneVolume} /></i>
                </span>
                VoiceTalk
              </div>
            </li>
            <li>
              <div className='profile__btn-wrap'>
                <span className='icon'>
                <i><FontAwesomeIcon icon={faVideo} /></i>
                </span>
                FaceTalk
              </div>
            </li>
            </ul>
            </div>
            </>
            )}
        </div>
      </section>
    </div>
  </main>
  </>
  )
}

export default Profile