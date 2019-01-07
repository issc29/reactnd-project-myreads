import React from 'react'
import BookShelf from './BookShelf.js'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf books={this.props.books} updateShelf={this.props.updateShelf}/>
        </div>
        <div className="open-search">
        <Link
          to='/search'
          ><button>Add a book</button>
          </Link>
        </div>
      </div>

    )
  }
}

export default ListBooks
