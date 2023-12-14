import React, { useState } from "react";
import { log } from "../log";

const HistoryItem = ({ count }) => {
	log("<HistoryItem/> rendered", 3);
	const [selected, setSelected] = useState(false);

	const handleClick = () => {
		setSelected((oldState) => !oldState);
	};

	return (
		<li onClick={handleClick} className={selected ? "selected" : null}>
			{count}
		</li>
	);
};

const CounterHistory = ({ history }) => {
	log("<CounterHistory /> rendered", 2);

	return (
		<ol>
			{history.map((count, index) => (
				<HistoryItem key={index} count={count} />
			))}
		</ol>
	);
};

export default CounterHistory;
