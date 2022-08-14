let element=document.getElementById('block')
function  move() {
    element.onmousedown=function () {
        el=element
    }
}
document.onmousemove=function (el) {

    element.style.left=el.pageX+'px';
    element.style.top=el.pageY+'px'
}

