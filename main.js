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


    if(key === "ArrowUp" && yPosition > 0) {//O y comeca no topo da tela com valor 0, logo nao pode ser negativo, pois estaria saindo dos limites superiores da tela
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition < SCREEN_HEIGHT - 80) { // Quanto mais se desce, mais o valor de y aumenta, logo, o valor de y nao pode ser maior que a altura da tela - 80, pois estaria saindo dos limites inferiores da tela
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition > 0) { // O x comeca na esquerda da tela com valor 0, logo nao pode ser negativo, pois estaria saindo dos limites esquerdos da tela
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight" && xPosition < SCREEN_WIDTH + 200) { // Quanto mais se anda para a direita, mais o valor de x aumenta, logo, o valor de x nao pode ser maior que a largura da tela + 200, pois estaria saindo dos limites direitos da tela(tenho monitor ultrawide, entao a largura da tela é maior)
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
