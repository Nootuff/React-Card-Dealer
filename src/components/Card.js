import React from "react";
import '../styles/Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props) //No idea why these all have to be in constructor but apparently its best practice. 
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this.transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`; //This is string interpolation. 
    }

    render() {
        return (
            <img style={{ transform: this.transform }} className="Card" src={this.props.data.cards[0].image} alt={this.props.data.cards[0].value + " of " + this.props.data.cards[0].suit} />
        )
    }
}

export default Card