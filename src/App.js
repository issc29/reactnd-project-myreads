import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks.js'
import ListBooks from './ListBooks.js'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  getAll = () => (
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  )

  updateShelf = (book, bookshelf) => {
    BooksAPI.update(book,bookshelf)
      .then(() => {
        this.getAll()
      })
  }

  getShelf = (bookID) => {
    const book = this.state.books.find(book => book.id === bookID)
    return (typeof book === 'undefined') ? "none" : book.shelf
  }



  render() {
    return (
      <div className="app">
        <Route path='/search' render ={({history}) => (
          <SearchBooks history={history} updateShelf={this.updateShelf} getShelf={this.getShelf} />
          )} />
        <Route exact path='/' render={() => (
          <ListBooks books={this.state.books} updateShelf={this.updateShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
