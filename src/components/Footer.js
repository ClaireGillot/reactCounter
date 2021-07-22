import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="footer">
            <FontAwesomeIcon className="seedling" icon="seedling" />
            <div className="a">Made with 
                <a href="https://reactjs.org/" rel="noreferrer noopener" target="_blank" > React </a>
                at  
                <a href="https://www.lereacteur.io/bootcamp-javascript/formation-developpeur-web-mobile/" rel="noreferrer noopener" target="_blank"> Le Reacteur </a>
                by 
                <a href="https://github.com/ClaireGillot" rel="noreferrer noopener" target="_blank"> Claire </a>
                </div>
        </div>
    )
}

export default Footer;