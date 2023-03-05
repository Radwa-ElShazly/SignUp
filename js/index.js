//b7wl amsk el input kolha
const userNameInput=document.getElementById('userNameInput');
const userEmailInput=document.getElementById('userEmailInput');
const userPasswordInput=document.getElementById('userPasswordInput');
const signUpBtn=document.getElementById("signUpBtn");
const confirmMsg=document.getElementById("confirmMsg");
const accountExistMsg=document.getElementById("accountExistMsg");
const tryAginMsg=document.getElementById('tryAginMsg');
const goToLoginPage = document.getElementById("goToLoginPage"); 
const signin=document.getElementById('signin');



let usersinfo;//array of objects= Json "m7tag a7wlha l string 3n trq el stringify"

//!events

// goToLoginPage.addEventListener("click", moveToNextPage);
userNameInput.addEventListener("keyup",userNameValidation);
userEmailInput.addEventListener("keyup",userEmailValidation);
userPasswordInput.addEventListener("keyup", userPasswordValidation);

// function moveToNextPage() {
//   goToLoginPage.href = ".\login.html";
// }

// users=key
if(localStorage.getItem('users')!=null){
  usersinfo=JSON.parse(localStorage.getItem('users'))
}else{//awl mr eft7 el user
  usersinfo=[];//awl mra eft7
}


function signUp() {

  userInputsValidation(); //awl chracter capital
  isExist();//hana ana 3ez el email mekonsh mogod abl kdh feh el natiga lzm ==false


  if(userInputsValidation()==true && isExist()== false){
    //user is object
  let user={
    name:userNameInput.value,  //ahmed
    email:userEmailInput.value,  //ahmed@yahoo.com
    password:userPasswordInput.value, //radwa4545
  };
  
    // user:object     ;users:key
   usersinfo.push(user);
   localStorage.setItem("users",JSON.stringify(usersinfo));//localStorage.setItem(key,values);
   confirmMsg.classList.replace('d-none','d-block');
   tryAginMsg.classList.replace('d-block','d-none');
   signin.classList.replace('d-none','d-block');
  }else{
    tryAginMsg.classList.replace('d-none','d-block');
    confirmMsg.classList.replace('d-block','d-none')
    signin.classList.replace('d-block','d-none');
  }
  cleanInputs();
}

function cleanInputs(){
  userNameInput.value="";
  userEmailInput.value="";
  userPasswordInput.value="";
}
function userNameValidation(){
  const userNameALert=document.getElementById('userNameALert');
  let regexName= /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/; //$ e3n3 momkn nd5l secound name
  if(regexName.test(userNameInput.value)== true && userNameInput.value != " "){
    userNameInput.classList.add("is-valid");
    userNameInput.classList.remove("is-invalid");
    userNameALert.classList.replace("d-block","d-none");  //el Validation done
    return true;

  }else{
    userNameInput.classList.remove("is-valid"); //green border
    userNameInput.classList.add("is-invalid");  //red border
    userNameALert.classList.replace("d-none","d-block");
    return false;
  }
}
// ."dot" -->any char
// *"star" -->number
// ^  -->star
// $  -->end
function userPasswordValidation(){
  let regexPassword =/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{4,15}$/;
  let userPasswordALert=document.getElementById('userPasswordALert');
  if(regexPassword.test(userPasswordInput.value)==true && userPasswordInput.value !=''){
    userPasswordInput.classList.add("is-valid");
    userPasswordInput.classList.remove("is-invalid");
    userPasswordALert.classList.replace("d-block","d-none");  //el Validation done
    return true;
  }else{
    userPasswordInput.classList.remove("is-valid");
    userPasswordInput.classList.add("is-invalid"); 
    userPasswordALert.classList.replace("d-none","d-block");
    return false;
  }
}

function userEmailValidation(){
  let regexEmail= /@[a-z]{5,10}(\.com)$/;
  const userEmailALert=document.getElementById('userEmailALert');
  if(regexEmail.test(userEmailInput.value)==true && userEmailInput.value !=''){
    userEmailInput.classList.add("is-valid");
    userEmailInput.classList.remove("is-invalid");
    userEmailALert.classList.replace("d-block","d-none");  //el Validation done
    return true;
  }else{
    userEmailInput.classList.remove("is-valid");
    userEmailInput.classList.add("is-invalid");
    userEmailALert.classList.replace("d-none","d-block");
    return false;
  }
}


function userInputsValidation(){
  userNameValidation();
  userPasswordValidation();
  userEmailValidation();
  if(userNameValidation()==true && userPasswordValidation()==true && userEmailValidation()==true){
    return true;
  }else{
    return false;
  }
}


function isExist(){
let accountExistMsg=document.getElementById('accountExistMsg');
for(let i=0;i <usersinfo.length;i++){
  if (
    usersinfo[i].name.toLowerCase()==userNameInput.value.toLowerCase()
    ||usersinfo[i].email.toLowerCase()==userEmailInput.value.toLowerCase()
  ) {
    userNameInput.classList.add("is-invalid");
    userEmailInput.classList.add("is-invalid");
    accountExistMsg.classList.replace("d-none","d-block");
     return true;
  }
    
}
accountExistMsg.classList.replace("d-block","d-none");
return false;
}
