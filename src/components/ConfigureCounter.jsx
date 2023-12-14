import React, { useState } from "react";
import { log } from "../log";

const ConfigureCounter = ({ onSet }) => {
	log("<ConfigureCounter /> rendered", 1);
	const [inputNumber, setInputNumber] = useState(0);

	const handleChange = (evt) => {
		setInputNumber(parseInt(evt.target.value));
	};

	const handleSet = () => {
		onSet(inputNumber);
		setInputNumber(0);
	};

	return (
		<section id="configure-counter">
			<h2>Set Counter</h2>
			<input type="number" value={inputNumber} onChange={handleChange} />
			<button onClick={handleSet}>Set</button>
		</section>
	);
};

export default ConfigureCounter;
