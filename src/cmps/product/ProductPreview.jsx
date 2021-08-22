export const ProductPreview = () => {
  return (
    <div className="productPreview">
      <div className="productTop">
        <p className="productName bold">HTML & CSS</p>
        <img src="img/product/HTML.jpg" alt="" />
      </div>
      <div className="productBottom">
        <span>Price: 59.99$</span>
        <button className="btn productBuy">Buy</button>
      </div>
    </div>
  );
};
