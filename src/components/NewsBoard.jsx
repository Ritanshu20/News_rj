import { useEffect, useState } from "react"
import { NewsItems } from "./NewsItems";

export const NewsBoard = () => {
    const [articles ,setArticles] = useState([])
   useEffect(() => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data.articles)) {
        setArticles(data.articles);
      } else {
        console.error("Invalid response:", data);
        setArticles([]); // fallback to empty array
      }
    })
    .catch((error) => {
      console.error("Error fetching news:", error);
      setArticles([]); // fallback in case of fetch error
    });
}, []);

  return (
    <div>
   


        <h2 className = "text-center">Latest<span className="badge bg-danger     "> News</span></h2>

        {articles.map((news,index)=>{
            return <NewsItems key={index} title={news.tittle} description= { news.description} src = { news.urlToImage} url = {news.url }
            />
        })}
    </div>
  )
}
export default NewsBoard