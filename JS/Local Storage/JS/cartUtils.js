export function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cartData")) || [];

    let totalQty = 0;
    cart.forEach(item => {
        totalQty += Number(item.qty) || 0;
    });

    const badge = document.getElementById("cartCount");
    if (!badge) return;

    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? "inline-block" : "none";
}
