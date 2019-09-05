import React from 'react';

import '../css/HeaderBar.css';


const HeaderBar: React.FC = () => {

    return (
        <div className="header-bar">
            <img className="header-logo" src="http://localhost:3232/static/makecode-white.svg" alt="Microsoft MakeCode Icon"></img>
            <div className="spacer" />
            <img className="header-logo ms-logo" src="https://pxt.azureedge.net/blob/106597ae039a275897661651b96856220c9b0fad/static/Micorsoft_logo_rgb_W-white_D-square.png" alt="Microsoft Logo"></img>
        </div>
    );
}

export default HeaderBar;