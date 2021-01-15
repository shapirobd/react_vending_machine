import VendingMachine from "./VendingMachine";
import { BrowserRouter, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import FreshSardines from "./FreshSardines";
import NavBar from "./NavBar";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Route exact path="/">
					<VendingMachine />
				</Route>
				<Route exact path="/soda">
					<Soda />
				</Route>
				<Route exact path="/chips">
					<Chips />
				</Route>
				<Route exact path="/fresh_sardines">
					<FreshSardines />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
