import { useNavigate } from "react-router-dom";

import "./CategoryTable.css";

function CategoryTable({

    categories,

    onDelete

}) {

    const navigate = useNavigate();

    return (

        <div className="category-table-wrapper">

            <div className="table-header">

                <h3>

                    Categories

                </h3>

                <button

                    className="btn btn-primary"

                    onClick={() =>

                        navigate("/admin/categories/add")

                    }

                >

                    Add Category

                </button>

            </div>

            <table className="table">

                <thead>

                    <tr>

                        <th>Image</th>

                        <th>Name</th>

                        <th>Slug</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        categories.map(category => (

                            <tr key={category.id}>

                                <td>

                                    <img

                                        src={`/images/categories/${category.image}`}

                                        alt={category.name}

                                        className="category-image"

                                    />

                                </td>

                                <td>

                                    {category.name}

                                </td>

                                <td>

                                    {category.slug}

                                </td>

                                <td>

                                    <button

                                        className="btn btn-warning btn-sm me-2"

                                        onClick={() =>

                                            alert("Edit page will be added next.")

                                        }

                                    >

                                        <i className="bi bi-pencil"></i>

                                    </button>

                                    <button

                                        className="btn btn-danger btn-sm"

                                        onClick={() =>

                                            onDelete(category.id)

                                        }

                                    >

                                        <i className="bi bi-trash"></i>

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default CategoryTable;