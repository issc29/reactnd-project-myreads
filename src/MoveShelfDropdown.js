import React from 'react'

class MoveShelfDropdown extends React.Component {
  handleOnChange = event => {
    this.props.updateShelf(this.props.book,event.target.value)
  }

  render() {
    return (
      <select value={(this.props.book.shelf) ? this.props.book.shelf : "none"} onChange={this.handleOnChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default MoveShelfDropdown
