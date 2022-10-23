import React from 'react';
import '../Styles/Community.scss';

const Community = () => {
    return (
        <div className='Community'>
            <div className= 'left'>
                <div className='title'>
                    IFAN Community
                </div>
                <div className='description'>
                    Starting 2022, IFAN has grown thanks to the tireless efforts of a worldwide decentralized community of crypto enthusiasts, developers, designers, and other professionals. Our community is the key to TON's future, and we'd love for you to join us.
                </div>
                <div className='button'>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
            <div className='right'>
                <div className='img_container'>
                    <img src='https://cdn.supercell.com/supercell.com/221014123006/all/themes/supercell/img/18/bg_timeline_clashofclans.png' alt={'wallet'}/>
                </div>
                <div className='img_container2'>
                    <img src='https://cdn.supercell.com/supercell.com/221014123006/all/themes/supercell/img/18/bg_timeline_clashofclans.png' alt={'wallet'}/>
                </div>
                <div className='img_container3'>
                    <img src='https://cdn.supercell.com/supercell.com/221014123006/all/themes/supercell/img/18/bg_timeline_clashofclans.png' alt={'wallet'}/>
                </div>
            </div>
        </div>
    );
};

export default Community;