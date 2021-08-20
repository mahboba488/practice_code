const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let eyes = [];
let theta;

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove' , function(e){
    mouse.x = Event.x;
    mouse.y = Event.y;

});

class Eye {
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(){
        //draw eye

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillstyle = "Red";
        ctx.fill();
        ctx.closePath();

        //draw iris


        //draw pupil

        //draw pupil reflection

        //draw mouse
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2, true);
        ctx.fillstyle = "Gold";
        ctx.fill();
        ctx.closePath();

    }
}

function init(){
    eyes = [];
    let numberofeyes = 20;
    for (let i = 0; i < numberofeyes; i++){
        let eye = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.floor(Math.random() * 100) + 5
        }
        eyes.push(new Eye(eye.x, eye.y, eye.radius));

    }
    

}

function animate(){
    requestAnimationFrame(animate);
    ctx.fillstyle = "rgba(0 , 0, 0,.25)";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    for(let i = 0; i < eyes.length; i++)
    {
        eyes[i].draw();
    }
}

init();
animate();