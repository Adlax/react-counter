import React, { useState, memo, useCallback, useMemo } from "react";

// optimization :
// memo wrapps a component (checks the parameters)
// useCallback shield useless re-creation of declared functions (prevents re declaring)
// useMemo shields re-execution of big/large functions calculations (prevent re exec / protects the result of a big function)

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

// re-render shielded via memo , which compares new and old function/comp parameters...So will not re-rendered,except inside state change OR initialCount prop value changes.
// it block re-render because of parents brut rendering
const Counter = memo(({ initialCount }) => {
	log("<Counter /> rendered", 1);

	const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

	const [counter, setCounter] = useState(initialCount);

	const handleIncrement = useCallback(() => {
		setCounter((oldState) => oldState + 1);
	}, []);

	const handleDecrement = useCallback(() => {
		setCounter((oldState) => oldState - 1);
	}, []);

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
});

export default Counter;
