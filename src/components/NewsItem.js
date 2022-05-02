import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }
                }>
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>
                <a href={newsUrl} target="_blank" rel="noreferrer">
                    <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                    <a rel="noreferrer" className="card-title fs-5 fw-bold text-reset text-decoration-none text" href={newsUrl} target="_blank">{title}  </a>
                    <p className="card-text">{description} <a rel="noreferrer" href={newsUrl} target="_blank" className="text-reset">Read More</a></p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
