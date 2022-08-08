//task 1 Հետեւյալ օբյեկտից նկարել ծառ html-ում, և ծառի ամեն ճյուղը ներկել կարմիր։

let data = {
        "Рыбы": {
                "форель": {},
                "лосось": {}
        },

        "Деревья": {
                "Огромные": {
                        "секвойя": {},
                        "дуб": {}
                },
                "Цветковые": {
                        "яблоня": {},
                        "магнолия": {}
                }
        }
};


let crateData = data => {
        let tree = document.createElement('ul');
        for (let key in data) {
                let list = document.createElement('li');
                list.innerText = key;


                let valueObj = crateData(data[key]);
                if (valueObj) {
                        list.append(valueObj);
                        valueObj.style.color = 'red'
                }

                tree.append(list);
        }

        return tree;
}


let func = (dataBase, data) => {
        dataBase.append(crateData(data));
}
let dataBase = document.getElementById('dataBase');
func(dataBase, data);

//task 2 Գրել ֆունկցիա, որը նման մասիվից html-ում կավելացնի էլեմենտներ։

let elements = [
        { element: 'p', content: 'test text', id: 1 },
        { element: 'div', class: 'block', id: 2 },
        { element: 'input', value: 'test'}
]

let func1 = elements => {
        elements.forEach((item) => {

                let array = document.createElement(item.element)
                for (let key in item) {
                        array.setAttribute(key, item[key])

                }
                document.getElementById('divId').append(array)

        })
}
func1(elements)

