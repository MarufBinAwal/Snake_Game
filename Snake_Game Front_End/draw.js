// grab the canvas in html, grab the context inside, set scale to 30 pixel then create rows and columns inside of canvas
// setup function creates instances of snake, fruit and the location that the fruit is generated
// eventlistener was added here to listen for arrow keys being clicked 
// snake.eat will run when snake eats fruit and make it larger

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const scale = 30;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

    }, 250);
}());

window.addEventListener('keydown', ((e)=> {
    const direction = e.key.replace("Arrow", '')
    snake.changeDirection(direction);
}));

