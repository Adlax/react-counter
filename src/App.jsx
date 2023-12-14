import React, { useState } from "react";
import { log } from "./log";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ConfigureCounter from "./components/ConfigureCounter";

const App = () => {
	log("<App /> rendered");
	const [chosenCount, setChosenCount] = useState(0);

	const handleSetCount = (newCount) => {
		setChosenCount(newCount);
	};

	return (
		<>
			<Header />
			<main>
				<ConfigureCounter onSet={handleSetCount} />
				<Counter initialCount={chosenCount} />
			</main>
		</>
	);
};

export default App;
