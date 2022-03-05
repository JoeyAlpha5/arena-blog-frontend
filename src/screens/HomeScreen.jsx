import {HeaderComponent} from '../components/ComponentExports';
const HomeScreen = ()=>{
    return(
        <>
            <HeaderComponent/>
            {/* Home screen banner */}
            <div id="home-screen-banner">
                <div id="home-screen-banner-overlay">
                    <div className="container home-screen-banner-content">
                        <h1 id="home-screen-banner-title">The Arena Blog</h1>
                        <p id="home-screen-banner-subtitle">Your number one destination for travel reviews.</p>
                        <input id="home-screen-search-input" placeholder="Search interesting travel stories…"/>
                        <p id="home-screen-banner-photo-credits">Wallpaper by <a href="https://unsplash.com/@jalome" target="_blank" rel="noreferrer">Jalome Chirwa</a></p>
                        <p id="home-screen-banner-quote-of-the-day">Life is either a daring adventure, or nothing at all - Helen Keller</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen;