


class MarvelServise {
    _api = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // let apikey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';
    getResource = async (url) => {
        let result = await fetch(url);
        
        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status ${result.status}`);
        }
        
        return await result.json();
    }

    // getAllCharacter = () => {
    //     return this.getResource(`${this._apiBase}characters?${this._api}`);
    // }
    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?${this._api}`);
    }
    getNineCharacter = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&${this._api}`);
    }
    updateCharacter = (offset) => {
     return this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._api}`)
    }
    }
export default MarvelServise

// class MarvelService {
//     _apiBase = 'https://gateway.marvel.com:443/v1/public/';
//     // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
//     _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';

//     getResource = async (url) => {
//         let res = await fetch(url);
    
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//         }
    
//         return await res.json();
//     }

//     getAllCharacters = () => {
//         return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
//     }

//     getCharacter = (id) => {
//         return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
//     }
// }

// export default MarvelService;