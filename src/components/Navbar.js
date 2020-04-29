import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {

    onClick = (e) => {
        console.log('it works', e)
        // e.preventDefault();
        // this.props.addTodo(this.state.title);
        // this.setState({ title: ''});
    }


    render() {
        return (
                <div className="ui yellow four item inverted  massive menu">
                    <a className="active item" href="home">Home</a>
                    <a className="item" href="about">About</a>
                    <a className="item" href="servizi">Servizi</a>
                    <div className="right menu">
                        <a className="item" href="contatti" onClick={this.onClick} >Contatti</a>
                    </div>
                    <img src="logo.png" alt="Federigo logo" height="51" width="51" />
                </div>
        )
    }
}


export default Navbar;