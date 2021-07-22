import "../App.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
return (
    <div className="header">
        <FontAwesomeIcon className="calculate" icon="calculator" size="2x" />
        <h1>React Counter</h1>
    </div>
);
};

export default Header;