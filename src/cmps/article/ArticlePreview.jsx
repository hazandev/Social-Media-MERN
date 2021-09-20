import React from "react";
import { Users } from "../../data/dummyData";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Link, useHistory } from "react-router-dom";
import { blogService } from "../../services/blogService";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector } from "react-redux";

export const ArticlePreview = ({ article }) => {
  let history = useHistory();
  const user = Users[article.userId - 1];
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);

  const removeArticle = (id) => {
    blogService.remove(id);
    history.push(`/home/blog`);
  };

  return (
    <Link className="articlePreview articleSearch" to={`/home/blog/${article.id}`}>
      <div className="leftCardArticle">
        <img src={user.profilePicture} />
        <p>{user.username}</p>
      </div>
      <div className="rightCardArticle">
        <p className="subjectArticle">
          {article.subject}
          <span>{article.tech}</span>
        </p>
        <div className="bottomCard">
          <div className="leftBottomCard">
            <p className="viewArticle">
              {article.view} <span>Views</span>
            </p>
            <p className="dateArticle">{article.date}</p>
          </div>
          <div className="rightBottomCard">
            {loggedInUser.id === article.userId && (
              <DeleteIcon
                className="delIcon"
                onClick={() => {
                  removeArticle(article.id);
                }}
              />
            )}
            <VisibilityIcon className="eyesIcon" />
          </div>
        </div>
      </div>
    </Link>
  );
};
