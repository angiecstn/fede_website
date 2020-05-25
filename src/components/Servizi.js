import React from 'react'


class Servizi extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <element name="servizi1" className="element">
                    <div className="ui middle aligned divided list">
                    <h3>Servizi Offerti:</h3>
                    <div className="item">
                    <img className="ui avatar image" alt="dog icon" src="images/dog.png" />
                    <div className="content">
                        <a className="header" href="toelettatura cani">Toalettatura Cani</a>
                    </div>
                    </div>
                    <div className="item">
                    <img className="ui avatar image" alt="cat icon" src="images/cat.png" />
                    <div className="content">
                        <a className="header" href="toelettatura gatti">Toalettatura Gatti</a>
                    </div>
                    </div>
                    <div className="item">
                    <img className="ui avatar image" alt="shampoo bottle icon" src="images/shampoo.png" />
                    <div className="content">
                        <a className="header" href="toelettatura prodotti">Prodotti per Toalettatura</a>
                    </div>
                    </div>
                    <div className="item">
                    <img className="ui avatar image" alt="scissor icon" src="images/scissors.png" />
                    <div className="content">
                        <a className="header" href="clipping">Clipping</a>
                    </div>
                    </div>
                </div>
            </element>
          </div>
        )
    }
}


export default Servizi;