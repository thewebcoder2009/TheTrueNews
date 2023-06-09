import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className='my-3'>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark z-1" style={{left: "50%", transform: "translateX(-50%)"}}>
                    {source}
                </span>
                <img src={!imageUrl ? "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" : imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-primary">By <strong>{!author ? "Unknown Author" : author}</strong> on <strong>{new Date(date).toGMTString()}</strong></small></p>
                    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem