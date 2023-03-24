import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const caps = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


    const updateNews = async() => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(60);
        let data = await fetch(url);
        props.setProgress(75);
        let parsedData = await data.json()
        props.setProgress(80);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `True News - ${caps(props.title)}`
        updateNews()
        // eslint-disable-next-line
    }, [])
    
    const fetchMoreData = async () => {
        props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    };
    return (
        <>
            <h1 className='text-center' style={{marginTop: '75px', marginBottom: '25px'}}>The True News - Top {caps(props.category)} Headlines</h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={element.title ? element.title : "No title available"} description={element.description ? element.description : "No description available"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'science',
    title: ""
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
}

export default News