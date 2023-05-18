
import React, { useState } from 'react';
import Search from './Search';

import "../Css/Main.css"
function Main() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ comment: '', date: '' });
    const [characterCount, setCharacterCount] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const maxCharacterLimit = 150;

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (value.length <= maxCharacterLimit) {
            setNewReview({ ...newReview, [name]: value });
            setCharacterCount(value.length);
        }
    };

    const handleAddReview = () => {
        const reviewWithDate = { ...newReview, date: new Date().toLocaleDateString() };
        setReviews([...reviews, reviewWithDate]);

        setNewReview({ comment: '', date: '' });
        setCharacterCount(0);
    };

    const handleDeleteReview = (index) => {
        const updatedReviews = [...reviews];
        updatedReviews.splice(index, 1);
        setReviews(updatedReviews);
    };

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
    };

    const filteredReviews = reviews.filter((review) =>
        review.comment.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Search searchTerm={searchTerm} handleSearch={handleSearch} />
            <div className="container">
                <form onSubmit={(e) => e.preventDefault()} className="review-form">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={newReview.comment}
                        onChange={handleInputChange}
                        maxLength={maxCharacterLimit}
                    />
                    <p className="character-count">
                        Character count: {characterCount}/{maxCharacterLimit}
                    </p>
                    <button type="submit" onClick={handleAddReview}>
                        Add Review
                    </button>
                </form>

                {filteredReviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    <div className="review-list">
                        {filteredReviews.map((review, index) => (
                            <div key={index} className="comment">
                                <p>{review.comment}</p>
                                <div className="time">
                                    <span>{review.date}</span>
                                    <button onClick={() => handleDeleteReview(index)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}

export default Main;