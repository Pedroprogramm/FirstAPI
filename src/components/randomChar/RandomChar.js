import { Component } from 'react';

import Spinner from '../spiner/spiner'
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelServise from '../../services/MarvelService';

class RandomChar extends Component {
    constructor(props){
        super(props);
        this.updateChar();
    }
    state = {
        character: {
        name: 'null',
        description: 'null',
        hrefHome: 'null',
        hrefWiki: 'null',
        src: 'null',
        },
        loading: false,
    };

    componentDidUpdate() {
        if (!this.state.loading) {
        const imgElement = document.querySelector('.randomchar__img');
        if (this.state.character.src === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
      imgElement.style.objectFit = 'contain';
    } else if (this.state.character.src !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgElement.style.objectFit = 'cover'
    }}
    }

    service = new MarvelServise();

    updateChar = () => {
        this.setState({loading: true})
        let id =  Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.service
            .getCharacter(id)
            .then(res => {
                this.setState({character: {
                    name: res.data.results[0].name,
                    description: res.data.results[0].description ,
                    hrefHome: res.data.results[0].urls[0].url,
                    hrefWiki: res.data.results[0].urls[1].url,
                    src: `${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`,
                }})
                this.setState({loading: false})
            })
        // this.service.updateLoader();
        console.log(this.state.loading)
    }

    render() {
        const { name, description, hrefHome, hrefWiki, src } = this.state.character;
        if (this.state.loading){
            return (
                <div className="randomchar">
            <Spinner/>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner" onClick={this.updateChar}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>)
        }
    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={src} alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                    {description}                    
                    </p>
                    <div className="randomchar__btns">
                        <a href={hrefHome} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={hrefWiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner" onClick={this.updateChar}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}
}

export default RandomChar;