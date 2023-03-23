import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

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
            page: 1,
            totalResults: 0
        }
        document.title = `True News - ${this.caps(this.props.title)}`
    }

    async updateNews() {
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8ee8a7c792a43f6b787807370c883db&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(60);
        let data = await fetch(url);
        this.props.setProgress(75);
        let parsedData = await data.json()
        this.props.setProgress(80);
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
            }
        )
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews()
    }
    
    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        this.props.setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8ee8a7c792a43f6b787807370c883db&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json()
        this.props.setProgress(60);
        this.setState(
            {
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
            }
        )
        this.props.setProgress(100);
    };

    render() {
        return (
            <>
                <h1 className='text-center my-3'>The True News - Top {this.caps(this.props.category)} Headlines</h1>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element, index) => {
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
}

export default News