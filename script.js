let products = {
    data: [
      {
        id: 1,
        title: "Pride and Prejudice",
        author_name: "Jane Austen",
        description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813.",
        publishing_date: "1813-01-28",
        image: "./images/1.jpg",
        book_count: "9",
      },
      {
        id: 2,
        title: "The Great Gatsby",
        author_name: "F. Scott Fitzgerald",
        description: "The Great Gatsby is a 1925 novel by F. Scott Fitzgerald, set in the Jazz Age.",
        publishing_date: "1925-04-10",
        image: "./images/2.jpg",
        book_count: "5",
      },
      {
        id: 3,
        title: "To Kill a Mockingbird",
        author_name: "Harper Lee",
        description: "To Kill a Mockingbird is a novel by Harper Lee published in 1960.",
        publishing_date: "1960-07-11",
        image: "./images/3.jpg",
        book_count: "8",
      },
      {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        author_name: "J.K. Rowling",
        description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J.K. Rowling.",
        publishing_date: "1997-06-26",
        image: "./images/4.jpg",
        book_count: "1",
      },
      {
        id: 5,
        title: "1984",
        author_name: "George Orwell",
        description: "1984 is a dystopian novel by George Orwell published in 1949.",
        publishing_date: "1949-06-08",
        image: "./images/5.jpg",
        book_count: "18",
      },
      {
        id: 6,
        title: "One Hundred Years of Solitude",
        author_name: "Gabriel García Márquez",
        description: "One Hundred Years of Solitude is a novel by Colombian author Gabriel García Márquez.",
        publishing_date: "1967-05-30",
        image: "./images/6.jpg",
        book_count: "15",
      },
      {
        id: 7,
        title: "Adventures of Huckleberry Finn",
        author_name: "Mark Twain",
        description: "Adventures of Huckleberry Finn is a novel by Mark Twain, first published in the United Kingdom in December 1884.",
        publishing_date: "1884-12-10",
        image: "./images/7.jpg",
        book_count: "1",
      },
      {
        id: 8,
        title: "A Tale of Two Cities",
        author_name: "Charles Dickens",
        description: "A Tale of Two Cities is a historical novel by Charles Dickens, set in London and Paris before and during the French Revolution.",
        publishing_date: "1859-04-30",
        image: "./images/8.jpg",
        book_count: "3",
      },
      {
        id: 9,
        title: "The Catcher in the Rye",
        author_name: "J.D. Salinger",
        description: "The Catcher in the Rye is a novel by J.D. Salinger, first published in 1951.",
        publishing_date: "1951-07-16",
        image: "./images/9.png",
        book_count: "8",
      },
      {
        id: 10,
        title: "The Lord of the Rings",
        author_name: "J.R.R. Tolkien",
        description: "The Lord of the Rings is an epic high fantasy novel by J.R.R. Tolkien, published in three volumes in 1954 and 1955.",
        publishing_date: "1954-07-29",
        image: "./images/10.png",
        book_count: "9",
      },
      {
        id: 11,
        title: "Crime and Punishment",
        author_name: "Fyodor Dostoevsky",
        description: "Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky, first published in 1866.",
        publishing_date: "1866-01-01",
        image: "./images/11.jpg",
        book_count: "13",
      },
      {
        id: 12,
        title: "The Picture of Dorian Gray",
        author_name: "Oscar Wilde",
        description: "The Picture of Dorian Gray is a novel by Oscar Wilde, first published in 1890.",
        publishing_date: "1890-07-01",
        image: "./images/12.jpg",
        book_count: "8",
      },
      {
        id: 13,
        title: "The Adventures of Sherlock Holmes",
        author_name: "Arthur Conan Doyle",
        description: "The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published in 1892.",
        publishing_date: "1892-10-14",
        image: "./images/13.jpg",
        book_count: "11",
      },
      {
        id: 14,
        title: "The Hobbit",
        author_name: "J.R.R. Tolkien",
        description: "The Hobbit, or There and Back Again is a children's fantasy novel by J.R.R. Tolkien, published in 1937.",
        publishing_date: "1937-09-21",
        image: "./images/14.jpg",
        book_count: "7",
      },
      {
        id: 15,
        title: "The War of the Worlds",
        author_name: "H.G. Wells",
        description: "The War of the Worlds is a science fiction novel by H.G. Wells, first serialized in 1897.",
        publishing_date: "1897-04-19",
        image: "./images/15.jpg",
        book_count: "15",
      },
      {
        id: 16,
        title: "Brave New World",
        author_name: "Aldous Huxley",
        description: "Brave New World is a dystopian novel by Aldous Huxley, published in 1932.",
        publishing_date: "1897-04-19",
        image: "./images/16.jpg",
        book_count: "6",
      },
      {
        id: 17,
        title: "Wuthering Heights",
        author_name: "Emily Bronte",
        description: "Wuthering Heights is a novel by Emily Bronte, first published in 1847.",
        publishing_date: "1847-12-20",
        image: "./images/17.jpg",
        book_count: "8",
      },
      {
        id: 18,
        title: "To Kill a Mockingbird",
        author_name: "Harper Lee",
        description: "To Kill a Mockingbird is a novel by Harper Lee, published in 1960.",
        publishing_date: "1960-07-11",
        image: "./images/18.jpg",
        book_count: "2",
      },
      {
        id: 19,
        title: "Pride and Prejudice",
        author_name: "Jane Austen",
        description: "Pride and Prejudice is a novel by Jane Austen, first published in 1813.",
        publishing_date: "1813-01-28",
        image: "./images/19.jpg",
        book_count: "1",
      },
      {
        id: 20,
        title: "The Great Gatsby",
        author_name: "F. Scott Fitzgerald",
        description: "The Great Gatsby is a novel by F. Scott Fitzgerald, first published in 1925.",
        publishing_date: "1925-04-10",
        image: "./images/20.jpg",
        book_count: "3",
      },
      {
        id: 21,
        title: "The Grapes of Wrath",
        author_name: "John Steinbeck",
        description: "The Grapes of Wrath is a novel by John Steinbeck, published in 1939.",
        publishing_date: "1939-04-14",
        image: "./images/21.jpg",
        book_count: "12",
      },
      {
        id: 22,
        title: "The Adventures of Tom Sawyer",
        author_name: "Mark Twain",
        description: "The Adventures of Tom Sawyer is a novel by Mark Twain, first published in 1876.",
        publishing_date: "1876-12-10",
        image: "./images/22.jpg",
        book_count: "4",
      },
      {
        id: 23,
        title: "Moby-Dick",
        author_name: "Herman Melville",
        description: "Moby-Dick; or, The Whale is a novel by Herman Melville, first published in 1851.",
        publishing_date: "1851-10-18",
        image: "./images/23.jpg",
        book_count: "5",
      },
      
    ]
  };
  
     
  for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card1");
    let image = document.createElement("img");
    image.classList.add("image-container")
    image.setAttribute("src", i.image);
    card.appendChild(image);
    let container = document.createElement("div");
    container.classList.add("container");
    //Book name
    let name = document.createElement("h3");
    name.classList.add("title1");
    name.innerText = i.title.toUpperCase();
    container.appendChild(name);
    //author name
    let author = document.createElement("h4");
    author.classList.add("author");
    author.innerText = i.author_name;
    container.appendChild(author);
    //discription
    let subject = document.createElement("h5");
    subject.classList.add("description");
    subject.innerText = i.description;
    container.appendChild(subject);
    //date
    let date = document.createElement("h4");
    date.innerText = i.publishing_date;
    date.classList.add("date1");
    container.appendChild(date);
    //count
    let count = document.createElement("h5");
    count.innerText = i.book_count;
    count.classList.add("count1");
    container.appendChild(count);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    let elements = document.querySelectorAll(".card1");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".title1");
    let cards = document.querySelectorAll(".card1");
    elements.forEach((element, index) => {
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  window.onload = () => {
    filterProduct("all");
  };