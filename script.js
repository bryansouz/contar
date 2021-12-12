var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')


function contar(){
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
     alert('[ERROR] Numeros não correspondem')
   }else{
       res.innerHTML = `Contando...`
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
 
       for(let c = i; c < f;c += p){
           res.innerHTML += `${c } \u{1F449}`
       }
       res.innerHTML += `\u{1F3C1}` 
   }
}