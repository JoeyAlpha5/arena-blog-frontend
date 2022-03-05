import '../styles/ArticleCardComponent.css';
import DateFormatter from 'react-date-formatter';
import { Link } from "react-router-dom";
const ArticleCardComponent = (props)=>{
    return(
        <div className="col-12 col-lg-4">
            <Link
                to={'/view-article'}
                state={{ data: props.article }}
            >
                <div className="article-card">
                    <div className="article-card-image" style={{backgroundImage:`url(${props.article.article_image_link})`}}>
                    </div>
                    <p className="article-category-name">
                        {props.article.article_category_name}
                    </p>
                    <p className="article-title">
                        {props.article.article_title}
                    </p>
                    <p className="article-content-preview">
                        {props.article.article_content.substring(0,120)}...
                    </p>
                    <div className="article-info">
                        <p className="article-publisher">
                            By <span>{props.article.article_publisher_name}</span>
                        </p>
                        <p className="article-date">
                            {DateFormatter(props.article.article_created_at).shortDate()}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArticleCardComponent;