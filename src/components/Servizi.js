import React from 'react'


class Servizi extends React.Component {
    render() {
        return (
            <div class="ui segment">
                <div class="ui middle aligned divided list">
                <h3>Servizi Offerti:</h3>
                <div class="item">
                <img class="ui avatar image" alt="dog icon" src="/dog.png" />
                <div class="content">
                    <a class="header" href="toelettatura cani">Toalettatura Cani</a>
                </div>
                </div>
                <div class="item">
                <img class="ui avatar image" alt="cat icon" src="/cat.png" />
                <div class="content">
                    <a class="header" href="toelettatura gatti">Toalettatura Gatti</a>
                </div>
                </div>
                <div class="item">
                <img class="ui avatar image" alt="shampoo bottle icon" src="/shampoo.png" />
                <div class="content">
                    <a class="header" href="toelettatura prodotti">Prodotti per Toalettatura</a>
                </div>
                </div>
                <div class="item">
                <img class="ui avatar image" alt="scissor icon" src="/scissors.png" />
                <div class="content">
                    <a class="header" href="clipping">Clipping</a>
                </div>
                </div>
            </div>
          </div>
        )
    }
}


export default Servizi;