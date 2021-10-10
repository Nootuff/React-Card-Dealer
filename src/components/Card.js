import React from "react";
import '../styles/Card.css';

class Card extends React.Component {
        render() {
            return (
                   <img className="Card" src={this.props.data.cards[0].image} alt={this.props.data.cards[0].value + " of " + this.props.data.cards[0].suit} />
            )
        }
    }

    export default Card