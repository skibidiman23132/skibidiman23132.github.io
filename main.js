document.onkeypress = function (e) { if(e.key == "`") window.location = "https://www.classroom.google.com/h" };
let user=document.getElementById("txt_user")
let password=document.getElementById("txt_pass")
let button=document.getElementById("imdone")
let login=document.getElementById("login")
let maincontent =document. getElementById("content");

function unlockpage(){
          maincontent.classList.remove("lock");
            login.classList.add("lock");
        }
        if (document.cookie=="login"){unlockpage();}
   // document.onkeypress = function (e) { if(e.key == "13") if (login.focus)};
    button.onclick=()=>{
        if (user.value=="Admin"&& password.value=="chicken"){
          unlockpage();
            document.cookie="login";
    }
}
    