import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AdminLayout from "../../components/admin/AdminLayout";
import ProductForm from "../../components/admin/ProductForm";

import {
    getProductById,
    updateProduct
} from "../../services/productService";

function EditProduct() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        loadProduct();

    }, []);

    const loadProduct = async () => {

        try {

            const response = await getProductById(id);

            setProduct(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleUpdateProduct = async (data) => {

        try {

            await updateProduct(id, data);

            alert("Product Updated Successfully");

            navigate("/admin/products");

        }

        catch (error) {

            console.log(error);

            alert("Unable to update product");

        }

    };

    if (!product) {

        return (

            <AdminLayout>

                <h3>Loading...</h3>

            </AdminLayout>

        );

    }

    return (

        <AdminLayout>

            <h3 className="mb-4">

                Edit Product

            </h3>

            <ProductForm

                initialData={product}

                onSubmit={handleUpdateProduct}

                buttonText="Update Product"

            />

        </AdminLayout>

    );

}

export default EditProduct;