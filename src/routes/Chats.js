import React, { useEffect, useState } from 'react'
import Fa_btn from '../components/Fa_btn';
import Search_box from '../components/Search_box';
import '../styles/chats.scss';
import Header from '../components/Header';
import Tab from '../components/Tab';
import Chatting from '../components/Chatting';
import axios from 'axios';
import { mergeData } from '../components/Function';
import profiles from '../json/chat.json';
import { authService } from '../fbase';

function Chats() {
  const [friends, setFriends] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getFriends = async() =>{
    const {data:friends} = await axios.get('https://jsonplaceholder.typicode.com/users');
    let data = mergeData(friends, profiles);
    setFriends(data);
    setIsLoading(false);
  }
  useEffect(() =>{
    getFriends();
  }, []);
  // const location = useLocation();
  // const friends = location.state.friends;
  // **location.state로 값을 받기 때문에 계속 전송을 해줘서 다른 곳에서도 받아서 유지를 해줘야함. 아니면 그냥 여기서 json 파일을 받던지. 파일을 받는게 더 나은가? => chat에서 다시 받아서 리스트를 렌더링하게 수정

  // const {friends} = location.state;
  // 로케이션.스테이트 받을 때 중괄호 하기. 굳이 맵으로 새로 만들 필요 없음. 

  // const map = new Map();
  // friends.forEach(friends => map.set(friends.id, friends));
  // // chat.forEach(dialog => map.set(dialog.id, {...map.get(dialog.id), ...dialog.latest}));

  // const mergeDate = Array.from(map.values());
  // 이미 앞에서 통합된 데이터를 스테이트로 받으면 다시 통합 시킬 필요가 없음. 

  const [searchBoxToggle, setSearchBoxToggle] = useState(false);
  return (
    <>
    <Header left={'Edit'} center={'Chats'} num={'1'} />
    <main>
    <Search_box searchBoxToggle={searchBoxToggle} />
    <section className='section__friends'>
      <header><h2>Friends</h2></header>
      {isLoading ? <p></p> :
      <ul className='chat_list'>
      {friends.map((friend, index) => <Chatting 
              key={index}
              id={friend.id}
              name={friend.name}
              message={friend.latest}
              profileURL={friend.images}
              photoURL={friend.background}
              comment={friend.company.catchPhrase}
      />)}
      </ul>
      }
    </section>
    </main>
    <Fa_btn setSearchBoxToggle={setSearchBoxToggle} />
    <Tab chats={`on`} />
   </>
  )
}

export default Chats