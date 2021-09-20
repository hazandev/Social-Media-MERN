export const CoursePreview = ({course}) => {
  return (
    <div className="productPreview courseSearch">
      <div className="productTop">
        <p className="productName bold">{course.tech}</p>
        <img src={course.photo} alt="" />
      </div>
      <div className="productBottom">
        <span>Price: {course.price}$</span>
        <button className="btn productBuy">Learn</button>
      </div>
    </div>
  );
};
