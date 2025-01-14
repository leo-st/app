import './Chat.css';
import SearchBox from './SearchBox';
import FriendList from '../friends/FriendList';
import { useState } from 'react';

const friends = [
    { name: 'Alice', status: 'online' },
    { name: 'Bob', status: 5 },
    { name: 'Charlie', status: 'online' },
  ];

function Chat() {
    const [friendsList, setFriendList] = useState(friends);

    // filter friend list by text input
    function filterFriendsBySearch(text){
      setFriendList(friends.filter(
        friend => friend.name.toLocaleLowerCase().includes(text.toLowerCase())
      )); 
    }
  
    return (
      <div className="chat-container">
        <div className="search-box-wrapper">
          <SearchBox onSearch={filterFriendsBySearch}/>
        </div>
        <h2>Friends</h2>
        <FriendList friends={friendsList} />
      </div>
    );
  }

export default Chat;