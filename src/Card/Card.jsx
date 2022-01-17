import "./Card.css";
import React from "react";

class Card extends React.Component {
  render(props) {
    return (
      <div className="tc card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img
          src={`https://robohash.org/${this.props.id}?75x75`}
          alt="Robo-img"
        />
        <div className="details">
          <h2>{this.props.name}</h2>
          <p>{this.props.email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
