export const ProductPreview = ({course}) => {
  return (
    <div className="productPreview">
      <div className="productTop">
        <p className="productName bold">{course.tech}</p>
        <img src={course.photo} alt="" />
      </div>
      <div className="productBottom">
        <span>Price: {course.price}$</span>
        <button className="btn productBuy">Buy</button>
      </div>
    </div>
  );
};
