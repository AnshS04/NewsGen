import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../context/MyContext';

const NavBar = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { setArticles, setTotalResults, setLoading } = useContext(MyContext);

  const searchNews = async (e) => {
    e.preventDefault();
    const url = `https://newsapi.org/v2/top-headlines?category=${searchQuery}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsGen</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>
          <form class="form-inline my-2 my-lg-0 d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" value={searchQuery} aria-label="Search" onChange={(e) => setSearchQuery(e.target.value)} />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchNews}>Search</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default NavBar