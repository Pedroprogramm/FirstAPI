import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
import ErrorBoundary from "../errorBoundary/errorBoundary";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import { Component } from "react";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        activeCharacter: {
            name: '',
            descr: '',
            src: '',
            wiki: '',
            homepage: '',
            comics: [],
        }
    };

    onClick = (character) => {
        this.setState({ activeCharacter: { 
        name: character.name,
         descr: character.description,
          src: `${character.thumbnail.path}.${character.thumbnail.extension}`,
           wiki: character.urls[0].url,
            homepage: character.urls[1].url,
             comics: [character.comics.items],
            }})
    }

render() {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundary/>
                <div className="char__content">
                    <CharList onClick={this.onClick}/>
                    <CharInfo character={this.state.activeCharacter}/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}
}

export default App;