let element=document.getElementById('block')

element.addEventListener('mousemove',function(e){
    element.style.left=e.pageX+'px'
    element.style.top=e.pageY+'px'
})
 