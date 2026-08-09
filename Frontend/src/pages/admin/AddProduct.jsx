import AdminLayout from "../../components/admin/AdminLayout";
import ProductForm from "../../components/admin/ProductForm";

import { addProduct } from "../../services/productService";
import { useNavigate } from "react-router-dom";

function AddProduct() {

    const navigate = useNavigate();

    async function handleAddProduct(data) {

        try {

            await addProduct(data);

            // setFormData({
            //     name: "",
            //     category: "",
            //     price: "",
            //     originalPrice: "",
            //     stockQuantity: "",
            //     size: "",
            //     color: "",
            //     description: "",
            //     image: ""
            // });

            alert("Product Added Successfully");

            navigate("/admin/products");

        } catch (error) {

            console.log(error);

            alert("Unable to add product");

        }

    }

    return (

        <AdminLayout>

            <h3 className="mb-4">

                Add Product

            </h3>

            <ProductForm

                onSubmit={handleAddProduct}

                buttonText="Add Product"

            />

        </AdminLayout>

    );

}

export default AddProduct;