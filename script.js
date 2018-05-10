window.onload = function () {
    document.addEventListener("keydown",Button,false);
    var canvas = document.getElementById('fild');
    var ctx = canvas.getContext('2d');
    var snakeLength = 4;
    var stepSnake = 50;

    let stepX = 50;
    let stepY = 0;

    let Snake = [];

    function createSnake(){
        for(let i=0; snakeLength > i;i++){
            if(i == 0){
                Snake.push({x: 0, y: 0});
            } else{
                Snake.push({ x : Snake[i-1].x + stepSnake, y: 0 });
            }
        }       
    }
    createSnake();

    function drawSnake(){
        for(let i=0; Snake.length > i;i++){
            ctx.strokeRect (Snake[i].x, Snake[i].y, 50, 50);
        }
    }
    drawSnake();

    function moveSnake(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let newStep = {x: Snake[Snake.length-1].x + stepX, y: Snake[Snake.length-1].y + stepY};
        Snake.push(newStep);
        Snake.shift();
        drawSnake();
    }

    moveSnake();
    
    setInterval(moveSnake, 600);
        function Button(e) {
        if(e.keyCode == 40){
            stepX = 0;
            stepY = stepSnake;
        }
        if (e.keyCode == 37){
            stepX = -stepSnake;
            stepY = 0;
        }
        if (e.keyCode == 39){
            stepX = stepSnake;
            stepY = 0;
        }
        if (e.keyCode == 38){
            stepX = 0;
            stepY = -stepSnake;
        }
    }
};
