import React from 'react'
import './Servizi.css';


class Servizi extends React.Component {
    render() {
        return (
            <div className="ui relaxed horizontal big segment servizi">
                <element name="servizi1" className="element">
                    <div className="ui big relaxed horizontal list servizi">
                    <h2 className="title">Servizi Offerti:</h2>
                    <div className="item">
                        <img className="ui avatar image" alt="dog icon" src="images/dog.png" />
                        <div className="content">
                            Toalettatura Cani
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="cat icon" src="images/cat.png" />
                        <div className="content">
                            Toalettatura Gatti
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="shampoo bottle icon" src="images/shampoo.png" />
                        <div className="content">
                            Prodotti per Toalettatura
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="scissor icon" src="images/scissors.png" />
                        <div className="content">
                            Stripping
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="treatment icon" src="images/treatment.png" />
                        <div className="content">
                            Ozonoterapia
                        </div>
                    </div>
                </div>
            </element>
          </div>
        )
    }
}


export default Servizi;