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
                <div className="ui yellow inverted menu navbar">
                    <img src="/images/default.png" onClick={this.scrollToTop} alt="Federigo logo" height="100" width="100" />
                    {/* <a className="active item" href="home"onClick={this.scrollToTop}>Home</a> */}
                    <div className="right small yellow menu">
                    <div className="item"><Link activeClass="active" className="about" to="about1" spy={true} smooth={true} duration={500} >About</Link></div>
                    <div className="item"><Link activeClass="active" className="servizi" to="servizi1" spy={true} smooth={true} duration={500} >Servizi</Link></div>
                        <div className="item"><Link activeClass="active" className="contatti" to="contatti1" spy={true} smooth={true} duration={500} >Contatti</Link></div>
                    </div>
                </div>
        )
    }
}


export default Navbar;