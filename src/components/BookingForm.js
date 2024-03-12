import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { RiUserFill, RiMailFill } from 'react-icons/ri';

const BookingForm = ({ id }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">Book Tickets for the Show</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">Name:</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><RiUserFill /></span>
                                        <input
                                            type="text"
                                            id="userName"
                                            className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                            {...register('userName', { required: 'Name is required' })}
                                            placeholder='Enter your name'
                                        />
                                        {errors.userName && (
                                            <div className="invalid-feedback">
                                                {errors.userName.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><RiMailFill /></span>
                                        <input
                                            type="email"
                                            id="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            placeholder='Enter your email'
                                        />
                                        {errors.email && (
                                            <div className="invalid-feedback">
                                                {errors.email.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to={'/'} className="text-decoration-none">
                            Go back to the main page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
