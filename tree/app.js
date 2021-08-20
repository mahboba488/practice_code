const canvas = document.querySelector('canvas');
const generateButton = document.querySelector('.generate-tree-button');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let curve = 10;
let curve2 = 0;


function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color1;
    ctx.fillStyle = color2;
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'rgba(0,0,0,.5)';
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    //ctx.lineTo(0, -len);
    

    if(angle >0){
        ctx.bezierCurveTo(curve2, -len/2 , curve2 ,-len/2 , 0 , -len);
    }
    else{
        ctx.bezierCurveTo(curve2 , -len/2 , curve2 ,-len/2 , 0 , -len);

    }
    ctx.stroke();
    if (len < 6) {
        //leafs
        ctx.beginPath();
        ctx.arc(0,-len,10,0,Math.PI/2);
        ctx.fill();
        
        ctx.restore();
        return;
    }

    //curve = (Math.random()*10)+10;

    drawTree(0, -len, len*0.8, angle+curve, branchWidth * 0.7);
    drawTree(0, -len, len*0.8, angle-curve, branchWidth * 0.7);
    ctx.restore();
}
drawTree(canvas.width/2, canvas.height - 80,100,0, 15, 'brown', 'green');
function generateRandomTree(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let centerPointX = canvas.width/2;
    let len = Math.floor((Math.random() * 20) +100);
    let angle = 0;
    let branchWidth = (Math.random()*70)+1;
    curve = (Math.random()*5)+10;
    curve2 = Math.random()*10;
  
    let color1 = 'rgb(' + Math.random() * 255 + ',' + Math.random()*255 + ','+ Math.random()*255 + ')';
    let color2 = 'rgb(' + Math.random() * 255 + ',' + Math.random()*255 + ','+ Math.random()*255 + ')';
    generateButton.style.background = color1;
    drawTree(centerPointX,canvas.height - 80 , len, angle , branchWidth , color1 , color2);

}

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawTree(canvas.width/2, canvas.height - 80,100,0, 15, 'brown', 'green');
});

generateButton.addEventListener('click', generateRandomTree);