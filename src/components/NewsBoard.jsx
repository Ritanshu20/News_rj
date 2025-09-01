import { useEffect, useState } from "react"
import { NewsItems } from "./NewsItems";

export const NewsBoard = ({category}) => {
    const [articles ,setArticles] = useState([])
   useEffect(() => {
  const url = `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&apikey=${import.meta.env.VITE_API_KEY}`;
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
}, [category]);

  return (
<div className="container my-4">
  <h2 className="text-center mb-4">
    Latest <span className="badge bg-danger">News</span>
  </h2>

  <div className="row">
    {articles.map((news, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center" key={index}>
        <NewsItems
          title={news.title}
          description={news.description}
          src={news.image}
          url={news.url}
        />
      </div>
    ))}
  </div>
</div>

  )
}
export default NewsBoard
