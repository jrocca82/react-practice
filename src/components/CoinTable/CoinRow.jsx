import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CoinRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			price: this.props.price,
		};
        this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();

		const randomPercentage = 0.995 + Math.random() * 0.01;

		this.setState(function (oldState) {
			return {
				price: oldState.price * randomPercentage,
			};
		});
	}

	render() {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.ticker}</td>
				<td>${this.state.price.toFixed(2)}</td>
				<td>
					<button onClick={this.handleClick}>Refresh Price</button>
				</td>
			</tr>
		);
	}
}

CoinRow.propTypes = {
	name: PropTypes.string.isRequired,
	ticker: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};
