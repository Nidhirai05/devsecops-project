import ProductCard from "../product/ProductCard";
import "./FeaturedProducts.css";
import { allProducts } from "../../data/products";

function FeaturedProducts() {

 

  return (

    <section className="featured-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2 className="section-title">
            Featured Collection
          </h2>

          <p className="section-subtitle">
            Discover our most loved fashion picks.
          </p>

        </div>

        <div className="row g-4">

          {

            allProducts.slice(0, 8).map(product => (

              <div
                className="col-12 col-sm-6 col-lg-3"
                key={product.id}
              >

                <ProductCard product={product} />

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default FeaturedProducts;