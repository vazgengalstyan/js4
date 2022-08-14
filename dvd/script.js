// let dvd = document.getElementById('dvd')
// let section = document.getElementById('section')

// section.style.height = window.innerHeight + 'px';
// section.style.width = window.innerWidth + 'px';

// let xPosition = 10;
// let yPosition = 10;
// let xSpeed = 10;
// let ySpeed = 10;


// function update() {
//     dvd.style.left = xPosition + 'px';
//     dvd.style.top = yPosition + 'px';
// }

// setInterval(() => {
//     if (xPosition + dvd.clientWidth >= window.innerWidth || xPosition <= 0){
//         xSpeed=-xSpeed
//     } if (yPosition + dvd.clientHeight >= window.innerHeight || yPosition <= 0){
//         ySpeed=-ySpeed
//     }

//     xPosition += xSpeed;
//     yPosition += ySpeed;
//     update()
// }, 1000)



let vertical = 'bottom'
let horizontal = 'right'
 let dvd = document.getElementById('dvd')

// let verticalFunc = () => {
//     if (vertical === 'bottom') {
//         dvd.style.top=`${dvd.offsetTop +10}px`
//        if( dvd.offsetHeight+dvd.offsetTop>=window.innerHeight){
//            vertical='top'
//        }else{
//            dvd.style.bottom=`${dvd.offsetTop-10}px`
          
//        }
//     }
// }
let verticalFunc = () => {
        if (vertical === 'bottom') {
            dvd.style.top=`${dvd.offsetTop +2}px`
           if( dvd.offsetHeight+dvd.offsetTop>=window.innerHeight){
               vertical='top'
           }
        }else{
            dvd.style.top=`${dvd.offsetTop-2}px`
                 if(dvd.offsetTop===0){
                     vertical='bottom'
                 }
              }
    }
    let horizontalFunc = () => {
        if (vertical === 'bottom') {
            dvd.style.left=`${dvd.offsetLeft +200}px`
           if( dvd.offsetWidth+dvd.offsetLeft>=window.innerWidth){
               vertical='top'
           }
        }else{
            dvd.style.left=`${dvd.offsetLeft-200}px`
                 if(dvd.offsetLeft===0){
                     horizontal='right'
                 }
              }
    }
setInterval(()=>{
    verticalFunc()
    horizontalFunc()
},1000)