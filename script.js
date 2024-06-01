//alert("hola este es mi Javacript");
let mi_nombre= "Tamara Belen Cantero"; 
console.log(mi_nombre);
let s1=document.getElementById("section1");
let s1Color=window.getComputedStyle(s1).getPropertyValue("background-color");
let h2=document.getElementById("h2");

const nombre = document.getElementById("nombre");
const alertas = document.getElementById("alertas");

function textoNuevo(){
    return "Acerca de Mi";
}

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const form = document.getElementById("formulario");
const enviarMailAncla=document.getElementById("anclaForm");

function enviarMailFuncion(event){
    event.preventDefault();
    const fd=new FormData(this);
    
    enviarMailAncla.setAttribute(
        'href',
        "mailTo:stellarenergy55@gmail.com?subject=${fd.get('nombre')}&body=${fd.get('mensaje1')}"
    );

    enviarMailAncla.click();
}

form.addEventListener('submit',enviarMailFuncion)
























/*if(s1Color.toString()=="rgb(210, 105, 30)"){
    console.log("s1.color= "+s1Color)
    h2.innerHTML=textoNuevo();
    h2.style.backgroundColor="rgb(227, 45, 64)";//backgroundColor="rgb(227, 45, 64)"
    console.log("h2.color= "+h2.style.backgroundColor)
}else{
    h2.innerHTML=textoNuevo();
    
    h2.style.backgroundColor="rgb(210, 105, 30)";
    
}*/
/*form.addEventListener("submit", (e) => {
    if(nombre.ariaValueNow.length< 4){
        alertas.innerHTML="El nombre debe poseer al menos 4 caracteres";
        e.preventDefault();
    }else{
        e.preventDefault();
        const formData=new FormData(form);
        sendMail.setAtributte
    }
});*/