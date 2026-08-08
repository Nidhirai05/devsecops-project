import { useSearchParams } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProductGrid from "../components/product/ProductGrid";

import { allProducts } from "../data/products";

function SearchResults() {

    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    const products = allProducts.filter(product =>

        product.name
            .toLowerCase()
            .includes(query.toLowerCase())

    );

    return (

        <>
            <Navbar />

            <div className="container py-5">

                <h4>

                    Search Results for

                    <span className="text-primary">

                        {" "} "{query}"

                    </span>

                </h4>

                <p>

                    {products.length} Products Found

                </p>

                <ProductGrid
                    products={products}
                />

            </div>

            <Footer />

        </>

    );

}

export default SearchResults;