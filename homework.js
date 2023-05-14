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
  const nodo = new Node(value); //Creo una instancia de la clase Node que toma el parametro que recibe el metodo add y lo asigna como Node.value
  let current = this.head; //Me paro en el primer nodo
  if(!current){
    this.head = nodo //Si el primer nodo es null, head va a ser este nodo que estoy agregando (el primero)
  }else{
    while(current.next){ //mientras current.next valga algo distinto de null. O sea mientras current no sea el último nodo de la lista
      current = current.next; //Me paro en el siguiente nodo
    } //Cuando se encuentra con el ultimo
    current.next = nodo; //Agrego el nuevo nodo al final de la lista
  }
  this._length++ //Siempre que se ejecuta la función sumo uno a la propiedad de longitud
}

LinkedList.prototype.remove = function(){
  let current = this.head; //Me paro en el primer nodo
  if(!current){ //Si el primer nodo es null
    return null; //retrono null porque no hay nodos para eliminar
  }else if(current.next == null){//Si head es el unico nodo
    this._length--
    this.head = null //Asigno null al primer nodo (lista vacía)
    return current.value; //Retorno el nodo eliminado
  }
  let prev = current; //Defino una variable para almacenar el nodo previo a cada ejecucion del while
  while(current.next){ //Mientras no esté parado en el último elemento
    prev = current //Me dejo guardado el elemento en el que estaba parado antes de la ultima ejecucion (el anteultimo nodo)
    current = current.next; //Me paro en el siguiente elemento
  }
  prev.next = null //Borro lo que está en la propiedad next del anteultimo nodo (el ultimo nodo)
  this._length--
  return current.value; //.value es porque espera que le retorne el valor y no el nodo
}

LinkedList.prototype.search = function(param){
  if(this._length == 0){ //Si la lista está vacía
    return null;
  }
  if(typeof param === 'string' || typeof param === 'number'){ //Si el parametro es de tipo string o número:
    let current = this.head; //Me paro en el primer nodo
    let find = false; //Creo un controlador para usarlo cuando encuentre el valor pasado por parametro
    if(current.value === param){ 
      return current.value; //Si encuentro el parámetro en el head lo retorno
    }else{
      while(!find && current.next !== null){ //Recorro la lista hasta el final o hasta encontrar el Node.value que coincida con el parámetro
        current = current.next;
        if(current.value === param){
          find = true //Si encuentro el parámetro en algún nodo esto va a dejar de ejecutar el while por lo que en current me va a quedar guardado el Nodo que contiene al parametro buscado
        }
      }
      if(find){
        return current.value; //Si se encontró lo retorno
      }else{
        return null //Si no se encontró coincidencia retorno null
      }
    }
  }else if(typeof param === 'function'){ //Sino, si es de tipo function:
    let current = this.head;
    let find = false
    if(param(current.value)){ //Si la callback evaluada en el valor de head retorna true
      return current.value //Retorno el valor de head
    }else{ //Sino lo busco en la lista
      while(!find && current.next !== null){ //Misma logica del while anterior
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
    return null //Por si no se pasa ni un string ni una callback
  } 
}

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

function HashTable(){
  this.buckets = new Array(35); //Define un array con 35 posiciones vacías
  this.numBuckets = this.buckets.length;
}


HashTable.prototype.hash = function(string){
  let arr = string.split("");
  let suma = 0;
  for(let i = 0;i < arr.length; i++){
    let element = arr[i];
    let valorNumerico = element.charCodeAt()
    suma = suma + valorNumerico
  }
  let resultado = suma % this.numBuckets 
  return resultado
}

HashTable.prototype.set = function(clave,valor){
  let claveHasheada = this.hash(clave)
  let objeto = {}
  objeto[clave] = valor
  if(this.buckets[claveHasheada] && this.buckets[claveHasheada].hasOwnProperty(`${clave}`)){// Si la clave ya existe, sobreescribo el valor
    this.buckets[claveHasheada] = objeto
  }else if(this.buckets[claveHasheada]){
    this.buckets[claveHasheada][clave] = valor
  }else{
    this.buckets[claveHasheada] = objeto
  }
}

HashTable.prototype.get = function(clave){
  let claveHasheada = this.hash(clave);
  let objetoBuscado = this.buckets[claveHasheada];
  console.log(objetoBuscado);
  if(!objetoBuscado[clave]){
    return "No existe la clave";
  }
  let valorBuscado = objetoBuscado[clave];
  return valorBuscado;
}

HashTable.prototype.hasKey = function(clave){
  for (let i = 0; i < this.buckets.length; i++) {
    const element = this.buckets[i];
    if(element && element.hasOwnProperty(`${clave}`)){//El primer element es para comprobar si la posicion está ocupada, si no lo pongo lanza error
      return true
    }
  }
  return false
}

let tabla = new HashTable ();
console.log(tabla.hash("Gary"));
console.log(tabla.hash("Mila"));
console.log(tabla.hash("laMi"));
console.log(tabla.hash("liJu"));
console.log(tabla.numBuckets);
tabla.set("Gary","Cat");
console.log(tabla.buckets[18]);
console.log(tabla.get("Gary"));
tabla.set("Gary","White Cat");
console.log(tabla.buckets[18]);
tabla.set("Mila","BlackCat");
tabla.set("Juli","Juli");
console.log(tabla.buckets[19]);
tabla.set("liJu","valor 2");
console.log(tabla.buckets[19]);
tabla.set("foo","valor1");
console.log(tabla.buckets[9]);
tabla.set("ofo","valor2");
console.log(tabla.buckets[9])
console.log(tabla.buckets);
console.log(tabla.get("Gary"));
console.log(tabla.get("Juli"));
console.log(tabla.get("liJu"));
console.log(tabla.get("asdad"));
console.log(tabla.hasKey("Gary"));
console.log(tabla.hasKey("ryGa"));
console.log(tabla.hasKey("Juli"));
console.log(tabla.hasKey("liJu"));


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
