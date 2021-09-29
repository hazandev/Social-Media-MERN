import { PermMedia, Label, EmojiEmotions } from "@material-ui/icons";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { postService } from "../services/postService";
export const Share = () => {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const [tech, setTech] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    const newPost = {
      userId: loggedInUser._id,
      wise: 0,
      comment: 0,
      tech: tech,
      subject: subject,
      content: content,
      date: Date.now()
    }
    debugger
    console.log(newPost);
    postService.add(newPost);
  };
  useEffect(() => {}, []);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareHeader">
            <img
              src={loggedInUser.profilePicture}
              alt=""
              className="sahreImgProfile"
            />
            <h4 className="shareHeaderText">Wisedom</h4>
            <input
              type="text"
              placeholder="Your Tech"
              className=" shareHeaderInput"
              onChange={(ev) => setTech(ev.target.value)}
            />
          </div>
          <div className="shareContent">
            <input
              type="text"
              placeholder="Your Subject"
              className="shareSubjectInput"
              onChange={(ev) => setSubject(ev.target.value)}
            />
            <input
              type="text"
              placeholder="Content"
              className="shareContentInput"
              onChange={(ev) => {
                setContent(ev.target.value)
                console.log(content);
              }}
            />
          </div>
        </div>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
            </div>
            <div className="shareOption">
              <VideoCallIcon htmlColor="#e67e22" className="shareIcon" />
              <span className="shareOptionText">Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="#9b59b6" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="#f1c40f" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button
            className="postBtn btn"
            onClick={() => {
              addPost();
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
