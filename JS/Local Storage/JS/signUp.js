const storeData=JSON.parse(localStorage.getItem('userData'))||[]
const signUp=()=>{
    let userName=document.getElementById('signUsername').value.trim();
    let age=document.getElementById('SignAge').value.trim();
    let password=document.getElementById('signPassword').value.trim();

    let singlePersonData={
    user:userName,
    age,
    pass:password,
    };
    storeData.push(singlePersonData)
    localStorage.setItem('userData',JSON.stringify(storeData))

    setTimeout(()=>{
        alert("Data Saved Succesfully")
        window.location = 'login.html'
    },100);
    
        

};



