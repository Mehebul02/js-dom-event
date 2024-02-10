// console.log("hello world")


// 1st add 
const bgYellow =document.getElementById('yellow-bg');
    bgYellow.onclick=makeBg;

    function makeBg(){
        document.body.style.background='yellow'
    }


    // 2nd opposition 
    const bgBlack =document.getElementById('bg-black');
    bgBlack.onclick = function makeBlack(){
        document.body.style.backgroundColor='black'
    }

    // option 4
    const pinkBg =document.getElementById('pink-bg');
    pinkBg.addEventListener('click',makePink )
    function makePink(){
     document.body.style.backgroundColor='pink'
 }
//  Final option 
document.getElementById('green-bg').addEventListener('click',function(){
    document.body.style.backgroundColor='green'
 })
