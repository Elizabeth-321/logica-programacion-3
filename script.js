function numeroFactorial(){

let numero = parseFloat(prompt("ingrese un numero"));

   
 if (isNaN(numero)||numero <0){
     alert ("ingresa un numero valido ")
     return;
}
 let factorial = 1;
 for(let i = 1; i <= numero;i++){  
     factorial *=i;

}
 

 document.getElementById("resultado").innerText =`el factorial de${numero}es ${factorial}`;

}
document.getElementById("numero").addEventListener("click",numeroFactorial);