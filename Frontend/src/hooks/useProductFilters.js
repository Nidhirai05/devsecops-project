import { useMemo, useState } from "react";

function useProductFilters(products) {

    const [searchTerm, setSearchTerm] = useState("");

    const [sortBy, setSortBy] = useState("newest");

    const [selectedPrice, setSelectedPrice] = useState("");

    const [selectedSizes, setSelectedSizes] = useState([]);

    const [selectedColors, setSelectedColors] = useState([]);

    const [selectedDiscount, setSelectedDiscount] = useState("");

    const [inStockOnly, setInStockOnly] = useState(false);

    const displayedProducts = useMemo(() => {

        let filtered = [...products];

        // Search
        if (searchTerm) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Price
        if (selectedPrice === "under500") {
            filtered = filtered.filter(product => product.price < 500);
        }

        if (selectedPrice === "500-1000") {
            filtered = filtered.filter(product =>
                product.price >= 500 && product.price <= 1000
            );
        }

        if (selectedPrice === "1000-2000") {
            filtered = filtered.filter(product =>
                product.price > 1000 && product.price <= 2000
            );
        }

        if (selectedPrice === "2000+") {
            filtered = filtered.filter(product => product.price > 2000);
        }

        // Size
        if (selectedSizes.length > 0) {
            filtered = filtered.filter(product =>
                selectedSizes.includes(product.size)
            );
        }

        // Color
        if (selectedColors.length > 0) {
            filtered = filtered.filter(product =>
                selectedColors.includes(product.color)
            );
        }

        // Discount
        if (selectedDiscount) {
            filtered = filtered.filter(product =>
                product.discount >= Number(selectedDiscount)
            );
        }

        // Stock
        if (inStockOnly) {
            filtered = filtered.filter(product =>
                product.stockQuantity > 0
            );
        }

        // Sorting
        switch (sortBy) {

            case "price-low":
                filtered.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                filtered.sort((a, b) => b.price - a.price);
                break;

            case "discount":
                filtered.sort((a, b) => b.discount - a.discount);
                break;

            case "name":
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;

            default:
                break;
        }

        return filtered;

    }, [
        products,
        searchTerm,
        sortBy,
        selectedPrice,
        selectedSizes,
        selectedColors,
        selectedDiscount,
        inStockOnly
    ]);

    return {

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

    };
}

export default useProductFilters;