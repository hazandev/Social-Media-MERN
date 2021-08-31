import { ProductPreview } from "./ProductPreview";
import { Courses } from "../../data/dummyData";

export const ProductList = () => {
  return (
    <div className="productList">
      {Courses.map((course) => (
        <ProductPreview key={course.id} course={course} />
      ))}
    </div>
  );
};
