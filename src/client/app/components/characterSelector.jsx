import React 							from 'react';

const API_BASE_URL = 'http://swapi.co/api/';

class CharacterSelector extends React.Component {

	constructor(props) {
		super(props);
		this.charactersList;
		this.state = {
			_characters: "",
			_selected: "Not Selected"
		};
	}

  componentDidMount() {
  	var characterListStyles = {
			display: 'block'
		};

    this.serverRequest = $.get(API_BASE_URL+'people', function (data) {
    	this.charactersList = data.results.map((character, i) => {
				return (
					<a style={characterListStyles} key={i} onMouseDown={()=> this.setState({_selected: character.name})} href="#">{character.name}</a>
				);
			}, this);
      this.setState({_characters: "Load success"});
    }.bind(this));
  }

	render () {

		return (
			<div className="character-selector">
				<div className="character-list">
					{this.charactersList}
				</div>
				<div className="selected">Your character: {this.state._selected}</div>
			</div>
		);
	}

}

CharacterSelector.displayName = "CharacterSelector";

export default CharacterSelector;
