let usersinfo;
let loginEmail =document.getElementById('loginEmail');
let loginPassword =document.getElementById('loginPassword');
let fillMsg=document.getElementById('fillMsg');
let wrongMsg=document.getElementById('wrongMsg');
let loginBtn=document.getElementById('loginBtn');
let sessionUsername=localStorage.getItem('sessionUsername');



if(localStorage.getItem('users')!=null){
  usersinfo=JSON.parse(localStorage.getItem('users'))
}else{//awl mr eft7 el user
  usersinfo=[];//awl mra eft7
}
console.log(usersinfo);

function login(){ 

  checkFillMsg();
  checkvalues();
}
function cleanInputs(){
  loginEmail.value="";
  loginPassword.value="";
}
function checkFillMsg(){
  if(loginEmail.value==''||loginPassword.value =='' ){  
     fillMsg.classList.replace('d-none','d-block');
     console.log("hi");

     return false;
  }else{
    fillMsg.classList.replace('d-block','d-none');
    console.log("true"); 
       return true;
  }
}

function checkvalues(){
  
  console.log(loginEmail.value ,loginPassword.value ,usersinfo);
  for(let i=0;i<usersinfo.length;i++){
    if(usersinfo[i].email === loginEmail.value &&
     usersinfo[i].password === loginPassword.value){
      console.log(usersinfo);
     localStorage.setItem('sessionUsername',usersinfo[i].name);
     window.location.href='./home.html';
     wrongMsg.classList.replace('d-block','d-none');
  }else{

   wrongMsg.classList.replace('d-none','d-block');
  }
}
}
if(loginEmail){
  loginEmail.addEventListener("keyup",loginEmailValidation);
}
if(loginPassword){
  loginPassword.addEventListener("keyup",loginPasswordValidation)
}

function loginPasswordValidation(){
  let regexPassword =/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;
  const loginPassword=document.getElementById('loginPassword');
  if(regexPassword.test(loginPassword.value)==true && loginPassword.value !=''){
    loginPassword.classList.add("is-valid");
    loginPassword.classList.remove("is-invalid");
    return true;
  }else{
    loginPassword.classList.remove("is-valid");
    loginPassword.classList.add("is-invalid"); 
    return false;
  }
}

function loginEmailValidation(){
  let regexEmail= /@[a-z]{5,10}(\.com)$/;
  const loginEmail=document.getElementById('loginEmail');
  if(regexEmail.test(loginEmail.value)==true && loginEmail.value !=''){
    loginEmail.classList.add("is-valid");
    loginEmail.classList.remove("is-invalid");
    return true;
  }else{
    loginEmail.classList.remove("is-valid");
    loginEmail.classList.add("is-invalid");
    return false;
  }
}



function displayWelcome(){
document.getElementById("username").innerHTML=localStorage.getItem('sessionUsername');
}

function logOut(){
  localStorage.removeItem("sessionUsername")
}