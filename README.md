# MyReads Project Objective

This is a MyReads App for Project 6 the final project for the React Fundamentals course. The goal of the project is to create a functioning interactive book App. The requirements are to have a main screen where books appear on three shelves. Books should have the function to move into the three shelves: Currently Reading, Want To Read, and Read. From the main screen an input link is created to move to the search screen. Which has the collection of books. In the search screen books can be selected to move from a search location to the main screen location.
      ****************************************
 Provided were static files of the CSS and HTML markup,these files did not have  the React code to complete the project and required the necessary code changes. 
 
#Steps To Start Project:

To start the project dependencies files are required for installation of a development server `npm start` in the computer enviroment.

The files given to accomplish the project are listed below.


├── CONTRIBUTING.md
├── README.md 
├── SEARCH_TERMS.md 
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css 
    ├── App.js # This is the root of the app. This required the static HTML code to be converted to files with functioning code for the main and search screen interactivity. Plus the other JS files created.
    ├── App.test.js # Used for testing. Comes  with Create React App.  but not required.
    ├── BooksAPI.js # A JavaScript API for the  Udacity backend server. 
    ├── icons # images for the app. 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. No changes needed.
    └── index.js # No changes needed for this file. Used for DOM rendering only.

Required new JS files created with React should have the component and use import/require statements.

## Backend Server

Provided is a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform code operations listed.

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`
* This returns a Promise  resolves to a JSON object containing the collection of book objects.
* This collection are books in the bookshelves in the app.
### `update`
update(book, shelf)
* book: `<Object>` containing an `id` attribute
* shelf: `<String>` contains one of["wantToRead", "currentlyReading", "read"] 
* Returns the Promise that resolves the object containing the response data of the POST request
### `search`
* query: `<String>`
* Returns the Promise that resolves to a JSON object that contains a collection of 20 book objects.

How the App works
## The App operates with ease. In the My Reads main screen a list of books appear in the browser. In the first bookshelf is the "Currently Reading" shelf, Second bookshelf is the "Want to Read" shelf, and the third bookshelf is the "Read" shelf. Books are displayed with a title, author(s). Books can be moved between shelves from the dropdown menu. New books can be searched. An input field link "Add A Book" is at the bottom of the page. When clicked a search screen appears and displays a collection of books. New selections can be added here. The back arrow returns the user to the My Reads main screen.