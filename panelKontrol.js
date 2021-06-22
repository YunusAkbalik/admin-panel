const user = localStorage.getItem("username")
const pass = localStorage.getItem("pass")
const dbUsername = "roose"
const dbPassword = "123"
const body = document.body
const logoutButton = document.getElementById("logout")
if (!(user==dbUsername && pass==dbPassword)){
    
    var geriDon = ()=>window.location.href="index.html"
    var backButton = document.createElement("button")
    backButton.addEventListener("click",geriDon)
    backButton.textContent="Geri dön"
    backButton.className="btn-primary"
    body.innerHTML=""
    body.style.textAlign="center"
    var h1 = document.createElement("h3")
    h1.textContent="Erişim reddedildi"
    body.appendChild(h1)
    body.appendChild(document.createElement("br"))
    body.appendChild(backButton)
}
logoutButton.addEventListener("click",logOut)
function logOut(){
    localStorage.removeItem("username")
    localStorage.removeItem("pass")
    window.location.href="index.html"
}