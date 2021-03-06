import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    // shortcut so we don;t have to type this.props over and over
    const { details, index } = this.props;
    const isAvailable = details.status === "available";
    const buttonText = isAvailable ? "Add To Order" : "Sold Out!";
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">
            {formatPrice(details.price)}
          </span>
        </h3>
        <p>
          {details.desc}
        </p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(index)}
        >
          {buttonText}
        </button>
      </li>
    );
  }
}

Fish.protoTypes = {
  addToOrder: React.PropTypes.func.isRequired,
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired
};

export default Fish;
