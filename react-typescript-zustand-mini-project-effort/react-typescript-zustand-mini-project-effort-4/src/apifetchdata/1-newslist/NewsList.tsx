import React, { useEffect } from 'react';
import useNewsStore from '../../store/store';
import { Link } from 'react-router-dom';

const NewsListComp: React.FC = () => {
    const {news,loading,error,fetchNews} = useNewsStore()

    useEffect(() => {
        fetchNews()
    },[fetchNews])


    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
  return (
    <div>
        <h1>Latest News</h1>
        <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h2>{article.headLine}</h2>
            <p>{article.subHeadline}</p>
            <Link href={article.newsLink} target="_blank" rel="noopener noreferrer">
              <img src={article.headlineImage} alt={article.headLine} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsListComp;