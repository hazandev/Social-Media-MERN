import { Share } from "./Share";
import { Post } from "./Post";
import { useState } from "react";
import { postService } from "../services/postService";

export const Feed = () => {
  const [posts, setPosts] = useState(postService.query());
  return (
    <div className="feed animate__animated animate__fadeInLeft animate__faster">
      <Share />
      <ul className="posts">
        {posts.map(post => 
          <Post key={post._id} post={post} />
        )}
      </ul>
    </div>
  );
};
