import { UserSearchPrev } from "./UserSearchPrev";
import { ArticlePreview } from "../article/ArticlePreview";
import { CoursePreview } from "../course/CoursePreview";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
export const SearchList = ({ category, listSearch }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    console.log("mount", listSearch, category);
  }, []);
  const clearSearch = () => {
    const searchText = "";
    dispatch({ type: "EDIT_SEARCH", searchText });
  };

  return (
    <div className="boxSearch animate__animated animate__fadeIn">
      {category === "Users" &&
        listSearch.map((el) => (
          <div
            className="itemSearch"
            onClick={() => {
              clearSearch();
              history.push(`/home/${el.id}`);

            }}
          >
            <UserSearchPrev user={el} />
          </div>
        ))}
      {category === "Articles" &&
        listSearch.map((el) => (
          <div
            className="itemSearch"
            onClick={() => {
              clearSearch();
            }}
          >
            <ArticlePreview article={el} />
          </div>
        ))}
      {category === "Courses" &&
        listSearch.map((el) => (
          <div
            className="itemSearch"
            onClick={() => {
              clearSearch();
            }}
          >
            <CoursePreview course={el} />
          </div>
        ))}
    </div>
  );
};
