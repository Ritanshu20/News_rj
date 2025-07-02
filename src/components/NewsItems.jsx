export const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "250px" }} // ✅ fixed typo and small size
    >
      <img
        src={src || "https://via.placeholder.com/300x180?text=No+Image"} // ✅ fallback image
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        <p className="card-text">
          {description || "No description available for this article."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};
