import React from "react";
import Card from "./Card";
import '../styles/CardTable.css';

const axios = require('axios').default;

class CardTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deckId: "", //The https://deckofcardsapi.com/ api needs a randomly generated deck Id to create a deck to draw cards from. 
      onTable: []
    };
    this.draw = this.draw.bind(this);
  }

  componentDidMount() { //When the page loads for the first time this activates creating a new shuffled deck to draw cards from.
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")
      .then((response) => {
        this.setState({ deckId: response.data.deck_id })
      })
  }

  draw() {
    let allCards = [...this.state.onTable] //Holds all the current cards. 
    axios.get("https://deckofcardsapi.com/api/deck/" + this.state.deckId + "/draw/.") //This is how an API call to get a new random card is generated, you need the id value generated in the componentDidMount that was sent to state. 
      .then((response) => {
        allCards.push(response.data)
        console.log(allCards)
        this.setState({ onTable: allCards })
      })
  }

  render() {
    const cards = this.state.onTable.map(value =>
      <Card key={value.cards[0].code} data={value} />
    )
    var button = (this.state.onTable.length >= 52) ? <p className="CardTable-Button">Thats all</p> : <button className="CardTable-Button" onClick={this.draw}>Deal!</button>; //Ternary operator, when all cards dealt the button vanishes. 

    return (
      <div className="CardTable">
        {button}
        <div className="CardTable-pile">
          {cards}
        </div>
      </div>
    )
  }
}

export default CardTable