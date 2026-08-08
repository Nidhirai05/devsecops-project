import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {

  if (products.length === 0) {

    return (

      <div className="text-center py-5">

        <i
          className="bi bi-bag-x"
          style={{
            fontSize: "60px",
            color: "#7C3AED"
          }}
        ></i>

        <h3 className="mt-3">

          No Products Found

        </h3>

        <p>

          Try another category.

        </p>

      </div>

    );

  }

  return (

    <div className="row g-4">

      {

        products.map((product) => (

          <div
            className="col-12 col-sm-6 col-lg-4"
            key={product.id}
          >

            <ProductCard product={product} />

          </div>

        ))

      }

    </div>

  );

}

export default ProductGrid;