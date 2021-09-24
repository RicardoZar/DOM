/*document.write("Hola desde js"); */
/*
const title=document.getElementsByTagName("h1");
title[0].innerHTML="Titulo cambiado desde js"

const texto=document.getElementById("text");
texto.innerHTML="Texto desde js";
texto.style.background="blue";
texto.style.color="white";

console.log(texto);
*/

const texto=document.querySelector("#text");
texto.textContent="Escribiendo desde js";

/*Crear elementos html*/
const div=document.createElement("div");
const body=document.querySelector("body");

body.append(div);


