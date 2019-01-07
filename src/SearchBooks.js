import React from 'react'
import BookGrid from './BookGrid.js'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
    getShelf: PropTypes.func.isRequired
  }

  state = {
    searchBooks: []
  }

  search = (event) => {
    if(event.target.value === "") {
      this.setState(() => ({
        searchBooks: []
      }))
      return
    }

    BooksAPI.search(event.target.value)
      .then((searchBooks) => {
        searchBooks = (Array.isArray(searchBooks)) ? searchBooks : []
        this.setState(() => ({
          searchBooks
        }))
      })

  }

  getSearchBooks = () => (
    this.state.searchBooks.map(book => {
      book.shelf = this.props.getShelf(book.id)
      return book
    })
  )

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link
          to='/'
          ><button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.search} autoFocus/>
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid books={this.getSearchBooks()} updateShelf={(book, bookshelf) => {
            this.props.updateShelf(book, bookshelf)
            this.setState(()=>({
              searchBooks: []
            }))
            this.props.history.push('/')
          }} />
        </div>
      </div>

    )
  }
}

export default SearchBooks
