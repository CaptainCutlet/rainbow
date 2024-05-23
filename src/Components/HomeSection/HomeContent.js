import './HomeContent.css';

const HomeContent = () => {
    const handleRedirect = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="home-content">
            <p>Tired of seeing corporations slap a rainbow on their logo for a quick buck? So are we. $RAINBOW is more than a memecoin—it's a movement. <br>
            </br>Hop on board and let's show the world the true colors of corporate virtue signaling.</p>
            <img src="/assets/description.png" />

        </div>
    );
}

export default HomeContent;
