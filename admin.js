const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const loginButton = document.getElementById("login")
const body = document.body
const icerik = document.getElementById("icerik")
const form = document.getElementById("form")
form.addEventListener("submit",devredisi)
function devredisi(e){
    e.preventDefault()
}
loginButton.addEventListener("click",GirisYap)

function GirisYap(){
    localStorage.setItem("username",usernameInput.value)
    localStorage.setItem("pass",passwordInput.value)
    loginTry(localStorage.getItem("username"),localStorage.getItem("pass"))
}
var loginTry = (uname,password)=>{
    let dbUsername = "roose"
    let dbPassword = "123"
    if (dbUsername == uname && dbPassword == password){
        alertOlustur("success","Başarıyla giriş yapıldı")
        setTimeout(() => {
            yonlendir()
        }, 1000);}
    else
    {
        alertOlustur("danger","Kullanıcı adı veya şifre hatalı")
    }
}

var yonlendir = ()=>window.location.href = "panel.html"

var alertOlustur = (type,text)=>{
    var div = document.createElement("div")
    div.className=`alert alert-${type}`
    div.setAttribute("role","alert")
    div.textContent=text
    icerik.appendChild(document.createElement("br"))
    icerik.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 1000);
}