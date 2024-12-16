
import './Feed.css'
import SportCard from "./SportCard";
function Feed() {
  return (
    <div>
      <h1>Sports</h1>
      <ul>
        <li>
        <SportCard
                image="/images/football.png"
                description="Football"
            />
        </li>
        <li>
        <SportCard
                image="/images/basketball.png"
                description="Basketball"
            />
        </li>
      </ul>
      
    </div>
  );
}

export default Feed;
