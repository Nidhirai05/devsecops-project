import "./ProductForm.css";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/categoryService";

function ProductForm({ initialData = {}, onSubmit, buttonText }) {

    const [formData, setFormData] = useState({

        name: "",

        categoryId: "",

        price: "",

        originalPrice: "",

        stockQuantity: "",

        size: "",

        color: "",

        description: "",

        image: ""

    });

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        loadCategories();

    }, []);

    useEffect(() => {

        if (!initialData?.id) return;

        setFormData({

            name: initialData.name || "",

            categoryId: initialData.category?.id || "",

            price: initialData.price?.toString() || "",

            originalPrice: initialData.originalPrice?.toString() || "",

            stockQuantity: initialData.stockQuantity?.toString() || "",

            size: initialData.size || "",

            color: initialData.color || "",

            description: initialData.description || "",

            image: initialData.image || ""

        });

    }, [initialData?.id]);
    const loadCategories = async () => {

        try {

            const response = await getAllCategories();

            setCategories(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData(prev => ({

            ...prev,

            [name]: value

        }));

    }

    function handleSubmit(e) {

        e.preventDefault();

        const product = {

            name: formData.name,

            price: Number(formData.price),

            originalPrice: Number(formData.originalPrice),

            discount:
                formData.originalPrice && formData.price
                    ? Math.round(
                        ((Number(formData.originalPrice) - Number(formData.price))
                            / Number(formData.originalPrice)) * 100
                    )
                    : 0,

            size: formData.size,

            color: formData.color,

            stockQuantity: Number(formData.stockQuantity),

            image: formData.image,

            description: formData.description,

            rating: initialData.rating || 0,

            reviews: initialData.reviews || 0,

            category: {

                id: Number(formData.categoryId)

            }

        };

        onSubmit(product);

    }

    return (

        <form
            className="product-form"
            onSubmit={handleSubmit}
        >

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label>Product Name</label>

                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label>Category</label>

                    <select
                        name="categoryId"
                        className="form-select"
                        value={formData.categoryId}
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Category
                        </option>

                        {categories.map(category => (

                            <option
                                key={category.id}
                                value={category.id}
                            >

                                {category.name}

                            </option>

                        ))}

                    </select>

                </div>

            </div>

            <div className="row">

                <div className="col-md-4 mb-3">

                    <label>Price</label>

                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        value={formData.price}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-md-4 mb-3">

                    <label>Original Price</label>

                    <input
                        type="number"
                        name="originalPrice"
                        className="form-control"
                        value={formData.originalPrice}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-md-4 mb-3">

                    <label>Stock</label>

                    <input
                        type="number"
                        name="stockQuantity"
                        className="form-control"
                        value={formData.stockQuantity}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label>Size</label>

                    <input
                        type="text"
                        name="size"
                        className="form-control"
                        value={formData.size}
                        onChange={handleChange}
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label>Color</label>

                    <input
                        type="text"
                        name="color"
                        className="form-control"
                        value={formData.color}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <div className="mb-3">

                <label>Image Name</label>

                <input
                    type="text"
                    name="image"
                    className="form-control"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="kurti1.jpg"
                />

            </div>

            <div className="mb-4">

                <label>Description</label>

                <textarea
                    rows="4"
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                />

            </div>

            <button
                type="submit"
                className="btn btn-primary"
            >

                {buttonText}

            </button>

        </form>

    );

}

export default ProductForm;