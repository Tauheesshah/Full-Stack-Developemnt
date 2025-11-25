let APi=`https://api.tvmaze.com/search/shows?q=girl`

async function ApiCall(){
    let res =await fetch(APi)
    let data =await res.json();   
    console.log(data)
}

const append = (value)=>{
     const content1 = document.getElementById("container");
     value.map((el,i,arr)=>{
        let cardDiv = document.createElement("div");
        let score = document.createElement("h1");
        let id = document.createElement("h1");
        let content = document.createElement("div");
        let language = document.createElement("p");
        let name  =document.createElement("p");
        let type = document.createElement("p");
        let status = document.createElement("p");
        let img = document.createElement("img");

        cardDiv.className =`div_${i+1}`;

        score.innerText=el.score;
        id.innerText=el.id;
        content.innerText=el.content;
        language.innerText=el.language;
        name.innerText=el.name;
        type.innerText=el.type;
        status.innerText=el.status;
        img.src=el.image;

        cardDiv.append(
            score,id,content,language,name,type,status,img
        );
        content.append(cardDiv)
     })
    
}
