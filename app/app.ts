console.log("I'm working")
function startGame(){
    var messageElement = document.getElementById('message');
    messageElement.innerText = "Welcome to MultiMath Game!"
}

document.getElementById('startGame').addEventListener('click',startGame);