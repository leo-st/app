import './Friend.css';

function Friend({ name, status }) {
    return (
      <div className="friend-row">
        <span className="friend-name">{name}</span>
        <span className="friend-status">
          {typeof status === 'number' ? `${status} min` : <span className="status-dot"></span>}
        </span>
      </div>
    );
  }

export default Friend;