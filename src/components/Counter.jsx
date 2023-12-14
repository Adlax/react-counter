import React, { useState } from "react";
// log func
import { log } from "../log";
// icons
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
// other comps
import IconButton from "./IconButton";
import CounterOutput from "./CounterOutput";

const isPrime = (number) => {
	log("Calculating if is prime number", 2, "other");

	if (number <= 1) {
		return false;
	}

	const limit = Math.sqrt(number);

	for (let i = 2; i <= limit; i++) {
		if (number % i === 0) {
			return false;
		}
	}

	return true;
};

const Counter = ({ initialCount }) => {
	log("<Counter /> rendered", 1);

	const initialCountIsPrime = isPrime(initialCount);

	const [counter, setCounter] = useState(initialCount);

	const handleIncrement = () => {
		setCounter((oldState) => oldState + 1);
	};

	const handleDecrement = () => {
		setCounter((oldState) => oldState - 1);
	};

	return (
		<section className="counter">
			<p className="counter-info">
				The initial counter value was <strong>{initialCount}</strong>. It <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
			</p>
			<p>
				<IconButton icon={MinusIcon} onClick={handleDecrement}>
					Decrement
				</IconButton>
				<CounterOutput value={counter} />
				<IconButton icon={PlusIcon} onClick={handleIncrement}>
					Increment
				</IconButton>
			</p>
		</section>
	);
};

export default Counter;
