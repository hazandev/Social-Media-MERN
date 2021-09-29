import { useState, useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

import { userService } from "../../services/userService";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";

export const ArticlePreview = ({ article, removeArticle }) => {
  const [user, setUser] = useState(null);
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);


  useEffect(async () => {
    setUser(await userService.getById(article.userId));
  }, []);



  return (
    <div>
      {user && (
        <div className="articlePreviewWrapper articlePreview articleSearch">
          <Link to={`/home/blog/${article._id}`} className="leftCardArticle">
            <img src={user.profilePicture} />
            <p>{user.username}</p>
          </Link>
          <div className="rightCardArticle">
            <Link to={`/home/blog/${article._id}`} className="subjectArticle">
              {article.subject}
              <span>{article.tech}</span>
            </Link>
            <div className="bottomCard">
              <Link to={`/home/blog/${article._id}`} className="leftBottomCard">
                <p className="viewArticle">
                  {article.view} <span>Views</span>
                </p>
                <p className="dateArticle">{article.date}</p>
              </Link>
              <div className="rightBottomCard">
                {loggedInUser._id === article.userId && (
                  <DeleteIcon
                    className="delIcon"
                    onClick={() => {removeArticle(article._id)}}
                  />
                )}
                <VisibilityIcon className="eyesIcon" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
