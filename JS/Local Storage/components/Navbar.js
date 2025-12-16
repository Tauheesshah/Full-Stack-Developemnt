export const Navbar=()=>{
    return  `
    <div class="logo">
            <img src="https://fakestoreapi.com/icons/logo.png" height="60px" width="60px" alt="logo">
    </div>
    <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
    </ul>
    <ul>
        <li onclick="window.location='./pages/cart.html'" style="position:relative; cursor:pointer;">
            <i class="bi bi-cart" style="font-size:22px;"></i>
            <span id="cartCount" class="cart-badge">0</span>
        </li>
        <li onclick="window.location='./pages/login.html'">Login</li>
        <li onclick="window.location='pages/signUp.html'">SignUp</li>
    </ul>
    `
}