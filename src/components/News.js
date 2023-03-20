import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    // page = 1
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e8ee8a7c792a43f6b787807370c883db&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e8ee8a7c792a43f6b787807370c883db&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
        })
    }
    
    handleNextClick = async () => {
        if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){
            
        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e8ee8a7c792a43f6b787807370c883db&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
            })
        }
    }

    
    render() {
        return (
            <div className='container my-3'>
                <h1>The True News - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title? element.title : "No title available"} description={element.description ? element.description : "No description available"} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News