import { useState } from "react";

export function TwitterFollowCard({ children, userName = 'unknown' }) { // Default params can be used as well.
  const [ isFollowing, setIsFollowing ] = useState(false);
  const text = isFollowing ? 'Following' : 'Follow';
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
        className="tw-followCard-avatar"
        src={`https://unavatar.io/instagram/${userName}`} alt="Will Smith avatar" />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoUserName">{ children }</strong>
          <span className="tw-followCard-infoUserName">{ `@${userName}` }</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{ text }</span>
          <span className="tw-followCard-stopFollowing">Unfollow</span>
        </button>
      </aside>
    </article>
  );
}
