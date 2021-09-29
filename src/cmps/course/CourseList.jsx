import { CoursePreview } from "./CoursePreview";
import { Courses } from "../../data/dummyData";

export const CourseList = () => {
  return (
    <div className="productList">
      {Courses.map((course) => (
        <CoursePreview key={course._id} course={course} />
      ))}
    </div>
  );
};
