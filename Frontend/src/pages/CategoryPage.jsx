
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import FilterSidebar from "../components/category/FilterSidebar";
import SortBar from "../components/category/Sortbar";
import ProductGrid from "../components/product/ProductGrid";
import useProductFilters from "../hooks/useProductFilters";
import "./CategoryPage.css";
import { allProducts, banners } from "../data/products.js";

function CategoryPage() {

    const { slug } = useParams();


    const categoryName = slug
        .replace(/-/g, " ")
        .replace(/\b\w/g, letter => letter.toUpperCase());


    const categoryProducts = allProducts.filter(
        product => product.category === slug
    );

    const {
        displayedProducts,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        selectedPrice,
        setSelectedPrice,
        selectedSizes,
        setSelectedSizes,
        selectedColors,
        setSelectedColors,
        selectedDiscount,
        setSelectedDiscount,
        inStockOnly,
        setInStockOnly
    } = useProductFilters(categoryProducts);



    return (

        <>
            <Navbar />

            <div className="category-page">

                <div className="container">

                    {/* Breadcrumb */}

                    <div className="breadcrumb-custom">

                        <Link to="/">Home</Link>

                        <span> / Women / </span>

                        <span>{categoryName}</span>

                    </div>

                    {/* Category Hero */}

                    <div className="category-header">

                        <div className="row align-items-center">

                            <div className="col-lg-6">

                                <h1>{categoryName} Collection</h1>

                                <p>
                                    Discover elegant fashion curated for every occasion with StyleAura.
                                </p>

                            </div>

                            <div className="col-lg-6 text-center">

                                <img
                                    src={banners[slug]}
                                    alt={categoryName}
                                    className="img-fluid rounded-4 shadow"
                                />

                            </div>

                        </div>

                    </div>

                    {/* Products Section */}

                    <div className="row mt-5">

                        <div className="col-lg-3">

                            {/* <FilterSidebar /> */}
                            <FilterSidebar

                                selectedPrice={selectedPrice}
                                setSelectedPrice={setSelectedPrice}

                                selectedSizes={selectedSizes}
                                setSelectedSizes={setSelectedSizes}

                                selectedColors={selectedColors}
                                setSelectedColors={setSelectedColors}

                                selectedDiscount={selectedDiscount}
                                setSelectedDiscount={setSelectedDiscount}

                                inStockOnly={inStockOnly}
                                setInStockOnly={setInStockOnly}

                            />

                        </div>

                        <div className="col-lg-9">

                            <SortBar
                                totalProducts={displayedProducts.length}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                            />

                            <ProductGrid products={displayedProducts} />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default CategoryPage;
