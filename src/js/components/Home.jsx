import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<div class="row">
					<div class="col-3">
						<Card />
					</div>
					<div class="col-3">
						<Card />
					</div>
					<div class="col-3">
						<Card />
					</div>
					<div class="col-3">
						<Card />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;