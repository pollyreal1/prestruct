import React, { useEffect, useState } from 'react'

const Nav = () => {

    const homePath = 'https://pollyreal1.github.io/prestruct/';

    const [show, setShow] = useState(false);
    const navbarControl = () => {
        if (window.scrollY > window.innerHeight * 0.70) {
            setShow(true)
        } else {
            setShow(false)
        }
    }


    useEffect(() =>{
        window.addEventListener('scroll', navbarControl)
        return () => window.removeEventListener('scroll', navbarControl)
        
    },[])

    return (
        <div>
            {/* <nav className={'navbar navbar-expand-lg navbar-dark'}> */}
            <nav className={show ? 'navbar navbar-expand-lg fixed-top navbar-dark navbar-effect-in' : 'navbar navbar-expand-lg fixed-top navbar-dark navbar-effect-out'}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={`{homePath}/construct.png`} width="75" height="75" alt="" />
                        <b>Prestruct</b>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            {/* <a class="nav-link active" aria-current="page" href="#"><b>Home</b></a> */}
                            <a class="nav-link" href="#"><b>Developers</b></a>
                            <a class="nav-link" href="#"><b>Individuals</b></a>
                            <a class="nav-link" href="#"><b>News</b></a>
                            {/* <a class="nav-link disabled">Disabled</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
