import { Share } from "./Share";
import { Post } from "./Post";
import { Posts, Users } from "../data/dummyData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Feed = ({postsDisplay = Posts}) => {
  const [posts, setPosts] = useState(postsDisplay);
  useEffect(() => {
    console.log(posts);
  }, []);
  return (
    <div className="feed">
      <Share />
      <ul className="posts">
        {posts.map(post => 
          <Post key={post.id} post={post} />
        )}
      </ul>
    </div>
  );
};
