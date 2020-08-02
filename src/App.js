import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Footer />
    </div>
  );
}

export default App;
