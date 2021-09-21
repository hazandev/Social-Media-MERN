import { useParams } from "react-router-dom";
import { courseService } from "../../services/courseService";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import LanguageIcon from "@material-ui/icons/Language";
import CodeIcon from '@material-ui/icons/Code';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

export const CourseSide = () => {
  const { id } = useParams();
  const course = courseService.getById(id);

  return (
    <div className="courseSide">
      <img src={course.photo} alt="" />
      <div className="content flex column center">
        <p className="price">{course.price} $</p>
        <button>Buy Now</button>
        <div className="sideDetails">
          <h6>This course includes:</h6>
          <ul>
            <li>
              <i>
                <LiveTvIcon className="iconSide" />
              </i>
              {course.time} hours video
            </li>
            <li>
              <i>
                <CodeIcon className="iconSide" />
              </i>
              <p>13 coding exercises</p>
            </li>
            <li>
              <i>
                <AllInclusiveIcon className="iconSide" />
              </i>
              <p>Full lifetime access</p>
            </li>
            <li>
              <i>
                <PhoneAndroidIcon className="iconSide" />
              </i>
              <p>Access on mobile and TV</p>
            </li>
          </ul>
        </div>
        <p className="bold mt-1">30-Day Money-Back</p>
      </div>
    </div>
  );
};
