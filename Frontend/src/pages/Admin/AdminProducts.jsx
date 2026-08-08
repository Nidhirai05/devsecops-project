import AdminLayout from "../../components/admin/AdminLayout";
import ProductTable from "../../components/admin/ProductTable";

import { useEffect, useState } from "react";
import { getAllProducts, deleteProduct } from "../../services/productService";

function AdminProducts() {


    const [products, setProducts] = useState([]);

    useEffect(() => {

        loadProducts();

    }, []);

    const loadProducts = async () => {

        try {

            const response = await getAllProducts();

            setProducts(response.data);

        }

        catch (err) {

            console.log(err);

        }

    };


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this product?"
        );

        if (!confirmDelete)
            return;

        try {

            await deleteProduct(id);

            loadProducts();

        }

        catch (error) {

            console.log(error);

            alert("Unable to delete");

        }

    };

    return (

        <AdminLayout>

            <ProductTable
                products={products}
                onDelete={handleDelete}
            />

        </AdminLayout>

    );

}

export default AdminProducts;