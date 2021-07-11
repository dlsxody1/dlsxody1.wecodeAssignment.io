    const loginForm = document.querySelector("#loginForm"),
          loginInput = loginForm.querySelector("input"),
          loginButton = loginForm.querySelector("button");
    const gretting = document.querySelector("#gretting");

    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";
   
function loginBtn(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGretting();
  
}   
      
function paintGretting(){
    const username = localStorage.getItem(USERNAME_KEY);
    gretting.classList.remove(HIDDEN_CLASSNAME);
    gretting.innerText = `Nice to meet you ${username}`;
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginBtn);
}else{
   paintGretting();
}