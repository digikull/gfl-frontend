import React, { useState, useEffect } from 'react'
import gflLogo from '../../Assets/img/GFL Logo.png'


function Navbar() {
    const [isLogin, setLogin] = useState(false)

    const logo = {
        marginLeft: '10px',
        fontSize: '30px',
        fontWeight: 'bolder',
        color: '#00004d',
        letterSpacing: '2px',
        fontFamily: 'Arial'
    }

    const logoStyle = {
        height: '50px',
        marginLeft: '5px'
    }
    const navLinkss = {
        fontSize: '17px',
        fontFamily: 'cursive'
    }

    return (
        <div>
            {isLogin ? <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" id="toogle-button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                        </button>
                        <a style={{ 'padding': '0' }} className="navbar-brand" href="/">
                            <img style={logoStyle} src={gflLogo}></img>
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">

                        <ul id="link" className="nav navbar-nav navbar-right">
                            <li style={navLinkss}><a href="/create tournament">Create Tournament</a></li>
                            <li style={navLinkss}><a href="/profile">My Profile</a></li>
                            <li style={navLinkss} id="button-link"><a href="#"><span className="glyphicon glyphicon-log-out"></span> Log out</a></li>
                        </ul>
                    </div>
                </div>
            </nav> :
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" id="toogle-button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="glyphicon glyphicon-menu-hamburger"></span>
                            </button>
                            <a style={{ 'padding': '0' }} className="navbar-brand" href="/">
                                <img style={logoStyle} src={gflLogo}></img>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">

                            <ul className="nav navbar-nav navbar-right">
                                <li style={navLinkss} class="dropdown" >
                                    <a style={navLinkss}
                                        class="dropdown-toggle" data-toggle="dropdown">Live Scores <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="/tournaments">Tournament</a></li>
                                        <li><a href="/associates">Associates</a></li>
                                    </ul>
                                </li>
                                <li style={navLinkss}><a href="/blogs">Blog</a></li>
                                <li style={navLinkss}><a href="/guide">Tournament Guide</a></li>
                                <li style={navLinkss}><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li style={navLinkss}><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </div >
    )
}

export default Navbar