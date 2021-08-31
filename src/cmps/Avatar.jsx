export const Avatar = ({ user }) => {
  return (
    <li className="sidebarFriend ">
      <div className="imgChat">
        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      </div>
      <span className="chatOnline"></span>
      <span className="sidebarFriendName"></span>
      {user.username} 
    </li>
  );
};
