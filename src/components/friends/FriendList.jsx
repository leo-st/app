import './FriendList.css'
import Friend from './Friend';

function FriendList({ friends }) {
    return (
      <div className="friend-list">
        {friends.map((friend, index) => (
          <Friend key={index} name={friend.name} status={friend.status} />
        ))}
      </div>
    );
  }
  
export default FriendList;