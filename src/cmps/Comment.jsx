import { Users } from "../data/dummyData";

export const Comment = ({ comment }) => {
  const user = Users[comment.userId - 1];
  return (
    <div className="comment">
      <div className="topComment">
        <img src={user.profilePicture} alt="" />
        <p>{user.username}</p>
      </div>
      <div className="contentComment">
        <p>{comment.content}</p>
      </div>
    </div>
  );
};
