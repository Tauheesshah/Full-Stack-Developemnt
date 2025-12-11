const API=`https://fakestoreapi.com/products`

async function ApiCall() {
    try {
        const res=await fetch(API)
        const data=await res.json()

        dataAppend(data)
    } catch (error) {
        console.log(error)
    }
}

ApiCall()

function dataAppend(value){
    const mainDiv =document.querySelector('#mainData');

    value?.forEach((el) => {
        const childDiv=document.createElement('div');
        const id=document.createElement('h3');
        const img=document.createElement('img');
        const title=document.createElement('h3');
        const description=document.createElement('h3');
        const price=document.createElement('h3');
        const category=document.createElement('h3');

        id.innerText=el.id;
        img.src=el.image;
        title.innerText=el.title;
        description.innerText=el.description
        price.innerText=el.price;
        category.innerText=el.category;

        childDiv.append(id,img,title,description,price,category);
        mainDiv.append(childDiv)
    });
}