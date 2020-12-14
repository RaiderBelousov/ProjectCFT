let elements = document.querySelectorAll('*');
let countElements = elements.length;
let randomNumber;
let randomColor;
let numberOfColor = 50;
let i = 0;
let stylesArray = [];

let randomColorResult = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    randomColor = 'rgb(' + red + ',' + green + "," + blue + ')';
};

let randomElement = () => {
    randomNumber = Math.floor(Math.random() * countElements + 1);
};

setInterval(() => {
    if (i < numberOfColor) {
        randomElement();
        randomColorResult();
        if (!stylesArray[i]) {
            stylesArray[i] = document.createElement('style');
            document.getElementsByTagName('head')[0].appendChild(stylesArray[i]);
        }
        stylesArray[i].innerHTML = `.myClass${i} { background-color: ${randomColor};}`;
        let foundClass;
        const elementClassList = elements[randomNumber].classList;
        for (let i = 0; i < elementClassList.length; i++) {
            if (elementClassList.item(i).includes('myClass')) {
                foundClass = elementClassList.item(i);
                break;
            }
        }
        if (foundClass) {
            elementClassList.remove(foundClass);
        }
        elements[randomNumber].classList.add(`myClass${i}`);
        i++;
    } else {
        i = 0;
    }
}, 2000);

setInterval(() => {
    randomElement();
    let foundClass;
    const elementClassList = elements[randomNumber].classList;
    for (let i = 0; i < elementClassList.length; i++) {
        if (elementClassList.item(i).includes('myClass')) {
            foundClass = elementClassList.item(i);
            break;
        }
    }
    if (foundClass) {
        elementClassList.remove(foundClass);
        console.log('removed ', foundClass);
    }
}, 2000);
