import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from  './Book';
import * as BooksAPI from './BooksAPI';

{/*book state for books query and book searched book array.
 Performs query updates. If book is not found places error in
 an empty array for error catching. And if book is found it 
shows the results of searched books*/}

class SearchPage extends Component {
state = {
	query: '',
    searchedBooks: []
}
