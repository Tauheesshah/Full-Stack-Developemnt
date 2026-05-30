import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "../Layouts/UserLayout";
import AdminLayout from "../Layouts/AdminLayout";

import Home from "../Pages/Home";
import ContactUs from "../Pages/Navbar/ContactUs";
import Cart from "../Pages/Navbar/Cart";
import Wishlist from "../Pages/Navbar/Wishlist";

import Login from "../Pages/Login_signUp/Login";
import Signup from "../Pages/Login_signUp/SignUp";

import ProfileLayout from "../Pages/Profiles/ProfileLayout";

import AdminDashboard from "../Admin/AdminDashBoard";

import ProtectedRoute from "../Routes/ProtectedRoutes";
import AddProduct from "../Admin/AddProduct";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/Products/ProductDetails";
import FilteredProducts from "../Pages/Products/FilteredProducts";
import ReturnPolicy from "../Pages/Footer/ReturnPolicy";
import ReplacementPolicy from "../Pages/Footer/ReplacementPolicy";
import ShippingPolicy from "../Pages/Footer/ShippingPolicy";
import WarrantyPolicy from "../Pages/Footer/WarrantyPolicy";
import My_Rewards from "../Pages/Profiles/My_Rewards";
import MyAddress from "../Pages/Profiles/MyAddress";
import Return_Request from "../Pages/Profiles/Return_Request";
import Help_Support from "../Pages/Profiles/Help_Support";
import My_Order from "../Pages/Profiles/My_Order";
import MyProfile from "../Pages/Profiles/My_Profile";


const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* USER ROUTES */}

        <Route element={<UserLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/ContactUs" element={<ContactUs />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          
          <Route
            path="/Cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />

          <Route path="/products" element={<Products />} />

          <Route path="/product/:id" element={<ProductDetails />} />


          <Route path="/products/:type/:value" element={<FilteredProducts />}/>

          <Route path="/return-policy" element={<ReturnPolicy />} />

          <Route path="/replacement-policy" element={<ReplacementPolicy />} />

          <Route path="/shipping-policy" element={<ShippingPolicy />} />

          <Route path="/warranty-policy" element={<WarrantyPolicy />} />

          <Route path="/profile" element={<ProfileLayout />}>

            <Route index element={<MyProfile  />} />
          
            <Route path="rewards" element={<My_Rewards />}/>
          
            <Route path="address" element={<MyAddress />}/>
          
            <Route path="orders" element={<My_Order />}/>
          
            <Route path="returns" element={<Return_Request />}/>
          
            <Route path="support" element={<Help_Support />}/>
          
          </Route>




        </Route>

        



        {/* ADMIN ROUTES */}

        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard" element={<AdminDashboard />} />       
          <Route path="add-product" element={<AddProduct />} />       

        </Route>
    </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;