//npx json-server --watch db.json --port 3001

let data;
const API="http://localhost:3001/todos";

function myTodosAdd(){
    const todoText=document.querySelector("#todos").value;

    if(todoText.trim()==="") return;

    let newTodos={
        id: data.length+1+'',
        text:todoText,
        isEdit:false,
        isCompleted:false,
    };

    fetch(API,{
        method:'POST',
        header:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(newTodos),
    })
    .then((res)=>console.log("this is from addTodo",res))
    .catch((err)=>console.log("this is from addTodo",err))
    .finally(()=>console.log('DOne with api process'))

}

function fetchTodoDB(){
    fetch(API)
    .then((res)=>res.json())
    .then((res)=>(data=[...res],UIrender()))
    .catch((err)=>console.log(err))
    

}

function UIrender(){
    const mainContainer=document.querySelector('#dataInfo');
    mainContainer.innerHTML = "";
    if (data.length===0){
        mainContainer.append('No data');
        return;
    } 

    const select=document.getElementById('selectAll')
    select.innerText="Select All";

    const deselect=document.getElementById('DeSelectAll')
    // deselect.style='display:none'
    deselect.innerText="De Select All";

    const deleteAll=document.getElementById('deleteAll');
    // deleteAll.style='display:none'
    deleteAll.innerText='Delete All'

    data&&data.map((el)=>{
        const todoDiv=document.createElement('div');
        const checkInput=document.createElement('input')
        const headingText=document.createElement('h2')
        const statusTodo=document.createElement('h3')
        const editBtn=document.createElement('button')
        const deleteBtn=document.createElement('button')
        const id=document.createElement('p')
        
        id.innerText=el.id;
        todoDiv.className="myTodo_div";
        checkInput.type='checkbox'
        headingText.innerText=el.text;
        statusTodo.innerText=el.isEdit ? 'true':'false';
        editBtn.innerText='edit'
        deleteBtn.innerText='delete'

        checkInput.classList.add('todoCheck'); // <--- Add class

        editBtn.addEventListener('click',async()=>{
            await fetch(`${API}/${el.id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({isEdit:!el.isEdit}),
            })
        })

        deleteBtn.addEventListener('click',async()=>{
            await fetch(`${API}/${el.id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
            })
        })

        select.addEventListener('click',async()=>{
            let allcheck=document.querySelectorAll('.todoCheck')
            allcheck.forEach(cb=>{
                cb.checked=true
            })
            // deselect.style='display:block'
            // deleteAll.style='display:block'
        })

        deselect.addEventListener('click',async()=>{
            let allcheck=document.querySelectorAll('.todoCheck')
            allcheck.forEach(cb=>{
                cb.checked=false
            })
            // select.style='display:block'
        })

        deleteAll.addEventListener('click',()=>{
            let checked=document.querySelectorAll('.todoCheck:checked')
            console.log(checked)
            checked.forEach(cd=>{
                    fetch(`${API}/${el.id}`, {
                    method: 'DELETE'
                }).then(()=>{
                    UIrender()
                })
            })
        })

        todoDiv.append(id,checkInput,headingText,editBtn,deleteBtn,statusTodo)
        mainContainer.append(todoDiv)
    })

}