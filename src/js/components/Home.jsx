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
						<Card 
						url="https://picsum.photos/350/200?random=1"
						title="Titulo 1"
						/>
					</div>
					<div class="col-3">
						<Card 
						url="https://picsum.photos/350/200?random=2"
						title="Titulo 2"
						/>
					</div>
					<div class="col-3">
						<Card 
						url="https://picsum.photos/350/200?random=3"
						title="Titulo 3"
						/>
					</div>
					<div class="col-3">
						<Card 
						url="https://picsum.photos/350/200?random=4"
						title="Titulo 4"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;