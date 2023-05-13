'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
/* class Node{
  constructor(value){
    this.value = value;
    this.next = null;
}

class LinkedList{
  constructor(){
    this.head = null;
    this._length = 0;
  }
  add(value){
    const nodo = new Node(value);
    let current = this.head;
    if(!current){
      this.head = nodo //Si current es null, head va a ser este nodo que estoy agregando
    }else{
      while(current.next){ //mientras current.next tenga algo
        current = current.next; //pararme en el siguiente nodo
      } //Cuando se encuentra con el ultimo
      current.next = nodo; //le agrega el nuevo
    }
    this._length++
    return nodo;
  }
  remove(){
    let current = this.head;
    if(!current){
      return current;
    }
    else{
      let prev = current;
      while(current.next){
        prev = current
        current = current.next;
      }
      console.log(prev)
      console.log(current)
      prev.next = null
      this._length--
      return current;
    }
  }
  search(valor){
    let current = this.head;
    let check = false;
    if(current.value == valor){
      check = true
    }
    while(!check && current.value != valor){
      current = current.next;
      if(current.value == valor){
        check = true;
      }
    }
  /*if(check){
    return current;
    } 
  }
}  */

function Node(value){
  this.value = value;
  this.next = null;
}

function LinkedList(){
  this.head = null;
  this._length = 0;
}

LinkedList.prototype.add = function(value){
  const nodo = new Node(value);
  let current = this.head;
  if(!current){
    this.head = nodo //Si current es null, head va a ser este nodo que estoy agregando
  }else{
    while(current.next){ //mientras current.next tenga algo
      current = current.next; //pararme en el siguiente nodo
    } //Cuando se encuentra con el ultimo
    current.next = nodo; //le agrega el nuevo
  }
  this._length++
  return nodo;
}

LinkedList.prototype.remove = function(){
  let current = this.head;
  if(!current){
    return null; //null
  }else if(current.next == null){//Si head es el unico nodo
    this._length--
    this.head = null
    return current.value;
  }else{
    let prev = current;
    while(current.next){ //mientras no esté parado en el último elemento
      prev = current //Me dejo guardado el elemento en el que estaba parado antes de la ultima ejecucion (el anteultimo nodo)
      current = current.next; //Me paro en el siguiente elemento
    }
    //console.log(prev)
    //console.log(current)
    prev.next = null //Borro lo que está en la propiedad next del anteultimo nodo (el ultimo nodo)
    //console.log(prev)
    this._length--
    return current.value; //.value es porque espera que le retorne el valor y no el nodo
  }
}

/* LinkedList.prototype.search = function(param){
// /* if(param){ //cb evaluada en el valor del nodo
//   return param;
//  }
  if(this._length == 0){
    return null
  }
  let current = this.head;
  let check = false;
  if(current.value == param){
    check = true
  }
  while(!check && current.next != null){
    current = current.next;
    if(current.value == param){
      check = true;
    }
  }
  if(check){
    return current.value;
  }else{
    if(param){ //cb evaluada en el valor del nodo
      return param;
    }
    return null;
  }
} */

LinkedList.prototype.search = function(param){
  if(this._length == 0){//Lista vacía
    return null;
  }
  if(typeof param === 'string'){
    let current = this.head;
    let find = false;
    if(current.value === param){
      return param;
    }else{
      while(!find && current.next !== null){
        current = current.next;
        if(current.value === param){
          find = true
        }
      }
      if(find){
        return param;
      }else{
        return null
      }
    }
  }else if(typeof param === 'function'){
    let current = this.head;
    let find = false
    if(param(current.value)){
      return current.value
    }else{
      while(!find && current.next !== null){
        current = current.next;
        if(param(current.value)){
          find = true;
        }
      }
      if(find){
        return current.value;
      }else{
        return null
      }
    }
  }else{
    return null
  }
  /* let current = this.head;
  let check = false;
  let checkFun = false;
  if(current.value === param){//Primer nodo es el buscado se retorna el valor de ese nodo
    return current.value;
  }
  while(!check && current.next != null){//Recorrido de la lista hasta que encuentre el valor o la ejecucion de la callback de === true o no haya mas nodos en la lista
    current = current.next
    if(param === true){
      checkFun = true;
    }
    if(current.value == param){
      check = true;
    }
  }
  if(check || checkFun){
    return current.value;
  }else{
  return null;
  } */
}

/*  let lista = new LinkedList()
console.log(lista);
lista.add("Gary")
console.log(lista);
lista.add("Barto")
console.log(lista);
lista.add("Mila") 
console.log(lista);
lista.add("Otro") 
console.log(lista); */


/* console.log("Metodo remove")
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista); */

/* function fun (param){
  return true;
}
console.log("Metodo search")
console.log(lista.search("Gary"));
console.log(lista.search("Barto"));
console.log(lista.search("Otro"))
console.log(lista.search(fun())); */

//function LinkedList() {}

//function Node(value) {}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
