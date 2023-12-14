import React, { useState } from "react";
import { log } from "./log";
import Header from "./components/Header";
import Counter from "./components/Counter";

const App = () => {
	log("<App /> rendered");
	const [inputNumber, setInputNumber] = useState(0);
	const [chosenCount, setChosenCount] = useState(0);

	const handleChange = (evt) => {
		setInputNumber(parseInt(evt.target.value));
	};

	const handleSet = () => {
		setChosenCount(inputNumber);
		setInputNumber(0);
	};

	return (
		<>
			<Header />
			<main>
				<section id="configure-counter">
					<h2>Set Counter</h2>
					<input type="number" value={inputNumber} onChange={handleChange} />
					<button onClick={handleSet}>Set</button>
				</section>
				<Counter initialCount={chosenCount} />
			</main>
		</>
	);
};

export default App;
