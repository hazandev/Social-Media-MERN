import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import { Articles, CommentsArticle, Users } from "../../data/dummyData";
import { useSelector } from "react-redux";
import { Comment } from "../Comment";


export const Article = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60ch',
      },
    },
  }));
  
  const { id } = useParams();
  const comments = CommentsArticle.filter((comment) => comment.articleId == id);
  const classes = useStyles();
  const [comment, setComment] = useState("");

  const [article, setArticle] = useState(Articles[id - 1]);

  const [author, setAuthor] = useState(Users[article.userId - 1]);

  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);

  return (
    <div className="article">
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
          {article.tags && article.tags.map((tag, index) => (
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
         <input type="text" onChange={()=>{setComment()}} placeholder="Add Comment"/>
          <button>Comment</button>
        </div>
        <div className="comments">
          <h6>{comments.length} Comments</h6>
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};
const articleContent1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, omnis a. Doloribus, ad commodi at accusamus ducimus architecto harum natus soluta quasi aperiam molestias repellendus neque, maiores quia consequuntur error, sunt inventore numquam debitis. Consectetur, blanditiis corrupti eius quod aliquam et, voluptatum ad a doloremque totam unde! Molestias nesciunt pvoluptatum dignissimos aliquid itaque similique ducimus sint eum error. Ipsam beatae reiciendis perspiciatis. Asperiores possimus. `;

const articleContent2 = `erspiciatis numquam corrupti necessitatibus doloremque iste est iusto pariatur ratione. Recusandae reprehenderit consequuntur, perspiciatis est sunt iusto libero nesciunt placeat accusantium fuga esse dignissimos numquam omnis iure vitae neque, hic repudiandae veniam amet quasi molestiae cum quisquam fugit rerum. Ab eius quasi repudiandae consectetur quia cumque nostrum. Dolorem maiores soluta eaque reiciendis facilis deleniti, obcaecati porro enim placeat quis eius odit explicabo! Expedita excepturi adipisci alias aliquid doloremque aut mollitia ratione! Ad vero ea beatae, rerum consequatur assumenda distinctio autem, voluptatem fuga facere quas itaque ex illo dolore repudiandae quam omnis praesentium velit modi laborum alias eius animi voluptate debitis? Amet quo earum, e vero consectetur tempora cum debitis magnam animi, obcaecati pariatur eos non ducimus quos, fugiat enim! Fuga ex in natus nostrum earum iusto! Voluptatum nulla reprehenderit, perspiciatis ipsam ullam quam vero omnis animi ducimus et pariatur. Sunt aut soluta magni neque, similique deserunt atque, beatae nesciunt dolore et, deleniti exercitationem saepe error reiciendis? Dicta doloribus`;

const articleContent3 = `perspiciatis exercitationem est culpa temporibus ipsam quisquam. Rem tempora esse voluptate maiores veniam atque rerum ullam maxime explicabo saepe asperiores veritatis debitis neque aut, blanditise commodi dignissimos corrupti dicta eveniet non magni optio cumque veritatis qui, consectetur, totam itaque accusamus.`;
