document.onkeypress = function (e) { if(e.key == "`") window.location = "https://www.classroom.google.com/h" };
let user=document.getElementById("txt_user")
let password=document.getElementById("txt_pass")
let button=document.getElementById("imdone")
let login=document.getElementById("login")
let maincontent =document. getElementById("content");

{username:"Student", pasword:"Lobster"}

document.onkeypress = function (e) { if(e.key == "Enter" && login.focus){
  unlockpage();
}};

function unlockpage(){
          maincontent.classList.remove("lock");
            login.classList.add("lock");
        }
        if (document.cookie=="login"){unlockpage();}
    button.onclick=()=>{
        if (user.value=="Student"&& password.value=="Lobster"){
          unlockpage();
            document.cookie="login";
      
    }
}
    
