import React from "react";
import '../styles/Card.css';

class Card extends React.Component {
    angle = Math.random() * 90 - 45;
    xPos = Math.random() * 40 - 20;
    yPos = Math.random() * 40 - 20;
    transform = `translate(${this.xPos}px, ${this.yPos}px) rotate(${this.angle}deg)`;
    render() {
        return (
            <img style={{ transform: this.transform }} className="Card" src={this.props.data.cards[0].image} alt={this.props.data.cards[0].value + " of " + this.props.data.cards[0].suit} />
        )
    }
}

export default Card