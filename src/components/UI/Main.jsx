import "./Main.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Feed from "../Feed";

function Main() {
  const [sidebarShow, setSidebarShow] = useState(false);

  return (
    <div className="main">
      <div className={`sidebar ${sidebarShow ? "open" : ""}`}>
        {sidebarShow && <Sidebar />}
      </div>
      <div className={`content`}>
        <div className="top-row" onClick={() => setSidebarShow(!sidebarShow)}>
          <GiHamburgerMenu />
        </div>
        <div>
          <Feed/>
        </div>
      </div>
      <div className="chat">CHAT COMPONENT</div>
    </div>
  );
}

export default Main;
