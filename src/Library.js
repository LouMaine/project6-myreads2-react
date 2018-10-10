import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Book from './Book';

class Library extends Component {

render () {
let changeShelf = changeShelf;
let id=key;
let book=book;
	console.log(this.props.books);
 return (
   
  <div>
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
      </div>
      </div>
 
     <div className="list-books-content">

      
       <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
         <div className="bookshelf-books">
          <ol className="books-grid">
           {this.props.books.filter(book => book.shelf ==='currentlyReading')
           
           .map(book => (
           < li id={book.id}>
           <book={book}
           changeShelf=this.changeShelf
           currentSelf='currentlyReading'/></ol></li>
           )}
         </div>
        </div>
          
          <div className="bookshelf">
         <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
           <ol className="books-grid">
            {this.props.books.filter(book => book.shelf ==='wantToRead')
             
             .map(book => (
              <li id={book.id}>
              <book={book}
              changeShelf=this.changeShelf
              currentSelf='wantToRead'></ol></li>     
         )}
         </div>
        </div>
         
       <div className="bookshelf">
         <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
           <ol className="books-grid">
            {this.props.books.filter(book => book.shelf ==='read')
              
              .map(book => (
              <li id={book.id}>
              //id={book.id}
              <book ={book} 
              changeShelf=this.changeShelf
              currentShelf='read'></ol></li>
           )}         
           
           </div>     
         </div>
        </div>
      
     
         <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
         </div></div>
);
}
}
    export default Library