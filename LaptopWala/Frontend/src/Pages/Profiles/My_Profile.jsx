import React, {
  useState,
  useEffect,
} from "react";

import "../../CSS/ProfileLayout.css";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import axios from "axios";

import {
  login,
  logout,
} from "../../Redux_Slicer/authSlice";

import {
  useNavigate,
  NavLink,
} from "react-router-dom";

const MyProfile = () => {

  const [successMessage, setSuccessMessage] =
    useState("");

  const { user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // FORM STATES
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  // LOAD USER
  useEffect(() => {

    if (user) {

      setName(user.name || "");

      setEmail(user.email || "");

      setPhone(user.phone || "");

    }

  }, [user]);

  // SIDEBAR MENU
  const menuItems = [

    {
      name: "My Profile",
      icon: "👤",
      path: "/profile",
    },

    {
      name: "My Rewards",
      icon: "🏆",
      path: "/profile/rewards",
    },

    {
      name: "My Address",
      icon: "📍",
      path: "/profile/address",
    },

    {
      name: "My Orders",
      icon: "🛍️",
      path: "/profile/orders",
    },

    {
      name: "Return Requests",
      icon: "↩️",
      path: "/profile/returns",
    },

    {
      name: "Help / Support",
      icon: "💁‍♂️",
      path: "/profile/support",
    },

  ];

  // SAVE PROFILE
  const saveProfile = async () => {

    try {

      const { data } = await axios.put(
        "http://localhost:5000/api/auth/profile",
        {
          name,
          email,
          phone,
        },
        {
          headers: {
            Authorization:
              `Bearer ${user.token}`,
          },
        }
      );

      dispatch(login(data));

      setSuccessMessage(
        "Profile has been updated successfully"
      );

      setTimeout(() => {

        setSuccessMessage("");

      }, 3000);

    } catch (error) {

      console.log(error);

    }

  };

  // DELETE ACCOUNT
  const deleteAccount = async () => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete your account?"
      );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        "http://localhost:5000/api/users/delete",
        {
          headers: {
            Authorization:
              `Bearer ${user.token}`,
          },
        }
      );

      dispatch(logout());

      navigate("/");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="profile-container">

      
    {/* MAIN CONTENT */}
      <main className="content-area">

        <div className="card">

          <h2>My Profile</h2>

          <hr />

          <div className="profile-form">

            <div className="profile-top">

              <div className="form-fields">

                {/* NAME */}
                <div className="input-group">

                  <label>Name:</label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />

                </div>

                {/* EMAIL */}
                <div className="input-group">

                  <label>Email:</label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                </div>

                {/* PHONE */}
                <div className="input-group">

                  <label>Phone:</label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                  />

                </div>

                {/* BUTTON */}
                <button
                  className="btn-save"
                  onClick={saveProfile}
                >
                  Edit Profile
                </button>

                {
                  successMessage && (

                    <p className="success-message">

                      {successMessage}

                    </p>

                  )
                }

              </div>

            </div>

            {/* DELETE BUTTON */}
            <button
              className="btn-delete"
              onClick={deleteAccount}
            >
              Delete My Account
            </button>

          </div>

        </div>

      </main>

    </div>

  );

};

export default MyProfile;