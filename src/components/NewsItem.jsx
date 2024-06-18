import React from 'react'

export default function NewsItem(props) {
    let { title, description, url, info, author, date } = props;
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={!url ? "https://cdn.dribbble.com/users/48599/screenshots/911869/media/fa5ba60f60cbda1719f7b20e69b115a1.png" : url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} dated {new Date(date).toGMTString()}</small></p>
                    <a href={info} className="btn btn-primary" target="_blank" >Read More</a>
                </div>
            </div>
        </div>
    )

}
