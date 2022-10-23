import React from 'react';
import LogoSVG from "../Materials/SVG/irisnet-iris-logo.svg";
import {GithubFooterSvg} from "../Materials/SVG";
import '../Styles/Footer.scss';
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='logo'>
                <img src={LogoSVG} alt='svg' width={30} height={30}/>
                <div className='title'>IFANTrade</div>
            </div>
            <div className='license'>© 2022 IFAN Foundation</div>
            <div className='links'>
                <div className='link'>
                {GithubFooterSvg}
                </div>
            </div>
        </div>
    );
};

export default Footer;