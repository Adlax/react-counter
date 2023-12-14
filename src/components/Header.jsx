import React from "react";
import { log } from "../log";
import logoImg from "../assets/logo.png";

const Header = () => {
	log("<Header /> rendered", 1);

	return (
		<header id="main-header">
			<img src={logoImg} alt="Loupe" />
			<h1>React - Behind the scenes</h1>
		</header>
	);
};

export default Header;
