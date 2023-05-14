/* class Node{
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
class LinkedList{
    constructor(){
      this.head = null;
      this._length = 0;
    }
    add(value) {
      const nodo = new Node(value);
      let current = this.head;
      if(!current){
        this.head = nodo //Si current es null, head va a ser este nodo que estoy agregando
      }else{
        while(current.next){ //mientras current.next tenga algo
            //console.log('Entra al while');
          current = current.next; //pararme en el siguiente nodo
        } //Cuando se encuentra con el ultimo
        //console.log("Pasa fuera del while");
        //console.log("Currentnext", current.next)
        current.next = nodo; //le agrega el nuevo
        //console.log(current.next);
        //console.log("nodo", nodo)
      }
      this._length++
      return nodo;
    }
    remove(){
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
    search(param){
      let current = this.head;
      let check = false;
      if(this._length == 0){//Lista vacía
        return null;
      } 
      if(current.value === param){//una sola vez. Evalúa si el valor del primer nodo es el parametro
        return current.value;
      }
      /* if(param === true){//La callback retorna true
        param = current
        return param.value
      } */
      /* let checkFun = false; */
      /* if(param === true){
        return
      } */
     /*  while(!check && !checkFun && current.next != null){//Recorrido de la lista hasta que encuentre el valor o la ejecucion de la callback de === true
        if(param === true){
          return current.value;
        }
        current = current.next; */
        /* if(param === true){//La callback retorna true
          checkFun = true
        } */
       /*  if(current.value == param){
          check = true;
        }
      }
      /* if(checkFun){
        return current.value
      } */
      /* if(check){
        return param;
      }
      return null 
    }
  }  */



/* let lista = new LinkedList()
console.log(lista);
lista.add("Gary")
console.log(lista);
lista.add("Barto")
console.log(lista);
lista.add("Mila") 
console.log(lista);
lista.add("Otro") 
console.log(lista);


function fun (parametroFuncion){
  return parametroFuncion === "Otro";
}
console.log("Metodo search")
console.log(lista.search(fun("Otro"))); */
/* console.log(lista.search("Gary"));
console.log(lista.search("Barto"));
console.log(lista.search("Otro"))
console.log(lista.search(fun()))
console.log(lista.search("asdasdas")); */

/*console.log("Metodo remove")
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);  */

/* function fun (param){
  return true;
}
console.log("Metodo search")
console.log(lista.search(fun()));
console.log(lista.search("Gary"));
console.log(lista.search("Barto"));
console.log(lista.search("Otro"))
console.log(lista.search(fun()));
console.log(lista.search("asdasdas"));  */

//console.log(lista.remove());

/* LinkedList.prototype.add = function(value) {
    let nodo = new Node(value);
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
  } */




/*    console.log("GPT");
  // Define la clase Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define la clase LinkedList
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Agrega un nodo al final de la lista
  addNode(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // Si la lista está vacía, establece el nuevo nodo como cabeza y cola
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si la lista no está vacía, agrega el nuevo nodo después de la cola y actualiza la cola
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}

// Crea una lista y agrega algunos nodos
const list = new LinkedList();
list.addNode('Gary');
list.addNode('Barto');
list.addNode('asdas');
list.addNode('alskd')
// Imprime la lista
console.log(list); */

/* remove(){
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
    //console.log("Dentro del remove prev es:", prev)
    //console.log("Dentro del remove current es:", current)
    prev.next = null
    this._length--
    return current;
  }
} */

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

//EJERCICIO 1 RESUELTO
/* function Node(value){
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
} */

//EJERCICIO TERMINADO CON CLASS

class Node{
  constructor(value){
  this.value = value;
  this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this._length = 0;
  }
  add(value){
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
  remove(){
    let current = this.head; //Me paro en el primer nodo
    if(!current){ //Si el primer nodo es null
      return null; //retrono null porque no hay nodos para eliminar
    }else if(current.next == null){//Si head es el unico nodo
      this._length--
      this.head = null //Asigno null al primer nodo (lista vacía)
      return current.value; //Retorno el nodo eliminado
    }else{
      let prev = current; //Defino una variable para almacenar el nodo previo a cada ejecucion del while
      while(current.next){ //Mientras no esté parado en el último elemento
        prev = current //Me dejo guardado el elemento en el que estaba parado antes de la ultima ejecucion (el anteultimo nodo)
        current = current.next; //Me paro en el siguiente elemento
      }
      prev.next = null //Borro lo que está en la propiedad next del anteultimo nodo (el ultimo nodo)
      this._length--
      return current.value; //.value es porque espera que le retorne el valor y no el nodo
    }
  }
  search(param){
    if(this._length == 0){ //Si la lista está vacía
      return null;
    }
    if(typeof param === 'string'){ //Si el parametro es de tipo string:
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
}

function HashTable(){
  this.buckets = new Array(35); //Define un array con 35 posiciones vacías
  this.numBuckets = this.buckets.length;
}


HashTable.prototype.hash = function(string){
  let arr = string.split("");
  let suma = 0
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
  objeto[clave] = valor //Es la forma que encontré que no se guarde el string "clave" sino el string que se me pasa por paramtero
  this.buckets[claveHasheada] = objeto
}

HashTable.prototype.get = function(clave){
  let claveHasheada = this.hash(clave)
  let valorBuscado = this.buckets[claveHasheada]
  return valorBuscado[clave]
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
console.log(tabla.hash("Gary"))
console.log(tabla.hash("Mila"))
console.log(tabla.hash("laMi"))
console.log(tabla.numBuckets);
tabla.set("Gary","Cat")
tabla.set("Mila","BlackCat")
tabla.set("Juli","Juli")
tabla.set("foo","valor1")
tabla.set("ofo","valor2")
console.log(tabla.buckets);
console.log(tabla.get("Gary"));
console.log(tabla.hasKey("Gary"));



//LINKEDLIST

console.log("Metodo search")
console.log(lista.search(fun("Otro")));
console.log(lista.search("Gary"));
console.log(lista.search("Barto"));
console.log(lista.search("Otro"))
console.log(lista.search(fun()))
console.log(lista.search("asdasdas"));

console.log("Metodo remove")
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);
console.log(lista.remove());
console.log(lista);

/* function fun (param){
  return true;
}
console.log("Metodo search")
console.log(lista.search(fun()));
console.log(lista.search("Gary"));
console.log(lista.search("Barto"));
console.log(lista.search("Otro"))
console.log(lista.search(fun()));
console.log(lista.search("asdasdas"));*/

/* HashTable.prototype.set = function(clave,valor){
  let claveHasheada = this.hash(clave)
  let objeto = {}
  objeto[clave] = valor
  if(this.buckets[claveHasheada] && this.buckets[claveHasheada].hasOwnProperty(`${clave}`)){// Si la clave ya existe, sobreescribo el valor
    this.buckets[claveHasheada] = objeto
  }
 else if(this.buckets[claveHasheada]){
    let arr = [this.buckets[claveHasheada]];
    let objEnArray = [objeto]
    arr.concat(objEnArray)
    this.buckets[claveHasheada] = arr
    console.log(arr)
  }else{
     //Es para que no se guarde el string "clave" sino el string que se me pasa por parametro
    /* if(this.buckets[claveHasheada] && objeto[clave] != valor){//Si la Bucket está ocupada y el objeto tiene la misma clave pero distinto valor, reasigno el valor
      objeto[clave] = valor
    } */
    /* else if(this.buckets[claveHasheada]){//Si la bucket está ocupada pasar a la siguiente
    claveHasheada++
    } */
    /*this.buckets[claveHasheada] = objeto
  }
} */