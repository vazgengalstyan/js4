//task 1
let elements = document.querySelectorAll('a')
let arr = [elements]

let links = document.getElementsByTagName("a");

let paintLink = (arr) => {
        for (let i = 0; i < arr.length; i++) {
                if (i % 2 !== 0) {
                        arr[i].style.color = 'red'
                }
        }
}

paintLink(links);

//task 2

let pushHref = (arr) => {
        let arr1 = [];
        for (let i = 0; i < arr.length; i++) {
                arr1.push(arr[i].getAttribute('href'))
        }
        console.log(arr1)
}
pushHref(links)


//task 3
let element = document.querySelector('#block1')
element.setAttribute('test_attribute', 'block1_value')
console.log(element)

//task 4
let link = document.querySelector('#block2')
link.setAttribute('target', 'blank')
console.log(link)

//task 5
let deleteAttribute = (arr) => {
        for (let i = 0; i < arr.length; i++) {
                if (i % 2 !== 0) {
                        arr[i].removeAttribute('href')
                }
                console.log(arr[i]);
        }

}

deleteAttribute(links);






