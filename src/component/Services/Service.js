import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, price, rating, img } = service;

    return (
        <div className="service">
            <div className="col card-style shadow-lg m-5 pb-3">
                <div className="card h-100">
                    <div>
                        <img src={img} className="card-img-top  h-50" alt="..." />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Rating;{rating}</p>

                        <p className="card-text">Price:{price}$</p>
                    </div>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-warning m-5 p-2">Book {name.toLowerCase()}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;