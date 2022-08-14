let element=document.getElementById('block')
function  move() {
    let el;
    element.onmousedown=function () {
        el=element
    }
}
document.onclick=function (el) {
    element.style.left=el.pageX+'px';
    element.style.top=el.pageY+'px'
}

