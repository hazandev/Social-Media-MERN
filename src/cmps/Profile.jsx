import { Post } from "../cmps/Post";
import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import { Posts, Users } from "../data/dummyData";

export const Profile = () => {
  const [posts, setPosts] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();

  //api get user post
  useEffect(() => {
    setPosts(Posts);
    setUser(Users[id - 1]);
  }, []);

  return (
    <div className="profile">
      {user && (
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`img/post/${user.id}.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`img/person/${user.id}.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.bio}</span>
            </div>
          </div>
          <div className="profilePosts">
            {posts &&
              posts
                .filter((post) => post.userId === user.id)
                .map((post) => {
                  return <Post key={post.id} post={post} />;
                })}
          </div>
        </div>
      )}
    </div>
  );
};
