import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from  './Book';
import * as BooksAPI from './BooksAPI';

{/*book state for books query and book searched book array.
 Performs query updates. If book is not found places error in
 an empty array for error catching. And if book is found it 
shows the results of searched books*/}

class SearchLibrary extends Component {
state = {
	query: '',
    searchedLists: []
}
updateQuery = (query) => {
	this.setState({query: query
 })
this.updateSearchedLists(query);
}
updateSearchedLists= (query) => {
    if (query) {
  	//takes care of searched book errors, places in empty [] array.
	BooksAPI.search(query).then((searchedLists) => {
		if (searchedLists.error) {
		this.setState({searchedLists: [] });
		} else {

     	this.setState({searchedLists:searchedLists});
  }
 })	
	//when searched book is found places it in an array
} else {
	this.setState({searchedLists: [] });
 }
}

render () {
     //renders the searched books
	return (
     <div className="search-books">
      <div className="search-books-bar">
             
       <Link to="/" className="close-search">Close</Link>
       
        <div className="search-books-input-wrapper">
        <input    
        type="text" placeholder="Search by title or author"
        value={this.state.query}
        onChange={(event)=> this.updateQuery(event.target.value)}
        />
          
     </div>
   </div>
   
            <div className="search-books-results">
   
             <ol className="books-grid">
            	{this.state.searchedLists.map(searchedBook=>(

           		<li key={searchedBook.id}>
                <Book book={searchedBook}
              	 changeShelf={this.props.changeShelf}
              	
                
                  />
              	</li> 
             )) 
             }
           
              </ol>
               
            </div>
          </div>
    );
  }
}
export default SearchLibrary;

