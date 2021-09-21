import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CoursePreview } from "../cmps/course/CoursePreview";
import { courseService } from "../services/courseService";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value} $`;
}

export const Course = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();
  const [value, setValue] = useState([0, 60]);
  const filterCourse = courseService.query(search,value);
  const handleSlider = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="course">
      <form action="" className="filterCourse">
        <div>
          <TextField
            id="standard-search"
            label="Search Course"
            onChange={handleSearch}
            value={search}
            type="search"
          />
        </div>
        <div className="flex center basline">
          <div className={`${classes.root}`}>
            <Typography id="range-slider" gutterBottom>
              Price
            </Typography>
            <Slider
              value={value}
              onChange={handleSlider}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </div>
          <p className="sliderValue">{`${value[0]}$`} <span>-</span> {` ${value[1]} $`}</p>
        </div>
      </form>
      <div className="productList courseList">
        {filterCourse.map((course) => (
          <CoursePreview key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
