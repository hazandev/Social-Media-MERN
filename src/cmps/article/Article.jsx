import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Comment } from "../Comment";
import { blogService } from "../../services/blogService";
import { userService } from "../../services/userService";


export const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [author, setAuthor] = useState(null);
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const [commentsArticle, setCommentsArticle] = useState(null);

  useEffect(async () => {
    const articleById = await blogService.getById(id);
    setArticle(articleById);
  }, []);

  useEffect(async () => {
    if (article) {
      setAuthor(await userService.getById(article.userId));
      setCommentsArticle(await blogService.getCommentsById(article._id));
    }
  }, [article]);

  const [comment, setComment] = useState("");

  const addComment = async () => {
    const newComment = {
      articleId: article._id,
      userId: loggedInUser._id,
      content: `${comment}`,
    };
    const savedComment = await blogService.addComment(newComment);
    setCommentsArticle(await blogService.getCommentsById(article._id));
    setComment('')
  };

  return (
    <div className="article">
      {article && author && (
        <div className="articleWrapper">
          <div className="articleTop">
            <div className="detailsAuthor">
              <img src={author.profilePicture} alt="" />
              <div className="infoAuthor">
                <p>{author.username}</p>
                <label className="bioAuthor">{author.bio}</label>
              </div>
            </div>
            <h3 className="subjectArticle">{article.subject}</h3>
            <div className="detailsArticle">
              <p>{article.date}</p>
            </div>
            <ul className="tags">
              <h6>Tags:</h6>
              {article.tags &&
                article.tags.map((tag, index) => (
                  <li className="tag" key={index}>
                    {tag}
                  </li>
                ))}
            </ul>
          </div>
          <article className="articleContent">
            <p>{article.content.pre}</p>
            <p>{article.content.body}</p>
            <p>{article.content.end}</p>
          </article>
          <div className="articleBottom">
            <div className="addComment">
              <input
                type="text"
                onChange={(ev) => {
                  setComment(ev.target.value);
                  //handleChange
                }}
                value={comment}
                placeholder="Add Comment"
              />
              <button
                onClick={() => {
                  addComment();
                }}
              >
                Comment
              </button>
            </div>
            {commentsArticle && (
              <div className="comments">
                <h6>{commentsArticle.length} Comments</h6>
                {commentsArticle.map((comment) => (
                  <Comment comment={comment} key={comment._id} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
