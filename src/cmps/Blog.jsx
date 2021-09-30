import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { techOption } from "../data/dummyData";
import { ArticlePreview } from "./article/ArticlePreview";
import { blogService } from "../services/blogService";
import { Link } from "react-router-dom";

export const Blog = ({ userId = null }) => {
  const [tech, setTech] = useState("All");
  const [search, setSearch] = useState("");
  const filterArticle = blogService.query(search, tech);
  const [articles, setArticles] = useState(filterArticle);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSelect = (event) => {
    setTech(event.target.value);
  };

  const removeArticle = (id) => {
    blogService.remove(id);
    setArticles(blogService.query(search, tech));
  };

  useEffect(() => {
    const filterArticle = blogService.query(search, tech);
    setArticles(filterArticle);
  }, [search, tech]);

  return (
    <div className="blog animate__animated animate__fadeInLeft animate__faster">
      <div className="blogWrapper">
        <div className="blogTop">
          <div className="searchArticle">
            <form className={""} noValidate autoComplete="off">
              <TextField
                id="standard-search"
                label="Search Article"
                onChange={handleSearch}
                value={search}
                type="search"
              />
            </form>
            <form className={""} noValidate autoComplete="off">
              <TextField
                id="select tech"
                select
                label=""
                value={tech}
                onChange={handleSelect}
                SelectProps={{
                  native: true,
                }}
              >
                {techOption.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </form>
          </div>
          <Link to="/home/blog/add">New</Link>
        </div>
        <div className="listArticle">
          {articles &&
            !userId &&
            articles.map((article) => (
              <ArticlePreview
                article={article}
                key={article._id}
                removeArticle={removeArticle}
              />
            ))}
          {articles &&
            userId &&
            articles.map((article) => {
              if (article.userId == userId) {
                return (
                  <ArticlePreview
                    article={article}
                    key={article._id}
                    removeArticle={removeArticle}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
