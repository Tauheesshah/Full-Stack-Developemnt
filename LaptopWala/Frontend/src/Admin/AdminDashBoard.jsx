import React from "react";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">

      <h1 className="dashboard-title">
        Dashboard
      </h1>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h2>Total Products</h2>
          <p>120</p>
        </div>

        <div className="dashboard-card">
          <h2>Total Orders</h2>
          <p>45</p>
        </div>

        <div className="dashboard-card">
          <h2>Total Users</h2>
          <p>80</p>
        </div>

        <div className="dashboard-card">
          <h2>Total Revenue</h2>
          <p>₹2,50,000</p>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;