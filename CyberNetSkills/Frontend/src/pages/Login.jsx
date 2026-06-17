import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await loginUser(form);

      localStorage.setItem(
        "token",
        res.data.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.data.user
        )
      );

      navigate("/");

      window.location.reload();
    } catch (error) {
      console.log(error);

      setError(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold text-slate-900">
              Welcome Back
            </h1>

            <p className="text-slate-500 mt-2">
              Login to continue your
              learning journey
            </p>

          </div>

          {error && (
            <div className="mb-5 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form
            onSubmit={submitHandler}
            className="space-y-5"
          >

            <div>

              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email:
                      e.target.value,
                  })
                }
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password:
                      e.target.value,
                  })
                }
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-700 to-green-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
            >
              {loading
                ? "Logging In..."
                : "Login"}
            </button>

          </form>

          <div className="mt-6 text-center">

            <p className="text-slate-500">

              Don't have an account?

              <Link
                to="/signup"
                className="text-blue-600 font-semibold ml-1"
              >
                Sign Up
              </Link>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;