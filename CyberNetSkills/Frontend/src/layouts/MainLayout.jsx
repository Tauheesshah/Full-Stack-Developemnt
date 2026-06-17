import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;