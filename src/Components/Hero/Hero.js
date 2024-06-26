import React from 'react';
import './Hero.css';

const Hero = () => {
    const handleRedirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="hero">
            <div className='hero-wrapper'>
                <div className='hero-left'>

                    <div className="logo-animation" onClick={() => handleRedirect('#')}>
                        <img className='logo-dancing' src='/assets/dance-unscreen.gif' ></img>
                        {/* <img width="" height="" src='/assets/jump-unscreen.gif' ></img> */}
                    </div>

                </div>

                <div className='hero-right'>
                    <div className='right-wrapper'>
                        <div className='h1-area'>
                            <h1 className='top-h1-text'>F*ck  <span className='rainbow_text_animated'>$rainbow</span></h1>
                            <h1 className='bottom-h1-text'>Capitalism</h1>
                        </div>
                    </div>
                    <div className='middle-area'>
                        <h4 className='h4-middle'>This shit is so <span className='rainbow_text_animated1'>annoying.</span></h4>
                        <img className='rainbow-line2' src='/assets/rainbow-line.png'></img>
                    </div>
                    <h2>Official CA: 0x68AA3F1E8BFC29562a594a992900A95Cd3f5E7C8</h2>
                    <div className='logo-area'>
                        <div className="logo-container-hero" onClick={() => handleRedirect('https://t.me/+JPMJlF3DCRQ0NTUx')}>
                            <img src='/assets/telegram-icon-new.png' alt="Telegram" />
                        </div>
                        <div className="logo-container-hero" onClick={() => handleRedirect('https://x.com/0xgaycapitalism?s=21&t=tHBdjygLot0cNeq8gDNIYQ')}>
                            <img src='/assets/xx.png' alt="Twitter" />
                        </div>
                        <div className="logo-container-hero" onClick={() => handleRedirect('https://dexscreener.com/base/0x680276bb6c2023dfa5b5f37950703bd5826cd9bc')}>
                            <img src='/assets/ds.png' alt="Dexscreener" />
                        </div>
                    </div>

                </div>


            </div>



        </div>
    );
}

export default Hero;