import CharacterSelector 	from './components/CharacterSelector.jsx';
import React  						from 'react';
import {render} 					from 'react-dom';


class App extends React.Component {

	constructor () {
		super();
	}

	render () {
		return (
			<div className="title-container">
				<h1 className="title">Star Wars Characters!</h1>
				<CharacterSelector />
		</div>
		);
	}
}

App.displayName = "App";

render(<App/>, document.getElementById('app'));
