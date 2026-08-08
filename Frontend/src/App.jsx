import { Routes, Route } from "react-router-dom";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDeatils";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyOrders from "./pages/MyOrders";
import AdminProducts from "./pages/admin/AdminProducts";
import AddProduct from "./pages/Admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import AdminCategories from "./pages/Admin/AdminCategories";
import AdminOrders from "./pages/admin/AdminOrders";
import ProtectedUserRoute from "./routes/ProtectedUserRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddCategory from "./pages/admin/AddCategory";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/category/:slug"
        element={<CategoryPage />}
      />

      <Route
        path="/search"
        element={<SearchResults />}
      />

      <Route
        path="/products"
        element={<AllProducts />}
      />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route

        path="/cart"

        element={

          <ProtectedUserRoute>

            <CartPage />

          </ProtectedUserRoute>

        }

      />

      <Route

        path="/checkout"

        element={

          <ProtectedUserRoute>

            <CheckoutPage />

          </ProtectedUserRoute>

        }

      />

      <Route

        path="/orders"

        element={

          <ProtectedUserRoute>

            <MyOrders />

          </ProtectedUserRoute>

        }
      />

      <Route

        path="/order-success"

        element={<OrderSuccess />}

      />
      <Route

        path="/login"

        element={<Login />}

      />

      <Route

        path="/register"

        element={<Register />}

      />


      <Route
        path="/admin/products"
        element={ <ProtectedAdminRoute><AdminProducts /></ProtectedAdminRoute>}
      />

      <Route
        path="/admin/products/add"
        element={ <ProtectedAdminRoute><AddProduct /></ProtectedAdminRoute>}
      />

      <Route
        path="/admin/products/edit/:id"
        element={<ProtectedAdminRoute><EditProduct /></ProtectedAdminRoute>}
      />

      <Route

        path="/admin/categories"

        element={<ProtectedAdminRoute><AdminCategories /></ProtectedAdminRoute>}

      />

      <Route
        path="/admin/categories/add"
        element={
          <ProtectedAdminRoute>
            <AddCategory />
          </ProtectedAdminRoute>
        }
      />
      <Route

        path="/admin/orders"

        element={<ProtectedAdminRoute><AdminOrders /></ProtectedAdminRoute>}

      />

      <Route

        path="/admin/dashboard"

        element={

          <ProtectedAdminRoute>

            <AdminDashboard />

          </ProtectedAdminRoute>

        }

      />

      <Route

        path="*"

        element={<NotFound />}

      />

    </Routes>


  );
}

export default App;