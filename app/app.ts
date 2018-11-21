import { Person } from './person';

let traderMax: Person = new Person('max',2000);

let x: string = "Whose banana?";

console.log("I'm working")

//start a game
function startGame():void{
    let messageElement: any; 
    messageElement = document.getElementById('message');
    messageElement.innerText = `Welcome to ${x} MultiMath Game! ${traderMax.name}`
}

document.getElementById('startGame').addEventListener('click',startGame);
console.log("talking");