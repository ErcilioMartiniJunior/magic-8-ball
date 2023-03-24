let userName = '' // write your name

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

let userQuestion = '' // ask a question

console.log(`${userName} has asked: ${userQuestion}`)

randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''

switch(randomNumber) {
  case 0:
  eightBall = 'It is certain'
  break;
  case 1:
  eightBall = 'It is decidedly so'
  break;
  case 2:
  eightBall = 'Reply hazy try again'
  break;
  case 3:
  eightBall = 'Cannot predict now'
  break;
  case 4: 
  eightBall = 'Do not count on it'
  break;
  case 5: 
  eightBall = 'My sources say no'
  break;
  case 6:
  eightBall = 'Outlook not so good'
  break;
  case 7: 
  eightBall = 'Outlook not so good'
  break;
}

console.log(`The Magic 8 ball says: ${eightBall}.`)

/*

Versão com prompt() e function()

Nesta versão o código modificado usa o método prompt() para solicitar o nome do usuário e a pergunta, 
tornando-o mais interativo e eliminando a necessidade de editar o código para inserir esses valores.

O código modificado encapsula a lógica da Magic 8-Ball em uma função chamada getMagicEightBallAnswer(), 
tornando-o mais modular e facilitando a reutilização e a manutenção:

function getMagicEightBallAnswer() {
  let randomNumber = Math.floor(Math.random() * 8);
  
  switch(randomNumber) {
    case 0: return 'It is certain';
    case 1: return 'It is decidedly so';
    case 2: return 'Reply hazy try again';
    case 3: return 'Cannot predict now';
    case 4: return 'Do not count on it';
    case 5: return 'My sources say no';
    case 6: return 'Outlook not so good';
    case 7: return 'Outlook not so good';
  }
}

let userName = prompt("Please enter your name:", "");
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = prompt("Please ask a question:", "");
console.log(`${userName} has asked: ${userQuestion}`);

let eightBall = getMagicEightBallAnswer();
console.log(`The Magic 8 ball says: ${eightBall}.`);

*/

