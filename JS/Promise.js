
/*
In javascript a Promise is an oject that represents the eventual OfflineAudioCompletionEvent(or faliur)

A Promise can exits in one of three states:
pending: The initial state; the asynchoronous operation ha not yet completed.
fulfilled (resolved): The operation completed successfully and the promise now holds a resulting value
Rejected: The operation failed and the promise holds a reason for the faliure (an error object) 


//? promise took callback function and also took (resolve,reject);
//$ ()=>{} // callback function

*/

// let ice_cream = new Promise((res,rej)=>{
//     let got_ice_cream = false;
//     if(got_ice_cream) res(got_ice_cream);
//     else rej(got_ice_cream)
// })

// ice_cream
// .then(()=>{
//     console.log("eat ice cream");
// })
// .catch(()=>{
//     console.log("call mommy!")
// })

//! what if we get delay to get the response

console.log('A');
let ice_cream = new Promise((res, rej) => {
  let got_ice_cream;
  console.log('B');

  
 // $   setTimeout(()=>{},delay)
  setTimeout(() => {
    got_ice_cream = false;
    if (got_ice_cream) {
      res(got_ice_cream);
    } else {
      rej(got_ice_cream);
    }
  }, 3000);

  console.log('C');
  
}); // here i created new promises

// we started the promises
console.log('D');

console.log('🚀 ~ ice_cream:', ice_cream);

ice_cream.then(() => {
  console.log('eat ice cream');
})
  .catch(() => {
    console.log('call mommy');
  });

console.log('E');