const login=()=>{
    let username=document.getElementById('loginUsername').value.trim();
    let password=document.getElementById('Loginpassword').value.trim();

    let data=JSON.parse(localStorage.getItem('userData'));

    data.forEach((el) => {
        if(el.user==username){
            window.location='../index.html'
        }
    });
    console.log(data)
}