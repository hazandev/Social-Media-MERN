import { Post } from "../Post";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../../services/postService";
import { userService } from "../../services/userService";
import { Share } from "../Share";
import { useSelector } from "react-redux";

export const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);

  //api get user post
  useEffect(() => {
    async function fetchData(){
      setUser(await userService.getById(id));
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        setPosts(await postService.getPostByUser(user._id));
      }
    }
    fetchData();
  }, [user]);

  return (
    <div className="profile animate__animated animate__fadeInUp">
      {user && (
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={`img/post/${user._id}.jpeg`}
                  alt=""
                />
                <img
                  className="profileUserImg"
                  src={`img/person/${user._id}.jpeg`}
                  alt=""
                />
                <div className="profileInfo">
                  <h4 className="profileInfoName">{user.username}</h4>
                  <span className="profileInfoDesc">{user.bio}</span>
                </div>
              </div>
            </div>
          </div>
          {loggedInUser._id == id && (
            <div className="shareProfile">
              <Share />
            </div>
          )}
          <div className="profilePosts">
            {posts &&
              posts
                .filter((post) => post.userId === user._id)
                .map((post) => {
                  return <Post key={post._id} post={post} />;
                })}
          </div>
        </div>
      )}
    </div>
  );
};
