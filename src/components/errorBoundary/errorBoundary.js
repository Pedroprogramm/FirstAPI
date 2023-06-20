import { Component } from "react";
import RandomChar from "../randomChar/RandomChar";

class ErrorBoundary extends Component {
    state = {
        erorr : false
    }
 
    render() {
        if (this.state.erorr) {
            return (<>
<div class="tenor-gif-embed" data-postid="18315788" data-share-method="host" data-aspect-ratio="0.70625" data-width="100%"><a href="https://tenor.com/view/piffle-error-robot-glitch-broken-gif-18315788">Piffle Error Sticker</a>from <a href="https://tenor.com/search/piffle-stickers">Piffle Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            </>)
        }
    return (
        <RandomChar/>
    )
    }
}
export default ErrorBoundary