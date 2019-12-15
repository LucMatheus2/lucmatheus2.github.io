function revelarSocialMedia(num){
    document.querySelectorAll("#destaque-redes-sociais li span")[num-1].style.visibility = "visible"
}
function esconderSocialMedia(num){
    document.querySelectorAll("#destaque-redes-sociais li span")[num-1].style.visibility = "hidden"
}
function mudarAvatar(){
    const Avatar = document.querySelector("#foto-feia img")
    Avatar.src = "media/avatar_insta.png"
}
function voltarAvatar(){
    const Avatar = document.querySelector("#foto-feia img")
    Avatar.src = "media/Foto1.png"
}
function escolherIdioma(){
    const listaDeIdiomas = document.querySelector("#tarja-de-info li ul")
    listaDeIdiomas.style.display = "block"
}
function recolherIdiomas(){
    const listaDeIdiomas = document.querySelector("#tarja-de-info li ul")
    listaDeIdiomas.style.display = "none"
}