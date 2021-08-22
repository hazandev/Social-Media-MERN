import { Share } from "./Share";
import { Post } from "./Post";
export const Feed = () => {
  return (
    <div className="feed">
      <Share />
      <div className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
