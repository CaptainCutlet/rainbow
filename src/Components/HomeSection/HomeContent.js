import './HomeContent.css';

const HomeContent = () => {
    const handleRedirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="home-content">
            <h1>EMBRACE RAINBOW CAPITALISM</h1>
            <p>Tired of seeing corporations slap a rainbow on their logo for a quick buck? So are we. $RAINBOW is more than a memecoin—it's a movement. Hop on board and let's show the world the true colors of corporate virtue signaling.</p>
            <div className="logos2">
                <div className="logo-container2" onClick={() => handleRedirect('https://t.me/+JPMJlF3DCRQ0NTUx')}>
                    <img src='/assets/tg.jpg' alt="Telegram" />
                </div>
                <div className="logo-container2" onClick={() => handleRedirect('https://x.com/0xgaycapitalism?s=21&t=tHBdjygLot0cNeq8gDNIYQ')}>
                    <img src='/assets/xx.png' alt="Twitter" />
                </div>
                <div className="logo-container2" onClick={() => handleRedirect('https://dexscreener.com')}>
                    <img src='/assets/ds.png' alt="Dexscreener" />
                </div>
            </div>
        </div>
    );
}

export default HomeContent;
