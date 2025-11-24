API = `https://fakestoreapi.com/products`;
async function apiCall() {
    let res = await fetch(API);
    let data = await res.json();
    appendData(data)
}

const appendData = (value)=>{
   const content = document.getElementById("container");
   value.map((el,i,arr)=>{
    let cardDiv = document.createElement("div");
    let id_created = document.createElement("h3");
    let title_created = document.createElement("h2");
    let price_created = document.createElement("p");
    let description_created = document.createElement("h3");
    let img_created = document.createElement("img");

    cardDiv.className =`div_${i+1}`;

    id_created.innerText = el.id;
    title_created.innerText = el.title;
    price_created.innerText = el.price;
    description_created.innerText = el.description;
    img_created.src = el.image;


    cardDiv.append(
        id_created,img_created,title_created,price_created,description_created
    );
    content.append(cardDiv);
   })
}