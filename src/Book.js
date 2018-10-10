import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

 
  render () {

    
  	return (
    //displays book cover with the thumbnail, plus value options 
    //for each book-shelf changer
    <div className="book">
     <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193,
        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}/>
      
     
    <div className="book-shelf-changer">
     
      <select
        onChange={(e)=> this.props.changeShelf(
        this.props.book, e.target.value)}
        value={this.props.currentShelf}
      >
      <option value="move" disabled>Move to...</option>
       <option value="currentlyReading">Currently Reading</option>
       <option value="wantToRead">Want to Read</option>
       <option value="read">Read</option>
       <option value="none">None</option>
      </select>
     
     </div>
     </div>
       
       <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}
        </div>
       </div>
   );

  }
}
export default Book;
