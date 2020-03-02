import React, { Component } from "react";
import "../../../public/css/App.css";

export const QuoteMachine = class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    }
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  async componentDidMount() {
      if (this.state.tweets && this.state.tweets.length) {
        return;
      }
      const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      const json = await response.json();
      this.setState({
        tweets: json.quotes
      })  

  }

   /*getWeather() {
     fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast')
       .then(response => response.json().properties.periods)
       .then((myJson) => {
         console.log(myJson);
       })
   }*/

  //api_key=C9zeqODcfauPysuxbTCwTp80uxLdDsQZzu5XLBTd

  getRandomQuote() {
    //get quotes from state
    // let tweets = this.state.tweets; 
    const { tweets } = this.state;
    //get random quote
    return tweets[Math.floor(Math.random() * tweets.length)];
  }

  handleClick() {
    this.getRandomQuote();
    this.setState({});
  }

  render() {

    const quote = this.getRandomQuote() || {
      quote: 'Searching...',
      author: ''
    };

    return (

      <div>
        <div id='quote-box' className="mx-auto shadow-lg rounded p-3 mb-5">
          <p id="text">{quote.quote}</p>
          <p id="author">{quote.author}</p>
          <button className="btn btn-primary ml-" id="new-quote" onClick={this.handleClick}>
            New quote?</button>
          <button className="btn btn-primary ml-3">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" >Tweet me!</a>
          </button>
        </div>
      </div>

    );
  }
}