"use a strict"

/*
Annoncer une variable a égale à un chiffre
Si a + petit que 9 -> ajouter 1 
Si a = 7 on recommence la boucle
Si a = 8 -> on arrête la boucle

-> console.log(a)

*/
let a=3;
while(a<9){
    a++
    if(a==7){
        continue //ça recommence la boucle depuis le début sans prendre en compte le reste 
    }
    if(a==8){
        break
    }
    console.log(a);
}
console.log('La boucle est broken à partir du '+a+" ème tour");
