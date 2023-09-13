import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import { getNews } from "../api/getNews";
import {HStack} from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import SomethigWentWrong from "../error/SomethingWentWrong";
import PageNotFound from "../error/PageNotFound";

export default function News({apiVariables,search,updateSearch}) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [nextPage, setNextPage] = useState("");
  const [apiQueries, setApiQueries] = useState({});
  const [err, setErr] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
// eslint-disable-next-line
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetched(false)
        const data = await getNews(apiVariables,search);
        setArticles(data.results);
        setTotalResults(data.totalResults);
        setNextPage(data.nextPage);
        setApiQueries(apiVariables);
        setIsFetched(true)
      } catch (error) {
        console.log("Error in news", error);
        setErr(true);
      }
    };
    fetchData();
  }, [apiVariables,search]);

  const fetchMoreNews = async () => {
    try {
      setIsFetched(false)
      console.log("totalResults", totalResults);
      console.log(apiQueries);
      const data = await getNews(apiQueries,search,nextPage);
      const news = data.results;
      setNextPage(data.nextPage);
      setArticles(articles.concat(news));
      setIsFetched(true)
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreNews}
        hasMore={articles.length !== totalResults}
      >
        <HStack mx="1em" wrap="wrap" justify={["space-evenly","space-evenly","space-between"]}>
          {(()=>{
            if((isFetched && !err) && (articles.length===0 || totalResults===undefined)){
              updateSearch("top")
              return<PageNotFound/>
            }
            else if(err){
              return<SomethigWentWrong/>
            }
            else{
              return(
              isFetched?articles.map((item) => (
               <NewsItem
                  title={item.title}
                  image_url={item.image_url}
                  date={item.pubDate}
                  description={item.description} // Fixed the prop name here
                  link={item.link}
                  category={item.category}
                  key={item.article_id}
                />
              )):<Loader/>
            );
            }
          })()}
        </HStack>
      </InfiniteScroll>
    </>
  );
}