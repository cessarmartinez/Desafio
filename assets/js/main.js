let seleccionar = document.querySelector('select');
let rosario = document.getElementById('rosario__Div');
let bsas = document.getElementById('bsas__Div');
let cordoba = document.getElementById('cordoba__Div');

seleccionar.addEventListener('change', elegirCiudad);

function elegirCiudad() {
  let eleccion = seleccionar.value;

  if (eleccion === 'bsas__Value') {

    cordoba.classList.add("oculto");
    rosario.classList.add("oculto"); 
    bsas.classList.remove("oculto");

  } else if (eleccion === 'cordoba__Value') {

    bsas.classList.add("oculto");
    rosario.classList.add("oculto");
    cordoba.classList.remove("oculto");

  } else if (eleccion === 'rosario__Value') {

    bsas.classList.add("oculto");
    cordoba.classList.add("oculto");
    rosario.classList.remove("oculto");

  }
}