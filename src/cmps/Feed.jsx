import { Share } from "./Share";
import { Post } from "./Post";
import { useState } from "react";
import { postService } from "../services/postService";

export const Feed = () => {
  const posts = useState(postService.query())[0];
  return (
    <div className="feed animate__animated animate__fadeInLeft animate__faster">
      <Share />
      {posts && (
        <ul className="posts">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
};
