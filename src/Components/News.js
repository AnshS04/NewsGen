import React, { Component } from 'react'
import NewsItem from './newsItem'

export class News extends Component {
  render() {
    return (
    <div className='container my-3'>
        <h1>Top Headlines of the Day</h1>
        <div className="row">
            <div className="col-md-4">
            <NewsItem title="myTitle" description = "myDescription"/>
            </div>

            <div className="col-md-4">
            <NewsItem title="myTitle" description = "myDescription"/>
            </div>

            <div className="col-md-4">
            <NewsItem title="myTitle" description = "myDescription"/>
            </div>         
        </div>
    </div>
    )
  }
}

export default News