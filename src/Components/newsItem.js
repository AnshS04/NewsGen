import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl:"https://cdn.mos.cms.futurecdn.net/Fij2KqPftDDHWCFBjTGrVQ-1200-80.jpg"} style={{height: "11em"}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="w3-button w3-pink">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem