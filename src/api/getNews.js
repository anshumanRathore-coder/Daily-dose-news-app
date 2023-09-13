export const getNews = async (elem,search, pageNo) => {
  try {
    //checking condition for page is present or not
    if (pageNo !== undefined) {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&q=${
          search
        }&language=${elem.language}&country=${elem.country}&category=${
          elem.category
        }&image=1&page=${pageNo}`
      );
      const jsonData = await response.json();
      const data = {
        totalResults: jsonData.totalResults,
        results: jsonData.results,
        nextPage: jsonData.nextPage,
      };
      return data;
    } 
    
    else {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_API_KEY}&q=${
          search
        }&language=${elem.language}&country=${elem.country}&category=${
          elem.category
        }`
      );
      const jsonData = await response.json();
      const data = {
        totalResults: jsonData.totalResults,
        results: jsonData.results,
        nextPage: jsonData.nextPage,
      };
      console.log("results", data.totalResults);
      return data;
    }
  } 
  catch (error) {
    console.log(error);
  }
};
