//1.js-ում ստանալ հղումները և ամեն երկրորդի գույնը դարձել կարմիր։

let a = document.getElementsByTagName('a');

let func = (aTag) => {

    for (let i = 0; i <= aTag.length; i++) {
        if (i % 2 !== 0) {
            aTag[i].style.color = 'red'
         
        }
    }
}

func(a)
 
// 2.հղումներից ստանալ href-ները և լցնել մասիվի մեջ։  (մասիվը տպել):
let getHref= (a)=>{
    let arr=[];
    for(let i=0;i<a.length;i++){

        arr.push(a[i].getAttribute('href'))
    }
    console.log(arr);
}
getHref(a)

// 3. հղումներին ավելացնել ոչ ստանդարտ attribute։ Օրինակ test attribute, ինչ-որ value-ով։b

let setHref= (a)=>{
    for(let i=0;i<a.length;i++){
       a[i].setAttribute('test','hello')
    }
}
setHref(a)

//4.հղումներին ավելացնել ստանդարտ target attribute _blank value-ով։


let setTArgetHref= (a)=>{
    for(let i=0;i<a.length;i++){
       a[i].setAttribute('taregt','_blank')
    }
}
 setTArgetHref(a)

//5.ջնջել href attribute-ը ամեն երկրորդ հղումից։


let removeAtrr = (aTag) => {

    for (let i = 0; i <= aTag.length; i++) {
        if (i % 2 !== 0) {
            aTag[i].removeAttribute('href')
         
        }
    }
}

removeAtrr(a)