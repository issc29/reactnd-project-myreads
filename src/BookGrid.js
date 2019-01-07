import React from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types'

class BookGrid extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  render() {
    return (
        <ol className="books-grid">
          {this.props.books.map(book => {
            return <Book key={book.id} book={book} updateShelf={this.props.updateShelf}/>
          })}
        </ol>

    )
  }
}

export default BookGrid
