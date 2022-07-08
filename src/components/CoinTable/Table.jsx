import React, { Component } from "react";
import CoinRow from "./CoinRow";
import './Table.css';

export default class Card extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Ticker</th>
						<th>Price</th>
					</tr>
                    <CoinRow name="Bitcoin" ticker="BTC" price={9999.99}/>
                    <CoinRow name="Ethereum" ticker="ETH" price={3999}/>
					<CoinRow name="Tether" ticker="USDT" price={1}/>
				</thead>
				<tbody></tbody>
			</table>
		);
	}
}
