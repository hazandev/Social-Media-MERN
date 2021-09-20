import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CoursePreview } from "../cmps/course/CoursePreview";
import { courseService } from "../services/courseService";

export const Course = () => {
  const [search, setSearch] = useState("");
  const filterCourse = courseService.query(search);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="course">
      <form action="">
        <TextField
          id="standard-search"
          label="Search Course"
          onChange={handleSearch}
          value={search}
          type="search"
        />
      </form>
      <div className="productList courseList">
        {filterCourse.map((course) => (
          <CoursePreview key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
