//VARIABLES

let iconosMenu = document.querySelectorAll(".icono-menu");
let menuHamburguesa = document.getElementById("menuHamburguesa");
console.log(iconosMenu);

//FUNCIONES

const toggleMenu = ()=>
{

    if(menuHamburguesa.classList.contains("escondido"))
    {
        menuHamburguesa.classList.add("animacion-abrir-menu");
        menuHamburguesa.classList.remove("escondido");

        menuHamburguesa.addEventListener("animationend",(e)=>{

            if(e.animationName == "desplegar")
            {
                console.log("abriendo al  menu")
                menuHamburguesa.classList.remove("animacion-abrir-menu");
                console.log(menuHamburguesa.classList);
            }

        })
    }

    else
    {
        menuHamburguesa.classList.add("animacion-cerrar-menu");
        menuHamburguesa.addEventListener("animationend",(e)=>{

            if(e.animationName == "cerrar")
            {
                console.log("cerrando al  menu")
                menuHamburguesa.classList.remove("animacion-cerrar-menu");
                menuHamburguesa.classList.add("escondido");
                console.log(menuHamburguesa.classList);
            }

        })
    }
    
}




//EVENTOS

document.addEventListener("DOMContentLoaded",()=>{
    iconosMenu.forEach((icono)=>{
        icono.addEventListener("click", toggleMenu);
    })
})