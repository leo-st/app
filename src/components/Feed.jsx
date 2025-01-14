import React, { useState } from "react";
import "./Feed.css";
import SportCard from "./SportCard";

function Feed() {
  const [showOverlay, setShowOverlay] = useState(true);

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
        <div className="floating-overlay">
          <div className="overlay-content">
            <h3>Chatbox</h3>
            <p>This overlay stays on screen and doesn't block interaction.</p>
            <button onClick={() => setShowOverlay(false)}>Close</button>
          </div>
        </div>
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
