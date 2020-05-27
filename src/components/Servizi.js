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
                        <img className="ui avatar image" alt="dog icon" src="images/dog.png" style={{'font-size':12}}/>
                        <div className="content">
                            Toelettatura Cani
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="cat icon" src="images/cat.png" style={{'font-size':12}} />
                        <div className="content">
                            Toelettatura Gatti
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="shampoo bottle icon" src="images/shampoo.png"  style={{'font-size':12}}/>
                        <div className="content">
                            Prodotti per Toelettatura
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="scissor icon" src="images/scissors.png" style={{'font-size':12}} />
                        <div className="content">
                            Stripping
                        </div>
                    </div>
                    <div className="item">
                        <img className="ui avatar image" alt="treatment icon" src="images/treatment.png" style={{'font-size':12}} />
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