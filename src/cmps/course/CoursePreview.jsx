import { Link } from "react-router-dom";

export const CoursePreview = ({course}) => {
  return (
    <div className="productPreview courseSearch">
      <div className="productTop">
        <p className="productName bold">{course.tech}</p>
        <img src={course.photo} alt="" />
      </div>
      <div className="productBottom">
        <span>Price: {course.price}$</span>
        <Link className="btn productBuy" to={`/home/course/${course._id}`}>Learn</Link>
      </div>
    </div>
  );
};
