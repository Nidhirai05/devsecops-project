import { Link, useParams } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import SimilarProducts from "../components/product/SimilarProducts";
import ProductDescription from "../components/product/ProductDescription";
import { allProducts } from "../data/products";

import "./ProductDetails.css";

function ProductDetails() {

    const { id } = useParams();

    const product = allProducts.find(
        item => item.id === Number(id)
    );

    if (!product) {

        return (

            <>
                <Navbar />

                <div className="container py-5 text-center">

                    <h2>Product Not Found</h2>

                    <Link
                        to="/products"
                        className="btn btn-primary mt-3"
                    >
                        Back to Products
                    </Link>

                </div>

                <Footer />

            </>

        );

    }

    const similarProducts = allProducts.filter(

        item =>
            item.category === product.category &&
            item.id !== product.id

    );

    return (

        <>

            <Navbar />

            <div className="product-details-page">

                <div className="container">

                    {/* Breadcrumb */}

                    <div className="breadcrumb-custom">

                        <Link to="/">Home</Link>

                        <span> / </span>

                        <Link to={`/category/${product.category}`}>

                            {product.category
                                .replace(/-/g, " ")
                                .replace(/\b\w/g, c => c.toUpperCase())}

                        </Link>

                        <span> / </span>

                        <span>{product.name}</span>

                    </div>

                    {/* Main Section */}

                    <div className="row mt-4">

                        <div className="col-lg-6">

                            <ProductGallery product={product} />

                        </div>

                        <div className="col-lg-6">

                            <ProductInfo product={product} />

                        </div>

                    </div>

                    {/* Similar Products */}

                    {/* Product Description */}

                    <div className="mt-5">

                        <ProductDescription product={product} />

                    </div>

                    {/* Similar Products */}

                    <div className="mt-5">

                        <SimilarProducts
                            products={similarProducts}
                            title="You May Also Like"
                        />

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default ProductDetails;
