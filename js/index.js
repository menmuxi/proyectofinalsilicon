const user = JSON.parse(localStorage.getItem("login_sucess")) || false
if(!user){
    window.location.href = "login.html"
}

const logout = document.querySelector("#logout")

logout.addEventListener("click", ()=>{
    alert("Hasta pronto")
    localStorage.removeItem("login_sucess")
    window.location.href = "/proyectofinal/pages/inicio.html"
})