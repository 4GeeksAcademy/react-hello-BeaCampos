import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron 
                    title="A Warm Welcome!" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid." 
                    buttonLabel="Call to action!" 
                />
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