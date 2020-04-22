//new Array(); forma de crear arrays

// objeto Literal o declarativo
const myInfo = {
  nombre: 'Pepito',
  edad: 18,
  mascotas: []
};

function showNavigationTemplate(){
  const navigationTemplate = 
`<ul>  
  <li>  
    <button onclick="showPage()">Home 
      <i class="fa fa-home" aria-hidden="true"></i>
    </button>   
  </li> 
  <li> 
    <button onclick="showPage(2)">About 
      <i class="fa fa-user" aria-hidden="true"></i>
    </button> 
  </li> 
</ul>`;
  let menu = document.getElementById('menu');
  menu.innerHTML = navigationTemplate;
}

function showPage(page = ''){
  if(page === '') {
    window.location.href = 'index.html';
  }else{
    window.location.href = 'about.html';
  }
}

function persona(){
  const myInfoTemplate = `
    <p>Nombre: <span>${myInfo.nombre}</span></p>
    <p>Edad: <span>${myInfo.edad}</span></p>
    <p>Mascotas:</p>
    <div>
      <form>
        <input type="text" name="petName" id="petName" />
        <button type="button" id="addButton">
          Agregar mascota
        </button>
      </form>
      <p id="message"></p>
    </div>
    <ul id="petList">
    </ul>
  `;
  const info = document.getElementById('myInfo');
  info.innerHTML = myInfoTemplate;

  const button = document.getElementById('addButton');
  button.addEventListener('click', addPet);
}

function addPet(){
  // console.log('------- Aqui ------- ', aquiReciboThis);
  const petName = document.getElementById('petName').value;
  const ul = document.getElementById("petList");
  let message = '';
  if(petName){
    const li = document.createElement("li");
    myInfo.mascotas.push(petName);
    // myInfo.mascotas['0'] ='ted';
    console.log('Lista de mascotas: ---> ', myInfo.mascotas)
    li.appendChild(document.createTextNode(petName));
    ul.appendChild(li);
  }else{
    message = 'Debe ingresar una mascota';
  }
  const messageText = document.getElementById('message');
  messageText.innerHTML = message;
}


showNavigationTemplate();
persona();



// Operadores arrays
// https://devcode.la/tutoriales/manejo-de-arrays-en-javascript/
//    ejemplo array
//    myInfo.mascotas = ['Ted', 'Alf'];

// *** Pop
//     Elimina el último elemento del array
//     myInfo.mascotas.pop(); 

// *** Shift
//     obtener el primer elemento de un array
//     myInfo.mascotas.shift(); 

// *** Unshift
//     Agregar elementos al inicio del array
//     myInfo.mascotas.unshift('Max');

// *** Reverse
//     Invertir el orden del array
//     myInfo.mascotas.reverse();

// *** Sort
//     ordena alfabeticamente
//     myInfo.mascotas.sort();

// *** Slice
//     devuelve los elementos en los que indiquemos la posicion
//     los argumentos: inicio y parada posiciones
//     un argumento,será el inicio y el final la última posición
//     myInfo.mascotas.slice(1,2);

// *** Splice
//     cambia el contenido de un array removiendo 
//      y/o agregando nuevos elementos
//     *** supresion
//     la posición primer elemento que desea eliminar 
//      y el número de elementos a eliminar
//     myInfo.mascotas.splice(1,1);
//     *** inserción
//     posicion donde se inserta
//     posicion elemento a borrar
//     texto nuevo elemento
//     myInfo.mascotas.splice(1,0, 'Ted');
//     *** reemplzar
//     posicion donde se inserta
//     posicion elemento a borrar
//     elementos a insertar
//     myInfo.mascotas.splice(0,0, 'Rob', 'Eli');

// operadores para recorrer arrays
// for
// for ... of
// map
// foreach
// filter (busqueda condicionada)



// objeto construido
//  keyword new, el cual nos permite crear un nuevo objet
function Persona(nombre, edad, sexo, pasatiempos) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
  this.pasatiempos = pasatiempos;
  this.hablar = function() {
    return `hola soy ${this.nombre}, y tengo ${this.edad} años`;
  };
}

const camilo = new Persona('camilo', 22, 'masculino', ['patinar', 'bailar']);

// console.log(camilo)