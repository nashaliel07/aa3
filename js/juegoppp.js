

function aleatorio(min, max)    {
    return Math.floor(Math.random() *(max - min + 1)+ min )
}
let jugador = 0
let pc = aleatorio(1,3)
jugador = prompt("Ingresa tu opción: 1)piedra 2)papel 3)tijera ");



if(jugador == 1) 
    {
        var imagen = `<img src="https://gastonpereyra.github.io/rock-scissor-paper/img/rock-icon-grey.png"/>`
    document.write(`<p>Elejiste</p>${imagen}`)
    } 
else if(jugador == 2)
    {
        var imagen = `<img src="https://gastonpereyra.github.io/rock-scissor-paper/img/paper-icon-grey.png"/>`
        document.write(`<p>Elejiste</p>${imagen}`)
    } 
else if(jugador == 3)
    {
        var imagen = `<img src="https://gastonpereyra.github.io/rock-scissor-paper/img/scissors-icon-grey.png"/>`
        document.write(`<p>Elejiste</p>${imagen}`)
    } 
else{ document.write("<h1>ELEJISTE PERDER!!</h1>")  }


if(pc == 1) {
    var imagen = `<img src="https://gastonpereyra.github.io/rock-scissor-paper/img/rock-icon-grey.png"/>`
    document.write(`<p>PC elije</p>${imagen}`)
    } 
else if(pc == 2){
    var imagen = `<img src="https://gastonpereyra.github.io/rock-scissor-paper/img/paper-icon-grey.png"/>`
    document.write(`<p>PC elije</p>${imagen}`)
    } 
else if(pc == 3){
    var imagen = `<img src="https://gastonpereyra.github.io/rock-scissor-paper/img/scissors-icon-grey.png"/>`
    document.write(`<p>PC elije</p>${imagen}`)
    } 
else{ 
    document.write("<h1>PC ELIJE PERDER!!</h1>$")
    }

switch (true) {
    case  (jugador == pc):
        document.write('<p>!Es un empate¡</p>');
        break;
    case (jugador == 1 && pc == 3):
        document.write('<p>!Ganaste¡</p>');
        break;
    case  (jugador == 2 && pc == 1):
        document.write('<p>!Ganaste¡</p>')
        break;
    
    case  (jugador == 3 && pc == 2):
        document.write('<p>!Ganaste¡</p>')
        break;
    default:
        document.write('<p>¡Perdiste!</p>');       
}

   