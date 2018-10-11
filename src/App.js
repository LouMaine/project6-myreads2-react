import React from 'react';
import { Route } from 'react-router-dom';

import SearchLibrary from './SearchLibrary';
import Library from './Library';

import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {
  
  state = {
  books: []
}

componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({books: books})
 })
}
   
changeShelf=(book, shelf)  => {
BooksAPI.update(book, shelf);

BooksAPI.getAll().then((books) => {
    this.setState({books:books})
})
}

 render() {
    
    return (
      <div className="app">

      <Route exact path="/" render={() => (
      <Library books={this.state.books} changeShelf={this.changeShelf}/>
   )}/>
      
      <Route path="/search" render={()=>(
      <SearchLibrary changeShelf={this.changeShelf}/>
      )}/>
  )}/>
  </div>
)
}
}

export default BooksApp
