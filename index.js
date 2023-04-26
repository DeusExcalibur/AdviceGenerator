const boton = document.querySelector('.boton');
const texto = document.querySelector('.texto');
const aviso = document.querySelector('.numero-aviso');
const url = 'https://api.adviceslip.com/advice';

boton.addEventListener('click', ()=>{
  traerData();
});

function traerData() {
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    modificarTexto(data);
  });
}

function modificarTexto(data) {
  texto.innerHTML = data.slip.advice;
  aviso.innerHTML = data.slip.id;
}

