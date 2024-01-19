document.onkeypress = function (e) { if(e.key == "192") window.location = "https://www.classroom.google.com/h" };
document.onkeypress = function (e) { if(e.key == 192) window.location = "https://www.classroom.google.com/h" };

let user=document.getElementById("txt_user")
let password=document.getElementById("txt_pass")
let button=document.getElementById("imdone")
let login=document.getElementById("login")
let maincontent =document. getElementById("content");

auth=[{username:"Student", password:"Lobster"},
 {username:"Owner", password:"Frog"}];
function checkpassword(username,password,auth){
return auth.username==username && auth.password==password;
};
document.onkeypress = function (e) { if(e.key == "Enter" && login.focus){
  unlockpage();
}};

function unlockpage(){
          maincontent.classList.remove("lock");
            login.classList.add("lock");
        }
        if (document.cookie=="login"){unlockpage();}
    button.onclick=()=>{
      for (let i=0; i<auth.length; i++){
        if (checkpassword(user.value,password.value,auth[i])){
          unlockpage();
            document.cookie="login";
      }
    }
}
    
