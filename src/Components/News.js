import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./newsItem";
import PropTypes from "prop-types";
import { PulseLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import MyContext from "../context/MyContext";

const News = (props) => {

  // const [articles, setArticles] = useState([])
  // const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  // const [totalResults, setTotalResults] = useState(0)

  const { articles, setArticles, totalResults, setTotalResults, loading, setLoading } = useContext(MyContext);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `NewsGen - ${capitalizeFirstLetter(props.category)}`;
    updateNews()
    // eslint-disable-next-line
  },[])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

    return (
      <>
        <h1 className="text-center" style={{ margin: "20px 0px", marginTop: "80px"}}>
          {capitalizeFirstLetter(props.category)} - Top Headlines
        </h1>
        {loading && <PulseLoader className="text-center" color="#36d7b7" />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<PulseLoader className="text-center" color="#36d7b7" />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 100)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      time={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
