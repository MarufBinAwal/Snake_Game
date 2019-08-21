const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
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

fetch('http://localhost:3000/api/v1/users')
.then(res=>res.json())
.then(users=>{
    console.log(users)
    users.forEach(user=>{
    //   console.log(user.name)
      getUsers(user)
      user.scores.forEach(score=> {
       console.log(score.s)
       getScores(score)
      })
    //   console.log(user.name)
    })

})


getScores= score =>{
    let body= document.querySelector('body')
    let div= document.createElement('div')
    let ul= document.createElement('ul')
    let li= document.createElement('li')
    li.className="myLi"
    li.innerText= score.s
    li.style.color= "purple"
    li.style.textAlign="center"
    ul.className="myUl"
    ul.append(li)
    div.className="myDiv"
    div.append(ul)
    body.append(div)
    body.style.height="100px"
    // ul.style.width="30px"
    }  

getUsers= user =>{
let body= document.querySelector('body')
let div= document.createElement('div')
let ul= document.createElement('ul')
let li= document.createElement('li')
li.className="myLi"
li.innerText= user.name
li.style.color= "purple"
li.style.textAlign="center"
ul.className="myUl"
ul.append(li)
div.className="myDiv"
div.append(ul)
body.append(div)
body.style.height="100px"
// ul.style.width="30px"


}


let form = document.querySelector('.form-inline mt-2 mt-md-0')
let input = document.querySelector('.form-control mr-sm-2')