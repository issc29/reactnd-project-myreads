import React from 'react'
import BookGrid from './BookGrid.js'
import PropTypes from 'prop-types'

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }
  render() {
    const bookshelves = [
           {name: "currentlyReading", title: "Currently Reading"},
           {name: "wantToRead", title: "Want To Read"},
           {name: "read", title: "Read"}
         ]
    return (
      <div>
      {bookshelves.map(bookshelf => (
        <div key={bookshelf.name} className="bookshelf">
          <h2 className="bookshelf-title">{bookshelf.title}</h2>
          <div className="bookshelf-books">
            <BookGrid books={this.props.books.filter(book => book.shelf === bookshelf.name)} updateShelf={this.props.updateShelf} />
          </div>
        </div>
      ))}
      </div>
    )
  }
}

export default BookShelf
