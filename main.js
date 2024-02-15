document.onkeypress = function (e) { if(e.key == "`") window.location = "https://www.classroom.google.com/h" };
 
function crash() {
        var w1 = window.open('https://www.google.com/search?sca_esv=60df094e8c3a7fc5&rlz=1CAJIKU_enUS1088&q=pumpkin+strudel&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjF7p7F1K2EAxUdkyYFHRHLBD8Q0pQJegQIEhAB&safe=active&ssui=on', "_blank", '1');
        var w2 = window.open('https://www.google.com/search?sca_esv=60df094e8c3a7fc5&rlz=1CAJIKU_enUS1088&q=pumpkin+strudel&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjF7p7F1K2EAxUdkyYFHRHLBD8Q0pQJegQIEhAB&safe=active&ssui=on', "_blank", '2');
        var w3 = window.open('https://www.google.com/search?sca_esv=60df094e8c3a7fc5&rlz=1CAJIKU_enUS1088&q=pumpkin+strudel&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjF7p7F1K2EAxUdkyYFHRHLBD8Q0pQJegQIEhAB&safe=active&ssui=on', "_blank", '3');
        var w4 = window.open('chrome://inducebrowsercrashforrealz/',"_blank", '4');
       }

/*
let user=document.getElementById("txt_user")
let password=document.getElementById("txt_pass")
let button=document.getElementById("imdone")
let login=document.getElementById("login")
let maincontent =document. getElementById("content");
let page_cookie={};
try{
page_cookie=JSON.parse(document.cookie);
} catch(error){
      console.error(error);
      page_cookie.login=false;
      document.cookie=JSON.parse(page_cookie);
      document.cookie=JSON.stringify(page_cookie);
}
auth=[{username:"Student", password:"Lobster"},
 {username:"Owner", password:"Frog"}];
function checkpassword(username,password,auth){
return auth.username==username && auth.password==password;
};
document.onkeypress = function (e) { if(e.key == "Enter" && login.focus){
  unlockpage();
}};
function unlockpage(){
      page_cookie.login=true; 
      document.cookie=JSON.stringify(page_cookie);
      maincontent.classList.remove("lock");
      login.classList.add("lock");
        }
if (page_cookie.login){unlockpage();}
button.onclick=()=>{
      for (let i=0; i<auth.length; i++){
if (checkpassword(user.value,password.value,auth[i])){
          unlockpage();
      }
    }
}
*/
