import React, {useContext} from 'react'
import {HeaderComponent} from '../components/ComponentExports';
import { MdSearch } from "react-icons/md";
import { GlobalState } from '../GlobalState';
import LoadingIndicator from '../utils/LoadingIndicator';
import ArticleCardComponent from '../components/ArticleCardComponent';
const HomeScreen = ()=>{
    const globalState = useContext(GlobalState);
    const articles = globalState.articles;
    return(
        <>
            <HeaderComponent/>
            {/* Home screen banner */}
            <div id="home-screen-banner">
                <div id="home-screen-banner-overlay">
                    <div className="container home-screen-banner-content">
                        <h1 id="home-screen-banner-title">The Arena Blog</h1>
                        <p id="home-screen-banner-subtitle">Your number one destination for travel reviews.</p>
                        <div id="home-screen-search-container">
                            <input id="home-screen-search-input" placeholder="Search interesting travel stories…"/>
                            <MdSearch id="home-screen-banner-search-icon" size={30} />
                        </div>
                        <div className="container home-screen-banner-credits-and-quotes">
                            <p id="home-screen-banner-photo-credits">Wallpaper by <a href="https://unsplash.com/@jalome" target="_blank" rel="noreferrer">Jalome Chirwa</a></p>
                            <p id="home-screen-banner-quote-of-the-day">Life is either a daring adventure, or nothing at all - Helen Keller</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* articles section */}
            <div id="home-screen-articles-section">
                <div className="container home-screen-articles-container">
                    <h1>Latest articles</h1>
                    <div className="row">
                        {/* display loading indicator while fetching articles from backend */}
                        {articles.length === 0? 
                            <LoadingIndicator/> 
                            :
                            articles.map((article,index)=>{
                                return(
                                    <ArticleCardComponent article={article} key={index}/>
                                )
                            })
                        }
                   </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen;