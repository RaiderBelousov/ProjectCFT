console.log("filterMenu загрузился");

let infoCards = [
    {
        "img": "img/dog-1.png",
        "breed": "Айну",
        "price": "12 000₽",
        "hunter": true,
        "companion": true,
        "decorative": true,
        "service": true,
        "noFear": true,
        "shedsLittle": true,
        "excellentHealth": true,
        "goodObedience": true,
        "veryDevoted": true
    },
    {
        "img": "img/dog-2.png",
        "breed": "Афганская борзая",
        "price": "13 000₽",
        "hunter": true,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-3.png",
        "breed": "Барбет",
        "price": "14 000₽",
        "hunter": false,
        "companion": true,
        "decorative": false,
        "service": false,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-4.png",
        "breed": "Бассет",
        "price": "15 000₽",
        "hunter": false,
        "companion": false,
        "decorative": true,
        "service": false,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-5.png",
        "breed": "Легавой",
        "price": "16 000₽",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": true,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-6.png",
        "breed": "Веттерхун",
        "price": "17 000₽",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": true,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-7.png",
        "breed": "Древера",
        "price": "18 000₽",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": false,
        "shedsLittle": true,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-8.png",
        "breed": "Ирландский терьер",
        "price": "19 000₽",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": true,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-9.png",
        "breed": "Амереканский кокер",
        "price": "20 000₽",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": true,
        "veryDevoted": false
    },
    {
        "img": "img/dog-10.png",
        "breed": "Английский Кокер",
        "price": "21 000₽",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": true
    },
    {
        "img": "img/dog-11.png",
        "breed": "Дункер",
        "price": "22 000₽",
        "hunter": true,
        "companion": true,
        "decorative": true,
        "service": true,
        "noFear": true,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    },
    {
        "img": "img/dog-12.png",
        "breed": "Спаниель",
        "price": "23 000₽",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": true,
        "shedsLittle": true,
        "excellentHealth": true,
        "goodObedience": true,
        "veryDevoted": true
    },
    {
        "img": "img/dog-13.png",
        "breed": "Цербер",
        "price": "100 000$",
        "hunter": false,
        "companion": false,
        "decorative": false,
        "service": false,
        "noFear": false,
        "shedsLittle": false,
        "excellentHealth": false,
        "goodObedience": false,
        "veryDevoted": false
    }
];

const randomSortCards = infoCards.sort(function () {
    return Math.random() - 0.5;
});
let parentItem = document.querySelector('.product-section');
let template = document.querySelector('.product-list__item');
const fragment = document.createDocumentFragment();
randomSortCards.forEach((infoCards) => {
    const item = template.cloneNode(true);
    item.querySelector('img').src = infoCards.img;
    item.querySelector('.breed').textContent = infoCards.breed;
    item.querySelector('.price').textContent = infoCards.price;
    item.style.display = "block";
    fragment.appendChild(item);
    document.querySelector('.product-section').appendChild(fragment);
});
template.style.display = "none";

const menuFilter = document.createElement("div");
menuFilter.classList.add('menuFilter');
let filterCount = 0;
let buttonFilter = document.createElement("span");
buttonFilter.classList.add('buttonFilter');
buttonFilter.textContent = 'Показать';
let allCheckboxLabel = document.querySelectorAll('.label');
let allCheckbox = document.querySelectorAll('.checkbox');
let hunterCheckbox = document.querySelector("#hunter");
let companionCheckbox = document.querySelector("#companion");
let decorativeCheckbox = document.querySelector("#decorative");
let serviceCheckbox = document.querySelector("#service");
let noFearCheckbox = document.querySelector("#noFear");
let shedsLittleCheckbox = document.querySelector("#shedsLittle");
let excellentHealthCheckbox = document.querySelector("#excellentHealth");
let goodObedienceCheckbox = document.querySelector("#goodObedience");
let veryDevotedCheckbox = document.querySelector("#veryDevoted");
let filter = {};
let resultFilter = [];

function init() {

    hunterCheckbox.addEventListener('change', (event) => {
        filter.hunter = !!event.target.checked;
        console.log("хантер ", filter.hunter);
        filterCards();
    })

    companionCheckbox.addEventListener('change', (event) => {
        filter.companion = !!event.target.checked;
        console.log("компаньён ", filter.companion);
        filterCards();
    })

    decorativeCheckbox.addEventListener('change', (event) => {
        filter.decorative = !!event.target.checked;
        console.log("декоративная ", filter.decorative);
        filterCards();
    })

    serviceCheckbox.addEventListener('change', (event) => {
        filter.service = !!event.target.checked;
        console.log("служебная ", filter.service);
        filterCards();
    })

    noFearCheckbox.addEventListener('change', (event) => {
        filter.noFear = !!event.target.checked;
        console.log("отсутствует страх ", filter.noFear);
        filterCards();
    })

    shedsLittleCheckbox.addEventListener('change', (event) => {
        filter.shedsLittle = !!event.target.checked;
        console.log("мало линяет ", filter.shedsLittle);
        filterCards();
    })

    excellentHealthCheckbox.addEventListener('change', (event) => {
        filter.excellentHealth = !!event.target.checked;
        console.log("отличное здоровье ", filter.excellentHealth);
        filterCards();
    })

    goodObedienceCheckbox.addEventListener('change', (event) => {
        filter.goodObedience = !!event.target.checked;
        console.log("хорошее послушание ", filter.goodObedience);
        filterCards();
    })

    veryDevotedCheckbox.addEventListener('change', (event) => {
        filter.veryDevoted = !!event.target.checked;
        console.log("очень преданная ", filter.veryDevoted);
        filterCards();
    })

    const handler1 = (event) => {
        menuFilter.style.display = 'none';
        event.path[2].appendChild(menuFilter);
        setTimeout(() => {
            menuFilter.style.display = 'block';
        }, 600);
    };
    allCheckboxLabel.forEach(elem => {
            elem.addEventListener('click', handler1);
        }
    )
}

init();

function filterCards() {
    resultFilter = [];
    infoCards.forEach((card) => {
        if (filter.hunter && !card.hunter) {
            return;
        }
        if (filter.companion && !card.companion) {
            return;
        }
        if (filter.decorative && !card.decorative) {
            return;
        }
        if (filter.service && !card.service) {
            return;
        }
        if (filter.noFear && !card.noFear) {
            return;
        }
        if (filter.shedsLittle && !card.shedsLittle) {
            return;
        }
        if (filter.excellentHealth && !card.excellentHealth) {
            return;
        }
        if (filter.goodObedience && !card.goodObedience) {
            return;
        }
        if (filter.veryDevoted && !card.veryDevoted) {
            return;
        }
        resultFilter.push(card);
    })
    console.log("отфильтрованный список", resultFilter);
    filterCount = resultFilter.length;
    menuFilter.textContent = `Найдено совпадений: ${filterCount} `;
    menuFilter.appendChild(buttonFilter);
}

menuFilter.addEventListener('click', (event) => {
    console.log("нажали на Показать");
    let template = document.querySelector('.product-list__item');
    parentItem.textContent = '';
    console.log('содержимое контейнера ', parentItem);

    const randomSortCards = resultFilter.sort(function () {
        return Math.random() - 0.5;
    });

    const fragment = document.createDocumentFragment();
    randomSortCards.forEach((resultFilter) => {
        const item = template.cloneNode(true);
        item.querySelector('img').src = resultFilter.img;
        item.querySelector('.breed').textContent = resultFilter.breed;
        item.querySelector('.price').textContent = resultFilter.price;
        fragment.appendChild(item);
        item.style.display = "block";
        document.querySelector('.product-section').appendChild(fragment);
    });
    template.style.display = "none";
    menuFilter.style.display = "none";
})

