import { Link } from "react-router-dom";
import "./ProductTable.css";

function ProductTable({ products, onDelete }) {

    return (

        <div className="product-table-wrapper">

            <div className="table-header">

                <h3>Products</h3>

                <Link
                    to="/admin/products/add"
                    className="btn btn-primary"
                >
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Product
                </Link>

            </div>

            <table className="table align-middle">

                <thead>

                    <tr>

                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {products.map(product => (

                        <tr key={product.id}>

                            <td>

                                <img
                                    src={`/images/products/${product.image}`}
                                    alt={product.name}
                                    className="table-product-image"
                                />

                            </td>

                            <td>{product.name}</td>

                            <td>
                                {product.category?.name}
                            </td>

                            <td>₹{product.price}</td>

                            <td>{product.stockQuantity}</td>

                            <td>

                                <Link
                                    to={`/admin/products/edit/${product.id}`}
                                    className="btn btn-warning btn-sm me-2"
                                >
                                    <i className="bi bi-pencil"></i>
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDelete(product.id)}
                                >
                                    <i className="bi bi-trash"></i>
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default ProductTable;