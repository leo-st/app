import React, { useState, useEffect } from "react";
import "./Feed.css";
import SportCard from "./SportCard";
import ChatBox from "./ChatBox";
function Feed({friendChat}) {
  console.log("feed rendered");
  console.log(friendChat);
  const [showOverlay, setShowOverlay] = useState(friendChat ? true : false );

  function hideChatBox(){
    setShowOverlay(false);
  }

  useEffect(() => {
    setShowOverlay(friendChat ? true : false);
  }, [friendChat]); // Run whenever `friendChat` changes

  return (
    <div className="feed">
      <h1>Sports</h1>
      <ul>
        <li>
          <SportCard image="/images/football.png" description="Football" />
        </li>
        <li>
          <SportCard image="/images/basketball.png" description="Basketball" />
        </li>
      </ul>

      {showOverlay && (
        <ChatBox onShowOverlay={hideChatBox} friend={friendChat}/>
      )}

      {!showOverlay && (
        <button className="reopen-button" onClick={() => setShowOverlay(true)}>
          Open Chatbox
        </button>
      )}
    </div>
  );
}

export default Feed;
