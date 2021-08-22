export const Avatar = ({ user }) => {
  return (
    <li className="sidebarFriend ">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="chatOnline"></span>
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};
