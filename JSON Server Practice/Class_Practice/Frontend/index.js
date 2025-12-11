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
        headers:{
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
    deselect.style='display:none'
    deselect.innerText="De Select All";

    const deleteAll=document.getElementById('deleteAll');
    deleteAll.style='display:none'
    deleteAll.innerText='Delete All'

    data&&data.map((el)=>{
        const todoDiv=document.createElement('div');
        const checkInput=document.createElement('input')
        const headingText=document.createElement('h2')
        const statusTodo=document.createElement('h3')
        const editBtn=document.createElement('button')
        const deleteBtn=document.createElement('button')
        const savebtn=document.createElement('button')
        const canclebtn=document.createElement('button')
        const id=document.createElement('p')
        
        id.innerText=el.id;
        todoDiv.className="myTodo_div";
        checkInput.type='checkbox'
        checkInput.dataset.id = el.id; // <-- IMPORTANT
        headingText.innerText=el.text;
        statusTodo.innerText = el.isCompleted ? 'Completed' : 'Active';
        if (el.isCompleted) {
            headingText.classList.add("completed");
            statusTodo.classList.remove("active");
            statusTodo.classList.add("completedStatus");
            statusTodo.innerText = "Completed";
        } else {
            headingText.classList.remove("completed");
            statusTodo.classList.remove("completedStatus");
            statusTodo.classList.add("active");
            statusTodo.innerText = "Active";
        }

        editBtn.innerText='edit'
        deleteBtn.innerText='delete'
        savebtn.innerText='save'
        canclebtn.innerText='Cancle'
        savebtn.style.display = "none";
        canclebtn.style.display = "none";


        checkInput.classList.add('todoCheck'); // <--- Add class

        editBtn.addEventListener('click',async()=>{

            const input = document.createElement("input");
            input.type = "text";
            input.value = el.text;
            todoDiv.replaceChild(input, headingText);

                // Show save & cancel buttons and hide others
                savebtn.style.display = "inline-block";
                canclebtn.style.display = "inline-block";
                editBtn.style.display = "none";
                deleteBtn.style.display = "none";
                savebtn.onclick = async () => {
                let updatedText = input.value.trim();

                if(updatedText === "") return;

                await fetch(`${API}/${el.id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: updatedText,isCompleted:false })
                });
            
                headingText.innerText = updatedText;
                todoDiv.replaceChild(headingText, input);
            
                cancelEditUI();
                fetchTodoDB();
            };
            canclebtn.onclick = () => {
                todoDiv.replaceChild(headingText, input);
                cancelEditUI();
            };
            function cancelEditUI() {
                savebtn.style.display = "none";
                canclebtn.style.display = "none";
                editBtn.style.display = "inline-block";
                deleteBtn.style.display = "inline-block";
            }
        })

        headingText.addEventListener('click', async () => {
            let newStatus = !el.isCompleted;

            await fetch(`${API}/${el.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isCompleted: newStatus })
            });

            fetchTodoDB();
        });

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
            select.style='display:none'
            deselect.style='display:inline-block'
            deleteAll.style='display:inline-block'
        })

        deselect.addEventListener('click',async()=>{
            let allcheck=document.querySelectorAll('.todoCheck')
            allcheck.forEach(cb=>{
                cb.checked=false
            })
        select.style='display:inline-block'
        deselect.style='display:none'
        deleteAll.style='display:none'
        })

        deleteAll.addEventListener('click',async()=>{
            let checkedBoxes=document.querySelectorAll('.todoCheck:checked')
            if (checkedBoxes.length === 0) return;

            for (let cb of checkedBoxes) {
            let id = cb.dataset.id;

            await fetch(`${API}/${id}`, {
            method: 'DELETE'
        })
        }
        select.style='display:inline-block'
        fetchTodoDB();
    })

        todoDiv.append(checkInput,id,headingText,editBtn,savebtn,canclebtn,deleteBtn,statusTodo)
        mainContainer.append(todoDiv)
    })

}