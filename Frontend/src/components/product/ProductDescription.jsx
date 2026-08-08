import "./ProductDescription.css";

function ProductDescription({ product }) {

    return (

        <div className="product-description">

            <h3>Description</h3>

            <p>

                {product.description}

            </p>

            <hr />

            <h3>Product Highlights</h3>

            <ul>

                <li>Premium Quality Fabric</li>

                <li>Comfortable All Day Wear</li>

                <li>Machine Washable</li>

                <li>Soft & Breathable Material</li>

                <li>Perfect For Casual & Festive Wear</li>

            </ul>

            <hr />

            <h3>Specifications</h3>

            <table className="table">

                <tbody>

                    <tr>
                        <th>Category</th>
                        <td>{product.category}</td>
                    </tr>

                    <tr>
                        <th>Size</th>
                        <td>{product.size}</td>
                    </tr>

                    <tr>
                        <th>Color</th>
                        <td>{product.color}</td>
                    </tr>

                    <tr>
                        <th>Availability</th>
                        <td>

                            {product.stockQuantity > 0
                                ? "In Stock"
                                : "Out of Stock"}

                        </td>
                    </tr>

                </tbody>

            </table>

        </div>

    );

}

export default ProductDescription;