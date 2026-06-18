import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Placements from "../pages/Placements";
import SuccessStories from "../pages/SuccessStories";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import CourseDetails from "../pages/CourseDetails";

import ProtectedRoute from "../ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/placements"
          element={
            <ProtectedRoute>
              <Placements />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/success-stories"
          element={
            <ProtectedRoute>
              <SuccessStories />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/courses/:slug"
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;