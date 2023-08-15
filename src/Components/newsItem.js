import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, time, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex: '1'}}>
            {source}
          </span>
          <img 
            src={
              imageUrl
                ? imageUrl
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4j0-GbfreurgxtgbySFRLHlKVwVhLhd453g&usqp=CAU"
            }
            style={{ height: "15em" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              {title}
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(time).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="w3-button w3-pink"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
