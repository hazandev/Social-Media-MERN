import { useParams } from "react-router-dom";
import { courseService } from "../../services/courseService";
import DoneIcon from "@material-ui/icons/Done";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import LanguageIcon from "@material-ui/icons/Language";

export const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const { id } = useParams();

  useEffect(async () => {
    setCourse(await courseService.getById(id));
  }, []);

  return (
    <div className="courseDetails">
      {course && (
        <div className="cardWrapper">
          <div className="cardTop flex column">
            <div className="topDetails flex column">
              <div className="content">
                <label>{`${course.category} > ${course.tech}`}</label>
                <h2>{course.title}</h2>
                <h6>{course.lead}</h6>
              </div>
            </div>
            <div className="centerDetails flex center">
              <p>
                <Rating
                  name="half-rating-read"
                  defaultValue={course.rate}
                  precision={0.5}
                  readOnly
                />
              </p>
              <p>{course.students} Students</p>
              <p className="flex center">
                <LanguageIcon /> <span className="ps-s">{course.language}</span>
              </p>
              <p>Created by: {course.mentor}</p>
            </div>
            <div className="bottomCard">
              <h4>What you'll learn</h4>
              <ul className="subjectsCourse">
                {course.subjects.map((subject, index) => (
                  <li key={index}>
                    <span>
                      <DoneIcon />
                    </span>{" "}
                    <p>{subject}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
