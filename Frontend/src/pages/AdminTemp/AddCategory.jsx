import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout";
import { addCategory } from "../../services/categoryService";

import "./AddCategory.css";

function AddCategory() {

    const navigate = useNavigate();

    const [categoryName, setCategoryName] = useState("");
    const [slug, setSlug] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!categoryName || !slug) {

            alert("Please fill all fields.");
            return;
        }

        try {

            const category = {

                name: categoryName,
                slug: slug,
                image: image

            };

            console.log("Sending Category:", category);

            await addCategory(category);

            alert("Category Added Successfully");

            setCategoryName("");
            setSlug("");
            setImage("");

            navigate("/admin/categories");

        }
        catch (error) {

            console.log(error);

            console.log(error.response);

            alert(
                error.response?.data?.message ||
                "Unable to add category"
            );

        }

    };

    return (

        <AdminLayout>

            <div className="category-form-card">

                <h3 className="mb-4">
                    Add Category
                </h3>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Category Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Slug
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="western-wear"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">
                            Image Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="kurtis.jpg"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Add Category
                    </button>

                </form>

            </div>

        </AdminLayout>

    );

}

export default AddCategory;