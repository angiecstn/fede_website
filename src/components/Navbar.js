import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'
import './Navbar.css';

export class Navbar extends Component {

        constructor(props) {
          super(props);
          this.scrollToTop = this.scrollToTop.bind(this);
        }

        componentDidMount() {

          Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });

          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });

        }
        scrollToTop() {
          scroll.scrollToTop();
        }
        scrollTo() {
          scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
        }


    render() {
        return (
                <div className="ui yellow four item inverted  massive menu navbar">
                    {/* <div className="active item" href="home">Home</div> */}
                    <a className="active item" href="home"onClick={this.scrollToTop}>Home</a>
                    <div className="item"><Link activeClass="active" className="about" to="about1" spy={true} smooth={true} duration={500} >About</Link></div>
                    <div className="item"><Link activeClass="active" className="servizi" to="servizi1" spy={true} smooth={true} duration={500} >Servizi</Link></div>
                    <div className="right menu">
                        <div className="item"><Link activeClass="active" className="contatti" to="contatti1" spy={true} smooth={true} duration={500} >Contatti</Link></div>
                    </div>
                    <img src="/images/logo.png" alt="Federigo logo" height="51" width="51" />
                </div>
        )
    }
}


export default Navbar;