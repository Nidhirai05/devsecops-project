import { useMemo, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import FilterSidebar from "../components/category/FilterSidebar";
import SortBar from "../components/category/SortBar";
import ProductGrid from "../components/product/ProductGrid";
import useProductFilters from "../hooks/useProductFilters";
import { allProducts } from "../data/products";

import "./AllProducts.css";

function AllProducts() {

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
    } = useProductFilters(allProducts);




    return (

        <>

            <Navbar />

            <div className="all-products-page">

                <div className="container">

                    {/* Header */}

                    <div className="all-products-header">

                        <h1>All Products</h1>

                        <p>

                            Explore every women's fashion collection at StyleAura.

                        </p>

                    </div>

                    <div className="row">

                        <div className="col-lg-3">

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

                            <ProductGrid

                                products={displayedProducts}

                            />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default AllProducts;