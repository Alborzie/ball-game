let ball = document.querySelector("#ball")
let x = 0
let y = 0
let speedx = 2
let speedy = 2

let block = document.querySelector("#block")
let xBlock = (window.innerWidth-100)/2
let blockspeed = 15
block.style.left = xBlock + "px"

let score = 0

function moveball(){
    x += speedx
    y += speedy

    ball.style.top = y + "px"
    ball.style.left = x + "px"

    if( x>(window.innerWidth-40) || x<0){ speedx = -1 * speedx }
        
    if(y<0){ speedy = -1 * speedy }
    
    if (y > (window.innerHeight - 69)) {
        if ((x+20) < xBlock || (x+20) > (xBlock + 100)) {
            alert("YOU LOST!!")
            return;
        }
        speedy = -1 * speedy;
        score++
        ball.innerHTML = `${score}`
    }

    requestAnimationFrame(moveball)
}
moveball()

function keypress(e){
    if(e.key=="e"){
        xBlock += blockspeed
        if(xBlock<(window.innerWidth-100)){
            block.style.left = xBlock + "px"
            return
        }
        xBlock -= blockspeed
            
    }
    if(e.key=="q"){
        xBlock -= blockspeed
        if(xBlock>0){
            block.style.left = xBlock + "px"
            return
        }
        xBlock += blockspeed
            
    }
}
