import './charList.scss';
import Spinner from '../spiner/spiner'
import MarvelServise from '../../services/MarvelService';
import { Component } from 'react';


class CharList extends Component {
    constructor(props){
        super(props);
        this.addAccount();
        
    }
    state = {
        offset: 9,
        characters: [],
        loading: false,
    };

    componentDidUpdate() {

    }

    service = new MarvelServise();

    addAccount = () => {
        this.service
            .getNineCharacter()
            .then(res => {const characters = res.data.results
                this.props.onClick(characters[0]);
                this.setState({characters})
            }
        )      

    }

    onLoadCharacter = () => {
        this.setState({loading: true})
        this.setState((state) => ({
          offset: state.offset + 9
        }))
        console.log(this.state.offset)
        this.service
        .updateCharacter(this.state.offset)
        .then(res => {const characters = [...this.state.characters, ...res.data.results]
            this.setState({ characters });
            this.setState({loading: false})
        console.log(this.state.characters)
        })
      };

      renderCharacter = () => {
        return this.state.characters.map(item => {
          let src;
          if (`${item.thumbnail.path}.${item.thumbnail.extension}` === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
            src = false;
          } else {
            src = true;
          }
      
          return (
            <li className="char__item" key={item.id} onClick={() => { this.props.onClick(item) }}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}  alt={item.name} style={src ? { objectFit: 'cover' } : { objectFit: 'contain' }}></img>
              <div className="char__name">{item.name}</div>
            </li>
          );
        });
      }
      
    render() {
  
    return (
        <div className="char__list">
        
            <ul className="char__grid">
                {this.renderCharacter()}
                </ul>
            {this.state.loading ? <Spinner/> : null}     
            <button className="button button__main button__long" onClick={this.onLoadCharacter}>
                <div className="inner" >load more</div>
            </button>
        </div>
    )
}}

export default CharList;