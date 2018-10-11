import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from './Book';
import PropTypes from 'prop-types';

class Library extends React.Component {
static propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired 
}
render () {

//const {books} =this.props;
{/*const currentlyReading= books.filter( book => book.shelf ==="currentlyReading")
const read = books.filter(book=> book.shelf ==="read");
const wantToRead = books.filter(book=> book.shelf ==="want to read");
*/}
console.log(this.props.books);
 return (
   
  
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
      </div>
         
 
     <div className="list-books-content">
      </div>
       <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
         <div className="bookshelf-books">
          <ol className="books-grid">
           {this.props.books.filter(book => book.shelf ==='currentlyReading')
         
           .map((book) => ( 
           <li key={book.id}>
           <Book book={book}
            changeShelf={this.props.changeShelf}
            currentSelf='currentlyReading'/>
           </li>
           ))}
           </ol>
        </div>
       </div> 
        <div className="bookshelf">
         <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {this.props.books.filter(book => book.shelf ==='wantToRead')
             
             .map((book)=> (
             <li key={book.id}>
             <Book book={book}
              changeSelf={this.props.changeShelf}     
              currentShelf='wantToRead'/>
             </li>
            ))}
           </ol>
         </div>
         </div>        
       <div className="bookshelf">
         <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
           <ol className="books-grid">
            {this.props.books.filter(book => book.shelf ==='read')
             
             .map((book) => (
             <li key={book.id}>
             <Book book={book}
              changeSelf={this.props.changeShelf}     
              currentShelf='read'/>
             </li>
            ))}
           </ol>
          </div>
         </div>
            
                    
        
      
     
         <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
         </div></div>
);
}
}
    export default Library