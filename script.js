let arr = ['red', 'green', 'yellow']
let element1 = document.getElementById('test_id1')

let selectedColorIndex = 0;

 let changeColor = () => {
    if (selectedColorIndex < arr.length-1){
        selectedColorIndex++
    }else{
        selectedColorIndex =  0
    }

   element1.style.backgroundColor = arr[selectedColorIndex];
  
}
 setInterval(changeColor, 2000)
changeColor()

let element2 = document.getElementById('test_id2')

let selectedColorIndex1 = 1;

 let changeColor1 = () => {
    if (selectedColorIndex1 < arr.length-1){
        selectedColorIndex1++
    }else{
        selectedColorIndex1 =  0
    }

   element2.style.backgroundColor = arr[selectedColorIndex1];
  
}
 setInterval(changeColor1, 2000)
changeColor1()

let element3 = document.getElementById('test_id3')

let selectedColorIndex2 = 2;

 let changeColor2 = () => {
    if (selectedColorIndex2 < arr.length-1){
        selectedColorIndex2++
    }else{
        selectedColorIndex2 =  0
    }

   element3.style.backgroundColor = arr[selectedColorIndex2];
  
}
 setInterval(changeColor2, 2000)
changeColor2()




