import React, { Component } from 'react'

class BookList extends Component {
 
    render() { 
        return (
            <div className='book-list'>
                <ul>
                    <li>the way of the king</li>
                    <li>the name of the king</li>
                    <li>the hand of the king</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;