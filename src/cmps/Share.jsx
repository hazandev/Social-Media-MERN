import { PermMedia, Label, EmojiEmotions } from "@material-ui/icons";
import ComputerIcon from "@material-ui/icons/Computer";
import VideoCallIcon from "@material-ui/icons/VideoCall";
export const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareHeader">
            <img src="img/person/1.jpeg" alt="" className="sahreImgProfile" />
            <h4 className="shareHeaderText">Wisedom</h4>
            <input
              type="text"
              placeholder="Your Tech"
              className=" shareHeaderInput"
            />
          </div>
          <div className="shareContent">
            <input
              type="text"
              placeholder="Your Subject"
              className="shareSubjectInput"
            />
            <input
              type="text"
              placeholder="Content"
              className="shareContentInput"
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
          <button className="postBtn btn">Post</button>
        </div>
      </div>
    </div>
  );
};
