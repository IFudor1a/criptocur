import React from 'react';
import '../Styles/Header.scss';
import {LangSvg} from "../Materials/SVG";
import LogoSVG from '../Materials/SVG/irisnet-iris-logo.svg'
const Header = () => {
    return (
        <div className='Header'>
            <div className='Logo'>
                <img src={LogoSVG} alt='svg' width={30} height={30}/>
                <div className='title'>IFANTrade</div>
            </div>
            <div className='Links'>
                <a>Learn</a>
                <a>Developers</a>
                <a>Community</a>
                <a>Trade</a>
            </div>
            <div className='Lang'>
                {LangSvg}
                <div>English</div>
            </div>
        </div>
    );
};

export default Header;