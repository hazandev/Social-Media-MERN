import { ProductList } from "./product/ProductList";
export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarTitle">Learn Center</div>
        <ul className="rightbarProducts">
          <ProductList />
        </ul>
      </div>
    </div>
  );
};
