let btnCV = document.getElementById("btnCV");
let btnForm = document.getElementById("btnForm");
let btnMore = document.getElementById("btnMore");

btnCV.addEventListener('click', function(){
    let mensaje=confirm("¿desea descargar el CV?")
    if(mensaje){
        alert("CV descargado con exito")
    }
})

btnForm.addEventListener('click', function(){
    alert("Formulario enviado con exito")
})

btnMore.addEventListener('click', function(){
    alert("No hay más proyectos subidos por ahora")
})

let burger= document.querySelector('.burger-menu');
let nav= document.querySelector('.main-list');
burger-addEventListener('click', function(){
    nav.classList.toggle('active')
    burger.classList.toggle('active')
})