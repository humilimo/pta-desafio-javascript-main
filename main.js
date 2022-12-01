const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];


const VELOCITY = 10;

const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];

window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })
    //innerWidth e innerHeight se tratam da largura e altura da janela do navegador, e não da tela do computador em si.

    if(key === "ArrowUp" && yPosition > 0) {//O y comeca no topo da tela com valor 0, logo nao pode ser negativo, pois estaria saindo dos limites superiores da tela
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition < innerHeight - 100) { // Quanto mais se desce, mais o valor de y aumenta, logo, o valor de y nao pode ser maior que a altura da tela - 100(altura da imagem do personagem), pois estaria saindo dos limites inferiores da tela
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition > 0) { // O x comeca na esquerda da tela com valor 0, logo nao pode ser negativo, pois estaria saindo do limite esquerdo da tela
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight" && xPosition < innerWidth - 100) { // Quanto mais se anda para a direita, mais o valor de x aumenta, logo, o valor de x nao pode ser maior que a largura da tela - 100(largura do personagem), pois estaria saindo dos limite direito da tela.
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
