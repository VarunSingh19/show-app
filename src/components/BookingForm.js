import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const BookingForm = ({ id }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save user details to local storage or perform any other necessary actions
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title mb-4">Book Tickets for the show</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="userName">Name:</label>
                                    <input
                                        type="text"
                                        id="userName"
                                        className="form-control"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder='enter your name'
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='enter your email'
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-4">
                                    Book Now
                                </button>
                            </form>
                        </div>
                    </div>
                    <Link to={'/'} >
                        main page ?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
