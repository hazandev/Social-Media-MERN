import { CourseList } from "./course/CourseList";
export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* <div className="rightbarTitle">Learn Center</div> */}
        <ul className="rightbarProducts">
          <CourseList />
        </ul>
      </div>
    </div>
  );
};
