import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductsList from "./pages/products/ProductsList";
import Product from "./pages/products/Product";
import CategoriesList from "./pages/catalog/CategoriesList";
import Category from "./pages/catalog/Category";
import CustomersList from "./pages/customers/CustomersList";
import Customer from "./pages/customers/Customer";
import OrdersList from "./pages/orders/OrdersList";
import OrderDetails from "./pages/orders/OrderDetails";
import Profile from "./pages/settings/Profile";
import Inbox from "./pages/settings/Inbox";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/customers" element={<CustomersList />} />
        <Route path="/customer/:id" element={<Customer />} />
        <Route path="/orders" element={<OrdersList />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
