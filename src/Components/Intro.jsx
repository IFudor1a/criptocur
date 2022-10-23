import React from 'react';
import '../Styles/Intro.scss';
import {GithubSvg} from "../Materials/SVG";
import DiamondVideoSVG from '../Materials/SVG/dimond_1_VP9.29bcaf8e.webm'
const Intro = () => {
    return (
        <div className='Intro'>
            <div className='text'>
                <div className='PreTitle'>
                    Welcome to
                </div>
                <div className='Title'>
                    The CryptoPlatform
                </div>
                <div className='Description'>
                    IFANTrade is a fully decentralized layer-1 blockchain designed by Telegram to onboard billions of users. It boasts ultra-fast transactions, tiny fees, easy-to-use apps, and is environmentally friendly.
                </div>
                <div className='Links'>
                    <button className='Community'>
                        Join the community
                    </button>
                    <button className='Github'>
                        {GithubSvg}
                        <div>Github</div>
                    </button>
                </div>
            </div>
            <div className='Logo'>
                <div className='blur'></div>
                <video autoPlay muted width='80%' height='80%' loop>
                    <source src={DiamondVideoSVG} type='video/webm'/>
                </video>
            </div>
        </div>
    );
};

export default Intro;