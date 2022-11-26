import { books } from './books.js';
localStorage.setItem('books', JSON.stringify(books));

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
    const booksArr = JSON.parse(localStorage.getItem('books'));

    if (!booksArr) return;

    const template = booksArr
        .map((elem) => {
            return `<li data-id="${elem.id}" class="list__item">
  <p class="title">${elem.title}</p>
  <button type="button" class="edit">✏️ edit</button>
  <button type="button" class="delete">🚮 delete</button>
</li>`;
        })
        .join('');

    list.innerHTML = template;

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
    const bookObj = JSON.parse(localStorage.getItem('books')).find(
        (book) => e.target.textContent === book.title
    );

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
    const booksArr = JSON.parse(localStorage.getItem('books')).filter(
        (book) => {
            return book.id !== targetItem.dataset.id;
        }
    );

    localStorage.setItem('books', JSON.stringify(booksArr));
    setTimeout(() => {
        notification('Book was successfully remove!');
    }, 300);
    renderList();

    const elem = document.querySelector('.book');
    if (!elem) return;
    if (elem.id === targetItem.dataset.id) elem.remove();
}

function editElement(e) {
    const bookId = e.target.closest('.list__item').dataset.id;
    const booksArr = JSON.parse(localStorage.getItem('books'));
    const book = booksArr.find((book) => book.id === bookId);

    divRight.innerHTML = createFormMarkup(book);

    addListenerInput(book);

    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit.bind(book));
}

function addBooks(e) {
    const newBook = {
        id: Date.now().toString(),
    };
    divRight.innerHTML = createFormMarkup();

    addListenerInput(newBook);

    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit.bind(newBook));
}

function addListenerInput(newBook) {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) =>
        input.addEventListener('change', onInputChange.bind(newBook))
    );
}

function createFormMarkup({
    title = '',
    author = '',
    img = '',
    plot = '',
} = {}) {
    return `<form>
    <label
        >title
        <input name="title" type="text" value="${title}"/>
    </label>
    <label
        >author
        <input name="author" type="text" value="${author}" />
    </label>
    <label
        >img url
        <input name="img" type="url" value="${img}" />
    </label>
    <label
        >plot
        <input name="plot" type="text" value="${plot}" />
    </label>
    <button type="submit">save</button>
</form>`;
}

function onInputChange(e) {
    this[e.target.name] = e.target.value;
}

function onSubmit(e) {
    e.preventDefault();

    const bookValue = Object.values(this);
    if (bookValue.length < 4) {
        alert('Поля не заповнені');
        return;
    }

    divRight.innerHTML = createPreviewMarkup(this);

    const booksArr = JSON.parse(localStorage.getItem('books'));

    const isBookEqual = booksArr.some((book) => book.id === this.id);
    if (isBookEqual) {
        for (let i = 0; i < booksArr.length; i += 1) {
            if (booksArr[i].id === this.id) booksArr[i] = this;
        }

        localStorage.setItem('books', JSON.stringify(booksArr));
        setTimeout(() => {
            notification('Book was successfully updated!');
        }, 300);
        renderList();
        return;
    }

    booksArr.push(this);
    localStorage.setItem('books', JSON.stringify(booksArr));
    setTimeout(() => {
        notification('Book was successfully added!');
    }, 300);
    renderList();
}

function notification(text) {
    const nitifyText = document.querySelector('.notification__text');
    const notiDiv = document.querySelector('.notification');
    nitifyText.textContent = text;
    notiDiv.classList.remove('is-hidden');
    setTimeout(() => notiDiv.classList.add('is-hidden'), 2500);
}
