const API=`https://fakestoreapi.com/products`

let cartData=JSON.parse(localStorage.getItem('cartData'))||[];

async function ApiCall() {
    try {
        const res=await fetch(API)
        const data=await res.json()

        dataAppend(data)
    } catch (error) {
        console.log(error)
    }
}

window.onload = function () {
    updateCartCount();
};
ApiCall()

function dataAppend(value){
    const mainDiv =document.querySelector('#mainData');
    const sortBy=document.createElement('select')
    const filterBy=document.createElement('select')
    const categoryBy=document.createElement('div')
    
    const optionSort1=document.createElement('option')
    const optionSort2=document.createElement('option')
    // const mainDiv=document.querySelector("#mainData");

    optionSort1.value='high to low';
    optionSort1.innerText='high to low';

    optionSort2.value='low to high';
    optionSort2.innerText='low to high';

    sortBy.name='select_sorting'
    categoryBy.className='category';

    const optionfilterBy1=document.createElement('option')
    const optionfilterBy2=document.createElement('option')
    const optionfilterBy3=document.createElement('option')
    const optionfilterBy4=document.createElement('option')

    optionfilterBy1.value="men's clothing";
    optionfilterBy1.innerText="men's clothing"

    optionfilterBy2.value="Jwelery"
    optionfilterBy2.innerText="Jwelery"

    optionfilterBy3.value="electronics"
    optionfilterBy3.innerText="electronics"

    optionfilterBy4.value="women's clothing"
    optionfilterBy4.innerText="women's clothing"

    sortBy.append(optionSort1,optionSort2)
    categoryBy.append(sortBy,filterBy);
    document.body.insertBefore(categoryBy,mainDiv);

    value?.forEach((el) => {
        const childDiv=document.createElement('div');
        const id=document.createElement('h3');
        const img=document.createElement('img');
        const title=document.createElement('h3');
        const description=document.createElement('h3');
        const price=document.createElement('h3');
        const category=document.createElement('h3');
        const addBtn=document.createElement('button')
        const plusBtn=document.createElement('button')
        const minusBtn=document.createElement('button')
        const qty=document.createElement('span')

        plusBtn.style='display:none'
        minusBtn.style='display:none'
        qty.style='display:none'

        plusBtn.innerText='+'
        minusBtn.innerText='-'
        qty.innerText="1";

        id.innerText=el.id;
        img.src=el.image;
        title.innerText=el.title;
        description.innerText=el.description
        price.innerText=`₹ ${el.price}`;
        category.innerText=el.category;
        addBtn.innerText='Add'

        const existingProduct = cartData.find(item => item.id === el.id);
        if (existingProduct) {
            addBtn.style.display = "none";
            plusBtn.style.display = "inline-block";
            minusBtn.style.display = "inline-block";
            qty.style.display = "inline-block";
            qty.innerText = existingProduct.qty; 
        }

        addBtn.addEventListener('click',()=>{
            addBtn.style='display:none'
            plusBtn.style='display:inline-block'
            qty.style='display:inline-block'
            minusBtn.style='display:inline-block'

            cartData.push({ ...el, qty: 1 });
            qty.innerText = 1;
            localStorage.setItem('cartData' ,JSON.stringify(cartData) )
            updateCartCount();
        })

        plusBtn.addEventListener('click',()=>{
            const item = cartData.find(item => item.id === el.id);
            item.qty += 1;
            qty.innerText = item.qty;
            minusBtn.disabled = false;
            localStorage.setItem('cartData' ,JSON.stringify(cartData) )
            updateCartCount();
        })

        minusBtn.addEventListener('click',()=>{
            const item=cartData.find(item=>item.id===el.id);
            item.qty-=1

            if(!item||item.qty<=0){
                addBtn.style.display = "inline-block";
                plusBtn.style.display = "none";
                minusBtn.style.display = "none";
                qty.style.display = "none";
            }else{
                addBtn.style.display = "none";
                plusBtn.style.display = "inline-block";
                minusBtn.style.display = "inline-block";
                qty.style.display = "inline-block";
                qty.innerText = item.qty;
                if (item.qty === 1) {
                    minusBtn.disabled = true;
                } else {
                    minusBtn.disabled = false;
                }
            }
            localStorage.setItem('cartData' ,JSON.stringify(cartData) )
            updateCartCount();
        })

        childDiv.append(id,img,title,description,price,category,addBtn,plusBtn,qty,minusBtn);
        mainDiv.append(childDiv)
    });
}
 
// function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem("cartData")) || [];

//     let totalQty = 0;
//     cart.forEach(item => {
//         totalQty += Number(item.qty) || 0;
//     });

//     const badge = document.getElementById("cartCount");
//     if (!badge) return;

//     badge.innerText = totalQty;
//     badge.style.display = totalQty > 0 ? "inline-block" : "none";
// }

function updateCartCount() {
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

// 🔥 IMPORTANT: run AFTER navbar is loaded
window.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});

// 🔥 Sync if cart updates in another page/tab
window.addEventListener("storage", updateCartCount);




