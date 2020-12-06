let form = document.querySelector('.input-form')
let createBookBtn = document.querySelector('.create-book-button');
let popUp = document.querySelector('.pop-up');

createBookBtn.addEventListener('click', () => {
    popUp.style.display = 'block';
} );

let closePopUp = document.querySelector('.close-button')
closePopUp.addEventListener('click', () => {
    popUp.style.display = 'none';
})

let addBookBtn = document.querySelector('.add-book-button');

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
});

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    library.push(new Book(
        form.title.value,
        form.author.value,
        form.pages.value,
        form.read.checked ) 
    );

    popUp.style.display = 'none';
    form.reset();
    render();
}
function render() {
    let libraryList = document.querySelector('.library-list');
    let books = document.querySelectorAll('.book');

    books.forEach(book => {
        libraryList.removeChild(book);
    })

    library.forEach(book => {
        createBookDOM(book);
    })
}

function createBookDOM(item) {
    const libraryList = document.querySelector('.library-list');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const readDiv = document.createElement('div');
    const removeDiv = document.createElement('div');

    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', item);
    libraryList.appendChild(bookDiv);

    titleDiv.classList.add('title');
    titleDiv.innerText = item.title;
    bookDiv.appendChild(titleDiv);

    authorDiv.classList.add('author');
    authorDiv.innerText = item.author;
    bookDiv.appendChild(authorDiv);

    pagesDiv.classList.add('pages');
    pagesDiv.innerText = item.pages;
    bookDiv.appendChild(pagesDiv);

    readDiv.classList.add('read');
    let readText = item.read === true ? 'read' : 'not read';
    readDiv.innerText = readText;
    bookDiv.appendChild(readDiv);

    removeDiv.classList.add('remove');
    removeDiv.innerText = 'Remove';
    bookDiv.appendChild(removeDiv);

    readDiv.addEventListener('click', () => {
        item.read = !item.read;
        render();
    })

    removeDiv.addEventListener('click', () => {
        library.splice(library.indexOf(item), 1);
        render();
    })
}
