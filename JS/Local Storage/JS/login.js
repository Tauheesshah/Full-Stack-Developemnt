// const login=()=>{
//     let username=document.getElementById('loginUsername').value.trim();
//     let password=document.getElementById('Loginpassword').value.trim();

//     let data=JSON.parse(localStorage.getItem('userData'));

//      data.forEach((el) => {
//          if(el.user==username){
//              window.location='../index.html'
//          }
//      });
//      console.log(data)
// }

//let locations = window.location.pathname; // route -> reacr-router-dom -> useLocation -> useSearchParam -> useParam

const storeData = JSON.parse(localStorage.getItem('userData'));

const login = () => {
  let userName = document.getElementById('loginUsername').value.trim();
  let password = document.getElementById('Loginpassword').value.trim();

  let findUser = storeData.find((el) => el.user === userName);

  if (findUser !== undefined) {
    if (findUser.pass !== password) {
      alert("password dosen't match!");
      return;
    }
    let random = function () {
      return Math.random().toString(36).substr(2); // remove `0.`
    };

    let token = function () {
      return (
        random() + random() + random() + '-' + random() + random() + random()
      ); // to make it longer
    };

    sessionStorage.setItem('token', JSON.stringify(token()));

    setTimeout(() => {
      alert('token has been stored in session storage');
    }, 1000);
  }
  else{
     alert("user coundn't found")
  }
};