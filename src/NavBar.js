import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="NavBar">
			<NavLink exact to="/">
				Back to Vending Machine
			</NavLink>
			<NavLink exact to="/soda">
				SODA
			</NavLink>
			<NavLink exact to="/chips">
				CHIPS
			</NavLink>
			<NavLink exact to="/fresh_sardines">
				FRESH SARDINES
			</NavLink>
		</nav>
	);
};

export default NavBar;
