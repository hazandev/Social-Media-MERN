import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { postService } from "../services/postService";
import { userService } from "../services/userService";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import { MoreVert } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";

export const Post = ({ post }) => {
  const [wise, setWise] = useState(post.wise);
  const [isWised, setIsWised] = useState(false);
  const [postUser, setPostUser] = useState(null)
  const wiseHandler = () => {
    setWise(isWised ? wise - 1 : wise + 1);
    setIsWised(!isWised);
  };
  const [toggleMenuPost, setToggleMenuPost] = useState(false);
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const deletePost = () => {
    postService.remove(post._id);
  };
  
  useEffect(() => {
    async function fetchData(){
      if(post){
        setPostUser(await userService.getById(post.userId));
      }
    }
    fetchData();
  }, [])

  
  return (
    <div className="post">
      {postUser && (
        <div className="postWrapper">
          <div className="postTop">
            <Link className="postTopLeft" to={`/home/${post.userId}`}>
              <img
                src={`img/person/${post.userId}.jpeg`}
                alt=""
                className="postProfileImg"
              />
              <div className="flex right">
                <span className="postUsername">{postUser.username}</span>
              </div>
            </Link>
            <div className="postTopRight ">
              <span className="postSubject">{post.tech}</span>
              {toggleMenuPost && (
                <ul className="menuList">
                  <li
                    className="delbtn"
                    onClick={() => {
                      deletePost();
                    }}
                  >
                    <DeleteIcon />
                  </li>
                </ul>
              )}
              {loggedInUser._id === post.userId && (
                <div
                  className="menuPost"
                  onClick={() => {
                    setToggleMenuPost(!toggleMenuPost);
                  }}
                >
                  <MoreVert />
                </div>
              )}
            </div>
          </div>
          <div className="postCenter">
            <div className="postCenterLeft">{post.subject}</div>
            <span className="postText">{post.content}</span>
            <img src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <div className="PostBottomIcons">
                <i>
                  <EmojiObjectsOutlinedIcon className={`${isWised}`} />
                </i>
                <span className="postWiseCounter" onClick={() => wiseHandler()}>
                  {wise > 0 ? `${wise}` : ``} Wise
                </span>
              </div>
            </div>
            <div className="postBottomRight">
              {post.comment > 0 && (
                <span className="postCommentText">
                  <span className="bold">{post.comment}</span> comments
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
