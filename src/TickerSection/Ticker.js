import './Ticker.css';

const Ticker = () => {
    const handleRedirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="Ticker">
            <div className="ticker-slide">
                <h2 className="slideInOut">$RAINBOW $RAINBOW $RAINBOW $RAINBOW $RAINBOW $RAINBOW $RAINBOW</h2>
            </div>
        </div>
    );
}

export default Ticker;

