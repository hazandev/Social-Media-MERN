import { MoreVert } from "@material-ui/icons";
export const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="img/person/1.jpeg" alt="" className="postProfileImg" />
            <div className="flex right">
              <span className="postUsername">Harel Hazan</span>
            </div>
          </div>
          <div className="postTopRight ">
            <span className="postSubject">React</span>
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <div className="postCenterLeft"></div>
          <div className="postCenterRight"></div>
          <span className="postText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quas officia quos! Magni, qui provident culpa numquam hic eius mollitia expedita dolores porro harum aperiam voluptates tempore beatae, sit quo odit quas, inventore perferendis quam amet? Placeat, recusandae animi aspernatur explicabo facere, tempora et beatae voluptatem tempore repellat tenetur eos.</span>
          <img src="img/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="bottomIcons"></div>
            <img src="img/light-bulb.png" alt="" />
            <span className="postLikeCounter">32 Wise</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">
              {" "}
              <span className="bold">9</span> comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
