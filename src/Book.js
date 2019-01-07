import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  setImage = () => {
    return (this.props.book.imageLinks) ? this.props.book.imageLinks.thumbnail : "none"
  }

  setAuthors = () => (
    (Array.isArray(this.props.book.authors))
    ? this.props.book.authors.map(author => (
        <div key={author} className="book-authors">{author}</div>
      ))
    : ""
  )

  handleOnChange = event => {
    this.props.updateShelf(this.props.book,event.target.value)
  }

  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.setImage()}")` }}></div>
            <div className="book-shelf-changer">
              <select value={(this.props.book.shelf) ? this.props.book.shelf : "none"} onChange={this.handleOnChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          {this.setAuthors()}
        </div>
      </li>
    )
  }
}

export default Book
