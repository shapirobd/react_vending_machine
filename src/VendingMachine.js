import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<div className="VendingMachine-menu">
				<Link exact to="/soda">
					SODA
				</Link>
				<Link exact to="/chips">
					CHIPS
				</Link>
				<Link exact to="/fresh_sardines">
					FRESH SARDINES
				</Link>
			</div>
		</div>
	);
};

export default VendingMachine;
