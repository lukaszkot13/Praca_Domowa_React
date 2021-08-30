import logo from "./logo.svg";
import "./App.css";
import Title from "./ComponentsA/Title";
import Przycisk from "./ComponentsA/BomponentsB/Przycisk";
import { useEffect, useState } from "react";

function App() {
	const [title, setTitle] = useState("Moja pierwsza Apka");
	function zmiana() {
		setTitle("Moja pierwsza Apka w React");
	};

	useEffect(() => {
		alert("Teraz był efekt!!");
	}, [title]) ;

	return (
		<div className="App">
			{title}
			
			<Title />
			<button tekst='zmiana tytułu'  onClick={zmiana} zmiana={zmiana}/>
			<Title title="Mateusz" />

			<Przycisk />
		</div>
	);
}

export default App;
