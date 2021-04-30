//________________________________________________________________________________________________________________


//1.-Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function arregloNaturales([]){
    for(i=0;i<256;i++){
        console.log(i)
    }
    return arregloNaturales;
}

z=arregloNaturales([]);

//________________________________________________________________________________________________________________
//2.-Consigue pares hasta 1000: 
//Escribe una función que entregue la suma de todos los números pares del 1 al 1000 
//Puedes usar un operador de módulo para este ejercicio. 

function SumNumPares (num){
    var sumPares=0
    for(var i=0;i<=num;i++){
    if(i%2==0){
    sumPares=sumPares+i;
        
    }
    
    }
    return sumPares;
}

num=1000;
console.log(SumNumPares (num)); 


//________________________________________________________________________________________________________________
//3.-Suma impares hasta 5000:
// Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000
// (ej: 1+3+5+...+4997+4999).

function SumNumImpares(num){
    var sumImpares=0;
    for(var i=0;i<num;i++){
        if(i%2==1){
        sumImpares=sumImpares+i;
        }
    } 
    return sumImpares;

}
num=5000;
console.log(SumNumImpares(num));




//_________________________________________________________________________________________________________________

//4.-Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array
// (ej:  [1,2,5] retorna 8.

function SumaArreglo(arreglo){
    var sum=0
    for(var j=0;j<arreglo.length;j++){
        sum=sum+arreglo[j];
        
    }
    return sum;
}
arreglo=[1,3,5];
SumaArreglo(arreglo);


//___________________________________________________________________________________________________________________

//5.- Encuentra el mayor (max): Dado un array con múltiples valores, 
//escribe una función que devuelva el número mayor 
//(ej: para [-3,3,5,7] el número mayor (max) es 7).

function encuentraMax(arreglo){
    var max=arreglo[0];
    for(var i=0;i<arreglo.length;i++){
        if (arreglo[i+1]>max){
            max=arreglo[i+1];
        }
    }
    return max;
}

arreglo=[1,3,5];
encuentraMax(arreglo);

//[i+1] significa ubicate en la posición de i, y luego sumale 1.

//------------------------------------------------------------------------------------------------------------------
// 6.- Encuentra el promedio (avg): Dado un array con múltiples valores,
// escribe una función que devuelva el promedio de los valores
// (ej: para [1,3,5,7,20] el promedio es 7.2).


function findAvg (array){
    var sum=0;
    for(var i=0;i<array.length;i++) {
    sum=sum+array[i]
    }
    return sum/array.length;
}

array=[1,2,3,4,5];
findAvg(array);

//------------------------------------------------------------------------------------------------------------------
// 7.- Array de impares: Escribe una función que devuelva un array de todos los números impares 
//entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function odds50(z){
    var odds=[] 
    for(var i=0;i<z;i++){
        if(i%2==1)
        odds.push(i);
      } 
    return odds;
}

z=50;
odds50(z);

//______________________________________________________________________________________________________________________

//8.- Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y.
//Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).

function mayorY(z,y){
      
     
      for(i=0;i<z.length;i++){
         if(z[i]>y){ 
         console.log (z[i]);
         
         }
         
      }
       
      mayorY([2,4,6,8,10],5); 
       
      


//_________________________________________________________________________________________________________________________


//9.-Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo
// valor (ej: [1,5,10,-2] será [1,25,100,4]).


function squareValue(x){

    for(var i=0;i<x.length;i++){
        x[i]= x[i] * x[i];
    }
    
    return x;
 }
 y = squareValue([2,3,5]);
 console.log(y); 

//______________________________________________________________________________________________________________________

//10.-Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. 
//Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function reempNegativos() {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    return x;
}
x=[-1,-2,-3,-5,0,5,6];
reempNegativos(x);

//___________________________________________________________________________________________________________________________

//11.-Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga 
//el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxMinAvg(arreglo) {
    var resultado = [];
    var suma = 0;
    arreglo.forEach(valor => suma += valor);
    resultado.push(Math.max(...arreglo));
    resultado.push(Math.min(...arreglo));
    resultado.push(suma / arreglo.length);
    return resultado;
}
arreglo = [1, 5, 10, -2]
console.log(maxMinAvg(arreglo));


//___________________________________________________________________________________________________________________________

//12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array.
// La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]).

function intercambioIniFin(x) {
    var temp = x[0];
    x[0] = x[x.length - 1];
    x[x.length - 1] = temp;
    return x;
}

x=[-1,-2,-3,-5,0,5,6];
intercambioIniFin(x);





//___________________________________________________________________________________________________________________________

//13.- De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’.
 Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function reempNegativos() {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'Dojo';
        }
    }
    return x;
}
x=[-1,-2,-3,-5,0,5,6];
reempNegativos(x);




