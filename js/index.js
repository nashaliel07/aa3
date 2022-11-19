let carrusel = document.querySelector(".listas");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let intervalo = null;

let step = 2 ;

const start = () =>{
     intervalo = setInterval(function(){
      carrusel.scrollLeft = carrusel.scrollLeft + step;

      if (carrusel.scrollLeft === maxScrollLeft) {
        step = step * -2;
      } else if (carrusel.scrollLeft === 0) {
        step = step * -2;
      }

    }, 10)
}

const stop = () =>{
  clearInterval(intervalo);
}


carrusel.addEventListener("mouseover",() =>{
  stop();
})

carrusel.addEventListener("mouseout",() =>{
  start();
})


start();