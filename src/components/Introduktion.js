import React from 'react'
import ReactDOM from "react-dom"



export const Introduktion = props => {

	return (
		<div className="Introduktion">
			<h2>{props.namn}</h2>
			<h2>{props.efternamn}</h2>
			<h2>{props.klass}</h2>
		</div>
	)
}

export default Introduktion


/*

INSTRUKTIONER FÖR UPPGIFT 1:

	1. Denna komponent skall ta emot 3x prop värden som fyller i de färdiga fälten (fornamn, efternamn, kurs).

	2. Komponenten skall sedan importeras och användas i Uppgift1.js

	3. Värdena som skickas med skall vara korrekta(ditt namn, ditt klassnamn, kursens namn)

 */