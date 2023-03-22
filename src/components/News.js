import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'science',
        title: ""
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        title: PropTypes.string,
    }

    caps = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.caps(this.props.title)} - True News`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8ee8a7c792a43f6b787807370c883db&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            }
        )
    }
    
    async componentDidMount() {
        this.updateNews()
    }

    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }
    
    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }
    
    render() {
        return (
            <>
            <div className='p-2'>
                <div className='container my-4'>
                    <h1 className='text-center'>The True News - Top {this.caps(this.props.category)} Headlines</h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title? element.title : "No title available"} description={element.description ? element.description : "No description available"} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    <div className="container d-flex justify-content-between my-3">
                        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default News