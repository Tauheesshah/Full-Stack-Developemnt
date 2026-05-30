import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCart } from "../Redux_Slicer/cartSlice";

export const useCartLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCart = async () => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (!user) return;

      const { data } = await axios.get(
        "http://localhost:5000/api/cart/my-cart",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(setCart(data));
    };

    loadCart();

    window.addEventListener("cartUpdated", loadCart);

    return () =>
      window.removeEventListener("cartUpdated", loadCart);
  }, [dispatch]);
};