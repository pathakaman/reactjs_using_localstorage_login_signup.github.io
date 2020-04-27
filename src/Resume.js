import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Resume extends Component{
    logout(){
        this.props.history.push("/logout");
    }
    render(){
        return(
            <div>
            <div className="menustyle">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand navcolor" to="#">Pathak</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link navcolor" to="/Home">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navcolor" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navcolor" to="/Resume">Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navcolor" to="/Services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navcolor" to="/Skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navcolor" to="/Projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navcolor" to="/Contact">Contact</Link>
                            </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            <button type="button" class="btn btn-danger"onClick={this.logout.bind(this)}>LogOut</button>
                            </form>
                    </div>
                </nav>
            </div>
            <h1>Welcome to Resume Page</h1>
            </div>
            
        );
    }
}