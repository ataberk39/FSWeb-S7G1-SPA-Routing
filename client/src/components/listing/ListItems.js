import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./../../FetchedDatas/tmdb_Trending_All_Request";
import "../../App.css";
import TrendMoviesDetail from "../TrendMoviesDetail";
import TrendPersonDetail from "../TrendPersonDetail";
import TrendTvDetail from "../TrendTvDetail";

const ListItems = (props) => {
  const [trendList, setTrendList] = useState([]);
  const [prevTrendList, setPrevTrendList] = useState("");

  const params = useParams();
  if (params.name != prevTrendList) {
    setPrevTrendList(params.name);
  }
  //setPrevTrendList(params.name);
  //console.log(params);

  useEffect(() => {
    const getTrendList = async (trend_name) => {
      try {
        let result = await data.getTrendRequest(
          trend_name,
          data.time_window.week,
          1
        );
        console.log(result);
        setTrendList(result);
      } catch (error) {
        console.error("Error fetching trend list:", error);
      }
    };
  
    if (prevTrendList) {
      getTrendList(prevTrendList);
    }
  }, [prevTrendList]);

  return (
    <div className="trend-list">
      <>
        {prevTrendList === "movie" && trendList.results
          ? trendList.results.map((item, index) => {
              return (
                <TrendMoviesDetail
                  key={index}
                  original_title={item.title}
                  image={item.backdrop_path}
                />
              );
            })
          : ""}
        {prevTrendList === "person" && trendList.results
          ? trendList.results.map((item, index) => {
              return (
                <TrendPersonDetail
                  key={index}
                  original_title={item.name}
                  image={item.profile_path}
                  popularity={item.popularity}
                  department={item.known_for_department}
                />
              );
            })
          : ""}

        {prevTrendList === "tv" && trendList.results
          ? trendList.results.map((item, index) => {
              return (
                <TrendTvDetail
                  key={index}
                  original_title={item.original_name}
                  image={item.poster_path}
                  overview={item.overview}
                  popularity={item.popularity}
                  vote_average={item.vote_average}
                />
              );
            })
          : ""}
      </>
    </div>
  );
};

export default ListItems;
