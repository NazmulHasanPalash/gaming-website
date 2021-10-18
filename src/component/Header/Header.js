import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div className="header container-fluid">
            <div>
                <div className="img-style ">
                    <img src="https://i.redd.it/rc5xxnc5nrfx.png" alt="" />
                </div>
                <div className="link">
                    <nav className="navbar navbar-expand">
                        <div className="container-fluid">

                            <div className="collapse navbar-collapse" id="navbarNav ">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" aria-current="page" to="/home#home">Home</HashLink>
                                    </li>
                                    <li className="nav-item">
                                        <HashLink className="nav-link active" aria-current="page" to="/home#services">Services</HashLink>

                                    </li>

                                    {user?.email ? <li className="nav-item">
                                        <button onClick={logOut} type="button" className="btn btn-light mt-2">Log out</button>

                                    </li> :
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>

                                        </li>}
                                    <li className="nav-item ms-5">
                                        <a className="nav-link" href="#login"> Sign in as {user?.displayName}</a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>


        </div>
    );
};

export default Header;