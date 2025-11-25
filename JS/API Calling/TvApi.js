 const apiKey=`f4a06d19`;
    
    const apiCall = async(value)=>{
        const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${value}`;
        let res = await fetch(apiUrl);
        let data = await res.json();
        UI(data.Search);
    };

    const inputValue = ()=>{
        let inputVal = document.querySelector("#input").value;
        console.log(inputVal);
        apiCall(inputVal)
    }

    const UI = (data) =>{
        console.log(data)
        const mainDiv= document.querySelector("#Container")

        mainDiv.innerHTML='';

        data.map((el,i)=>{
            let cardDiv = document.createElement("div");
            let img = document.createElement("img");
            let imdbID = document.createElement("p");
            let title = document.createElement("h1");
            let type = document.createElement("h2");
            let year = document.createElement("h3");

            cardDiv.className =`div-${i+1}`;

            img.src=el.Poster;
            imdbID.innerText=`id ${el.imdbID}`;
            title.innerText=`title ${el.Title}`;
            type.innerText=`type ${el.Type}`;
            year.innerText=`year ${el.Year}`;

            cardDiv.append(img,imdbID,title,type,year);
            mainDiv.append(cardDiv);
        })
    }