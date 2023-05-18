import React from 'react';
import '../Css/Comment.css';

function Comment({ comment, date, handleDeleteReview }) {
    return (
        <li>
            <p>{comment}</p>
            {date && <span>{date}</span>}
            <button onClick={handleDeleteReview}>Delete</button>
        </li>
    );
}

export default Comment;
