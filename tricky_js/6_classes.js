class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        `${this.title} was written by ${this.author} in ${this.year}.`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }
}

// Instantiate Object
const book1 = new Book("Book One", "John Doe", "2013");

console.log(book1);