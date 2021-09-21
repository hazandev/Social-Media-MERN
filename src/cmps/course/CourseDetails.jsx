import { useParams } from "react-router-dom";
import { courseService } from "../../services/courseService";
import DoneIcon from "@material-ui/icons/Done";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import LanguageIcon from "@material-ui/icons/Language";

export const CourseDetails = () => {
  const { id } = useParams();

  const course = courseService.getById(id);
  const {
    photo,
    mentor,
    price,
    category,
    title,
    lead,
    students,
    language,
    subjects,
    time,
    tech,
    rate,
  } = course;
  const [rating, setRating] = useState(rate);

  return (
    <div className="courseDetails">
      {course && (
        <div className="cardWrapper">
          <div className="cardTop flex column">
            <div className="topDetails flex column">
              <div className="content">
                <label>{`${category} > ${tech}`}</label>
                <h2>{title}</h2>
                <h6>{lead}</h6>
              </div>
            </div>
            <div className="centerDetails flex center">
              <p>
                <Rating
                  name="half-rating-read"
                  defaultValue={rating}
                  precision={0.5}
                  readOnly
                />
              </p>
              <p>{students} Students</p>
              <p className="flex center">
                <LanguageIcon /> <span className="ps-s">{language}</span>
              </p>
              <p>Created by: {mentor}</p>
            </div>
            <div className="bottomCard">
              <h4>What you'll learn</h4>
              <ul className="subjectsCourse">
                {subjects.map((subject) => (
                  <li>
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
