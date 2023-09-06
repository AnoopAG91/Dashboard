import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
                <div class="container">
                    <a class="navbar-brand" href="#">DashBoard</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <div className='right-section ms-auto'>
                        <button type="button" class="btn btn-light">XYZ enterprises Pvt Ltd</button>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 dropdown">
                                <li class="nav-item dropdown ">
                                    <a class="nav-link dropdown-toggle dropdown-btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">React</a></li>
                                        <li><a class="dropdown-item" href="#">Angular</a></li>
                                        <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Javascript</a></li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>


                </div>
            </nav>
        </div>
    )
}

export default Header