import "./Sortbar.css";

function SortBar({
    totalProducts,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy
}) {

    return (

        <div className="sortbar">

    <div className="product-count">
        Showing <strong>{totalProducts}</strong> Products
    </div>

    <div className="sort-actions">

        <div className="search-box-category">

            <div className="input-group">

                <span className="input-group-text">
                    <i className="bi bi-search"></i>
                </span>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Search in category..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

            </div>

        </div>

        <div className="sort-section">

            <label>Sort By</label>

            <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Highest Discount</option>
                <option value="name">Name A-Z</option>
            </select>

        </div>

    </div>

</div>

    );

}

export default SortBar;
