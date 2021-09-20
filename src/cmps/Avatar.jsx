export const Avatar = ({ user, chat = true }) => {
  return (
    <li className="sidebarFriend searchAvatarUser ">
      <div className="imgChat">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      </div>
      
      {chat && user.online && <span className="chatOnline"></span>}
      {chat &&  !user.online && <span className="chatOffline"></span>}

      <span className="sidebarFriendName"></span>
      {user.username}
    </li>
  );
};
