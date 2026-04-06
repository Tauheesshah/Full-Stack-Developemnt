import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Left_Side_Nav } from "./Components/Left_Side_Nav";
import { Top_Navbar } from "./Components/Top_Navbar";
import ProtectedRoute from "./Routes/ProtectedRoute"; 

// Pages
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import Calendar from "./Pages/Calendar";
import Tasks from "./Pages/Tasks";
import Reporting from "./Pages/Reporting";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export function App() {
  return (
    <BrowserRouter>
      
      <div className="app">

        {/* Sidebar */}
        <Left_Side_Nav />

        {/* Right Side */}
        <div className="main">

          {/* Navbar */}
          <Top_Navbar />

          {/* Dynamic Content */}
          <div className="page-content">
            <Routes>
              <Route path="/" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
                } />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
                } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/reporting" element={<Reporting />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>

        </div>

      </div>

    </BrowserRouter>
  );
}