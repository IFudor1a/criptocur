import React from 'react';
import '../Styles/Body.scss';
import WalletPNG from '../Materials/SVG/wallets_banner.4b9b9d60.png'
const Body = () => {
    return (
        <div className='Body'>
            <Massive/>
            <Wallet/>
        </div>
    );
};


const Wallet = () => {
    return (
        <div className='Wallet'>
             <div className='Left'>
                 <div className='title'>
                     IFAN Wallets
                 </div>
                 <div className='description'>
                     IFAN wallet allows you to make fast secure blockchain-based payments without intermediaries. A wallet that only you control - directly, without middlemen or bankers.
                 </div>
                 <div className='button'>
                     <button>
                         Learn More
                     </button>
                 </div>
             </div>
             <div className='Right'>
                 <div className='img_container'>
                 <img src={WalletPNG} alt={'wallet'}/>
                 </div>
             </div>
        </div>
    )
}

const Massive = () => {
    return (
        <div className='Massive'>
            <div className='title'>
                Mass adoption
            </div>
            <div className='postTitle'>
                Massive distribution
            </div>
            <div className='description'>
                IFAN is scalable and shardable. Its flexible architecture lets it grow and grow, with no loss of performance.
            </div>
            <div className='Icons'>
                <div className='icon'>
                    <div className='title'>Transactions</div>
                    <div className='desc'>84,812,799</div>
                </div>
                <div className='icon'>
                    <div className='title'>
                        Accounts
                    </div>
                    <div className='desc'>
                        1,376,947
                    </div>
                </div>
                <div className='icon'>
                    <div className='title'>
                        Validators
                    </div>
                    <div className='desc'>
                        224
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;