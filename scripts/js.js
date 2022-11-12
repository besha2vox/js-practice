let books = [
    {
        id: '1',
        title: `Apple. Эволюция компьютера`,
        author: `Владимир Невзоров`,
        img: `https://bukva.ua/img/products/449/449532_200.jpg`,
        plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
       и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
       персональных компьютеров в целом.
       В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
       сопровождающиеся большим количеством оригинальных студийных фотографий.
       Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
       Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
    },
    {
        id: '2',
        title: `Как объяснить ребенку информатику`,
        author: `Кэрол Вордерман`,
        img: `https://bukva.ua/img/products/480/480030_200.jpg`,
        plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
           в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
           оставаясь в безопасности. 
           Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
           от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
           обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
           объясняются наглядно с помощью иллюстраций и схем.`,
    },
    {
        id: '3',
        title: `Путь скрам-мастера. #ScrumMasterWay`,
        author: `Зузана Шохова`,
        img: `https://bukva.ua/img/products/480/480090_200.jpg`,
        plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
       Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
       знаниями будете в течение всей карьеры.
       Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
       как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
       какими инструментами ему нужно пользоваться.`,
    },
];

const refs = {
    rootRef: document.querySelector('#root'),
};

const divLeft = document.createElement('div');
divLeft.classList.add('left');

const divRight = document.createElement('div');
divRight.classList.add('right');

refs.rootRef.append(divLeft, divRight);

const header = document.createElement('h1');
header.classList.add('header__one');

const list = document.createElement('ul');
list.classList.add('list');

const btn = document.createElement('button');
btn.classList.add('btn');
btn.textContent = 'add';

divLeft.append(header, list, btn);

const renderList = () => {
    const template = books
        .map((elem) => {
            return `<li data-id="${elem.id}" class="list__item">
  <p class="title">${elem.title}</p>
  <button type="button" class="edit">✏️ edit</button>
  <button type="button" class="delete">🚮 delete</button>
</li>`;
        })
        .join('');

    list.insertAdjacentHTML('afterbegin', template);

    const tittlesRef = document.querySelectorAll('.title');
    tittlesRef.forEach((tittle) => {
        tittle.addEventListener('click', onTittleClick);
    });

    const btnsDel = document.querySelectorAll('.delete');
    const btnsEdit = document.querySelectorAll('.edit');

    btnsDel.forEach((btn) => btn.addEventListener('click', deleteElement));
    btnsEdit.forEach((btn) => btn.addEventListener('click', editElement));
};

renderList();

const btnAddRef = document.querySelector('.btn');
btnAddRef.addEventListener('click', addBooks);

function onTittleClick(e) {
    const bookObj = books.find((book) => e.target.textContent === book.title);

    const markup = createPreviewMarkup(bookObj);
    divRight.innerHTML = markup;
}

function createPreviewMarkup({ id, title, author, img, plot }) {
    return `<div class="book" id="${id}">
    <h2>${title}</h2>
   <p>${author}</p>
   <img src="${img}" alt="${title}">
   <p>${plot}</p>
</div>`;
}

function deleteElement(e) {
    const targetItem = e.target.closest('.list__item');
    books = books.filter((book) => {
        return book.id !== targetItem.dataset.id;
    });

    console.log('books', books);
    list.innerHTML = '';
    renderList();

    const elem = document.querySelector('.book');
    if (!elem) return;
    if (elem.id === targetItem.dataset.id) elem.remove();
}

function editElement(e) {}

function addBooks(e) {
    const newBook = {
        id: Date.now(),
    };
    divRight.innerHTML = createFormMarkup();

    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) =>
        input.addEventListener('change', onInputChange.bind(newBook))
    );
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit.bind(newBook));
}

function createFormMarkup() {
    return `<form>
    <label
        >title
        <input name="title" type="text" />
    </label>
    <label
        >author
        <input name="author" type="text" />
    </label>
    <label
        >img url
        <input name="img" type="url" />
    </label>
    <label
        >plot
        <input name="plot" type="text" />
    </label>
    <button type="submit">save</button>
</form>`;
}

function onInputChange(e) {
    this[e.target.name] = e.target.value;
    console.log('this', this);
}

function onSubmit(e) {
    e.preventDefault();
    books.push(this);
    list.innerHTML = '';
    renderList();
}
