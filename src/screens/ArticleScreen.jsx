import {HeaderComponent} from '../components/ComponentExports';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import DateFormatter from 'react-date-formatter';
const ArticleScreen = (props)=>{
    const location = useLocation()
    const { data } = location.state
    
    // scroll back to top
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <>
            <HeaderComponent/>
            <div className="container full-article-preview-container">
                <div className="full-article-image" style={{backgroundImage:`url(${data.article_image_link})`}}>
                </div>
                <p className="full-article-category-name">
                    {data.article_category_name}
                    <br/>
                    <span>{DateFormatter(data.article_created_at).shortDate()}</span>
                </p>
                <h1>
                    {data.article_title}
                    <span className="full-article-publisher-name">by {data.article_publisher_name}</span>
                </h1>
                
                <pre>
                    {data.article_content}
                </pre>
                
            </div>
        </>
    )
}

export default ArticleScreen;