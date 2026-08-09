import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import CategoryTable from "../../components/admin/CategoryTable";

import {
    getAllCategories,
    deleteCategory
} from "../../services/categoryService";

function AdminCategories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        loadCategories();

    }, []);

    const loadCategories = async () => {

        try {

            const response = await getAllCategories();

            setCategories(response.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this category?"
        );

        if (!confirmDelete)
            return;

        try {

            await deleteCategory(id);

            loadCategories();

        }

        catch (error) {

            console.log(error);

            alert("Unable to delete category");

        }

    };

    return (

        <AdminLayout>

            <CategoryTable

                categories={categories}

                onDelete={handleDelete}

            />

        </AdminLayout>

    );

}

export default AdminCategories;