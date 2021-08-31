import { Share } from "./Share";
import { Post } from "./Post";
import { Posts } from "../data/dummyData";
import { useState, useEffect } from "react";


export const Feed = ({postsDisplay = Posts}) => {
  return (
    <div className="feed">
      <Share />
      <ul className="posts">
        {postsDisplay.map(post => 
          <Post key={post.id} post={post} />
        )}
      </ul>
    </div>
  );
};
