import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Users } from "../data/dummyData";

export const Post = ({ post }) => {
  const [wise, setWise] = useState(post.wise);
  const [isWised, setIsWised] = useState(false);
  const wiseHandler = () => {
    setWise(isWised ? wise - 1 : wise + 1);
    setIsWised(!isWised);
  };
  return (
    <div className="post">
      {post && (
        <div className="postWrapper">
          <div className="postTop">
            <Link className="postTopLeft" to={`/home/${post.userId}`}>
              <img
                src={`img/person/${post.userId}.jpeg`}
                alt=""
                className="postProfileImg"
              />
              <div className="flex right">
                <span className="postUsername">
                  {Users[post.userId - 1].username}
                </span>
              </div>
            </Link>
            <div className="postTopRight ">
              <span className="postSubject">{post.tech}</span>
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <div className="postCenterLeft"></div>
            <div className="postCenterRight"></div>
            <span className="postText">{post.text}</span>
            <img src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <div className="PostBottomIcons">
                <img src="img/light-bulb.png" alt="" />
                <span className="postWiseCounter" onClick={() => wiseHandler()}>
                  {wise} Wise
                </span>
              </div>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">
                {" "}
                <span className="bold">{post.comment}</span> comments
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
