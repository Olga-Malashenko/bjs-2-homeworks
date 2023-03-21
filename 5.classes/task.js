class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }

    set state (state) {
        if ( state <= 0) {
            this._state = 0;
        } else if (state >= 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    } 

    fix () {
        this.state = 1.5 * this.state;
    } 
    
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type) {
        super(name, releaseDate, pagesCount, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, type) {
        super(name, releaseDate, pagesCount, type);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type) {
        super(author, name, releaseDate, pagesCount, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type) {
        super(author, name, releaseDate, pagesCount, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author,name, releaseDate, pagesCount, type) {
        super(author, name, releaseDate, pagesCount, type);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            for (let property in book) {
                if (book[property] == value && String(property) === String(type)) {
                    return book;
                } else {
                    return null;
                }
            }
        }  
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
            return null;
        }
    }

}
