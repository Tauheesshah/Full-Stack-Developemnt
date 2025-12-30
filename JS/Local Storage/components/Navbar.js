// export const Navbar=()=>{
//     return  `
//     <div class="logo">
//             <img src="https://fakestoreapi.com/icons/logo.png" height="60px" width="60px" alt="logo">
//     </div>
//     <ul>
//         <li id="home" >Home</li>
//         <li id="product">Products</li>
//         <li id="contact">Contact</li>
//     </ul>
//     <ul>
//         <li onclick="window.location='./pages/cart.html'" style="position:relative; cursor:pointer;">
//             <i class="bi bi-cart" style="font-size:22px;"></i>
//             <span id="cartCount" class="cart-badge">0</span>
//         </li>
//         <li onclick="window.location='./pages/login.html'">Login</li>
//         <li onclick="window.location='pages/signUp.html'">SignUp</li>
//     </ul>
//     `
// }
export const Navbar = () => {

    const go = (path) => {
        const base = window.location.origin + window.location.pathname.split("/").slice(0, -1).join("/");

        // If current page is inside /pages, go up one level
        if (window.location.pathname.includes("/pages/")) {
            window.location.href = `../${path}`;
        } else {
            window.location.href = path;
        }
    };

    // expose globally
    window.go = go;

    return `
        <div class="logo">
            <img src="https://fakestoreapi.com/icons/logo.png" height="60" width="60" alt="logo">
        </div>

        <ul>
            <li onclick="go('pages/home.html')">Home</li>
            <li onclick="go('index.html')">Products</li>
            <li onclick="go('pages/contact.html')">Contact</li>
        </ul>

        <ul id="nav-auth">
            <li onclick="go('pages/cart.html')" style="position:relative; cursor:pointer;">
                <i class="bi bi-cart" style="font-size:22px;"></i>
                <span id="cartCount" class="cart-badge">0</span>
            </li>
        </ul>
    `;
};

export function renderAuthUI() {
    const ul = document.getElementById("nav-auth");
    if (!ul) return;

    const token = sessionStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (token && userData && userData.length > 0) {
        const username = userData[0].user; // ✅ FIX HERE

        ul.innerHTML += `
            <li onclick="go('pages/profile.html')" style="cursor:pointer;">
                <i class="bi bi-person-circle" style="font-size:22px;"></i>
                ${username}
            </li>
            <li onclick="logout()" style="cursor:pointer;">Logout</li>
        `;
    } else {
        ul.innerHTML += `
            <li onclick="go('pages/login.html')">Login</li>
            <li onclick="go('pages/signUp.html')">SignUp</li>
        `;
    }
}


export function logout() {
    sessionStorage.removeItem("token");
    localStorage.removeItem("userData");
    location.reload();
}

window.logout = logout;
