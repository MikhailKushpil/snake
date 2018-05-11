window.onload = function () {
    document.addEventListener("keydown",Button,false);
    let canvas = document.getElementById('fild');
    let ctx = canvas.getContext('2d');
    let snakeLength = 4;
    let stepSnake = 50;
    let Mark = [];
    let timeIterval = 400;
    let stepX = 50;
    let stepY = 0;
    let Snake = [];
    let width = 450;
    let height = 450;

    function marker(){  
        let x1 = (Math.floor(Math.random() * 9 + 1))*stepSnake;
        let y1 = (Math.floor(Math.random() * 9 + 1))*stepSnake;
        for(let i=0; Snake.length > i;i++){
            if(x1 == Snake[i].x && y1 == Snake[i].y){
                x1 = (Math.floor(Math.random() * 9 + 1))*stepSnake;
                y1 = (Math.floor(Math.random() * 9 + 1))*stepSnake;
                i = 0;
            } 
        }
        console.log()
        Mark.push({x : x1, y : y1 });
    };

    function createSnake(){
        for(let i=0; snakeLength > i;i++){
            if(i == 0){
                Snake.push({x: 0, y: 0});
                marker();
            } else{
                Snake.push({ x : Snake[i-1].x + stepX, y: 0 + stepY });
            }
        }       
    }
    createSnake();

    function drawSnake(){
        for(let i=0; Snake.length > i;i++){
            ctx.fillRect (Snake[i].x, Snake[i].y, 50, 50);
            ctx.strokeRect (Snake[i].x, Snake[i].y, 50, 50);
            ctx.fillStyle ="#7CFC00";
        }
        ctx.strokeRect (Mark[0].x, Mark[0].y, 50, 50);
    }
    drawSnake();

    function moveSnake(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let newStep = {x: Snake[Snake.length-1].x + stepX, y: Snake[Snake.length-1].y + stepY};
        Snake.push(newStep);
        Snake.shift();
        gameOver();
        eatMark();
        drawSnake();
    }

    moveSnake();

    function eatMark(){
        for(let i=0; Snake.length > i;i++){
            if((Mark[0].x == Snake[Snake.length-1].x) && (Mark[0].y == Snake[Snake.length-1].y)){
                Snake.push(Mark[0]);
                Mark.shift();
                marker();
            }
        }
    }

    function gameOver(){
        for(let i=0; Snake.length-1 >i; i++){
            if((Snake[i].x === Snake[Snake.length-1].x) && (Snake[i].y === Snake[Snake.length-1].y)){
                document.location.reload();
                alert("Game over!!!");
                break;
            }
            if(((Snake[Snake.length-1].x) > width) || (Snake[Snake.length-1].x) < 0){
                document.location.reload();
                alert("Game over!!!");
                break;
            }
            if(((Snake[Snake.length-1].y) > height) || (Snake[Snake.length-1].y) < 0){
                document.location.reload();
                alert("Game over!!!");
                break;
            }
        }
    }

    // requestAnimationFrame(moveSnake);
    setInterval(moveSnake, timeIterval);

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
