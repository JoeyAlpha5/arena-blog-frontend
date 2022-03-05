import {useState, useEffect} from 'react';
const GetArticles = ()=>{
    const [articles, setArticles] = useState([]);
    const [callback, setCallback] = useState(false);
    useEffect(()=>{
        const getData = ()=>{
            fetch('https://arena-django-backend.herokuapp.com/')
            .then(res=>res.json())
            .then(data=>{
                setArticles(data);
            })
        }
        // fetch articles from django API
        getData();

    },[callback]);

    return{
        articles
    }
}

export default GetArticles;