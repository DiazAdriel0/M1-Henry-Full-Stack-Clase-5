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
      let checkFun = false;
      /* if(param === true){
        return
      } */
      while(!check && !checkFun && current.next != null){//Recorrido de la lista hasta que encuentre el valor o la ejecucion de la callback de === true
        if(param === true){
          return current.value;
        }
        current = current.next;
        /* if(param === true){//La callback retorna true
          checkFun = true
        } */
        if(current.value == param){
          check = true;
        }
      }
      /* if(checkFun){
        return current.value
      } */
      if(check){
        return param;
      }
      return null 
    }
  }



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